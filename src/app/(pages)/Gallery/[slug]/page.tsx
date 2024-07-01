import axios from "axios";
import Image from "next/image";
import React, { Suspense } from "react";
import SingleImage from "./singleImage";
import ImageLinkPage from "../imagelinks";
import Pagination from "./pagination";

async function getData(
  category: string,
  currentPage: number,
  imageLimit: number
) {
  let getQuery = `?category=${category}&page=${currentPage}&limit=${imageLimit}`;

  const { data } = await axios.get(
    `http://localhost:3000/api/images${getQuery}`
  );

  return data;
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
  const imageLimit = Number(searchParams?.limit) || 3;

  const data = await getData(category, currentPage, imageLimit);

  return (
    <div className="pb-[3rem]">
      <ImageLinkPage category={category} />

      <Suspense key={category + currentPage} fallback={"loading..."}>
        <div className="my-[4rem] px-[1rem] flex flex-wrap justify-center gap-[0.6rem]">
          {Object.keys(data.result).map((items, i) => (
            <div className="relative w-full max-w-[20rem] h-[20rem]" key={i}>
              <Image
                src={data.result[items].image_Url}
                alt="photo"
                sizes="(max-width: 768px) 100vw, 700px"
                fill
                priority
                className="border object-cover object-center relative "
                key={i}
              />

              <SingleImage singlImage={data.result[items]} keys={i} />
            </div>
          ))}
        </div>
      </Suspense>
      <Pagination data={data} />
    </div>
  );
}

export default ImageTypePage;
