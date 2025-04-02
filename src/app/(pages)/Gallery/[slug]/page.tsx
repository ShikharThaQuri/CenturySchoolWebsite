import axios, { AxiosError } from "axios";
import Image from "next/image";
import React, { Suspense } from "react";
import Pagination from "./pagination";
import Link from "next/link";
import { Metadata } from "next";

type Data = {
  _id: string;
  imageDis: string;
  image_Url: string;
  public_id: string;
  pin: boolean;
  category: string;
  createdAt: string;
  updatedAt: string;
};

export const metadata: Metadata = {
  title: "Gallery",
};

async function getData(
  category: string,
  currentPage: number,
  imageLimit: number
) {
  try {
    let getQuery = `?category=${category}&page=${currentPage}&limit=${imageLimit}`;

    const { data } = await axios.get(
      `http://localhost:3000/api/images${getQuery}`
    );

    return { data: data, err: null };
  } catch (error) {
    const e = error as AxiosError<any>;
    return { data: null, err: e.response?.data.msg };
  }
}

async function ImageTypePage({
  searchParams,
}: {
  searchParams?: {
    category?: string;
    page?: string;
    limit?: string;
  };
}) {
  const category = searchParams?.category || "";
  const currentPage = Number(searchParams?.page) || 1;
  const imageLimit = Number(searchParams?.limit) || 10;

  const { data, err } = await getData(category, currentPage, imageLimit);

  if (err) {
    return (
      <div className=" h-[50vh] flex justify-center items-center">
        <h1 className="font-bold text-[2rem] text-[#780000] ">{err}</h1>
      </div>
    );
  }

  return (
    <div className="pb-[3rem]">
      <div className="my-[4rem] px-[1rem] flex flex-wrap justify-center gap-[0.6rem]">
        {Object.keys(data.result as Data).map((items, i) => (
          <Link key={i} href={`/Gallery/AllGallery/${data.result[items]._id}`}>
            <div
              className="relative w-full min-w-[20rem] max700:min-w-[12rem]  max700:max-w-[12rem]  max-w-[20rem] h-[20rem] max700:h-[12rem] hover:opacity-80"
              key={i}
            >
              <Image
                src={data.result[items].image_Url}
                alt="photo"
                sizes="(max-width: 768px) 100vw, 700px"
                fill
                priority
                className="border object-cover object-center relative "
                key={i}
              />
            </div>
          </Link>
        ))}
      </div>
      <Pagination data={data} />
    </div>
  );
}

export default ImageTypePage;
