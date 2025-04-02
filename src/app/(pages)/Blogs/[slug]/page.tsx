import axios, { AxiosError } from "axios";
import React, { Suspense } from "react";
// import ImageLinkPage from "../imagelinks";
import Pagination from "./pagination";
import { Metadata } from "next";

type Data = {
  _id: string;
  writerName: string;
  heading: string;
  dis: string;
  type: string;
  createdAt: string;
};

export const metadata: Metadata = {
  title: "Blog",
};

async function getData(type: string, currentPage: number, blogLimit: number) {
  try {
    let getQuery = `?type=${type}&page=${currentPage}&limit=${blogLimit}`;

    const { data } = await axios.get(
      `http://localhost:3000/api/blog${getQuery}`
    );

    return { data: data, err: null };
  } catch (error) {
    const e = error as AxiosError<any>;
    return { data: null, err: e.response?.data.msg };
  }
}

async function BlogTypePage({
  searchParams,
}: {
  searchParams?: {
    type?: string;
    page?: string;
    limit?: string;
  };
}) {
  const type = searchParams?.type || "";
  const currentPage = Number(searchParams?.page) || 1;
  const blogLimit = Number(searchParams?.limit) || 10;

  const { data, err } = await getData(type, currentPage, blogLimit);

  if (err) {
    return (
      <div className=" h-[50vh] flex justify-center items-center">
        <h1 className="font-bold text-[2rem] text-[#780000] ">{err}</h1>
      </div>
    );
  }

  return (
    <div className="py-[2rem]">
      {Object.keys(data.result as Data).map((items, i) => (
        <div
          className="bg-[#FFEA9F] mx-[2rem] px-[1.5rem] pb-[1rem] mb-[2rem]"
          key={i}
        >
          <div className="flex justify-between mb-[1rem]">
            <h1 className="bg-[#F92929] px-[1rem] py-[0.7rem] text-white rounded-b-lg ">
              <p className="w-[5.1rem] text-nowrap overflow-hidden">
                {data.result[items].createdAt}
              </p>
            </h1>
            <h1 className="bg-[#FFC6C6] px-[1rem] py-[0.7rem] text-black rounded-b-lg">
              TYPE : {data.result[items].type}
            </h1>
          </div>

          <h1 className="mt-[1rem] font-bold text-[1.4rem]">
            {data.result[items].heading}
          </h1>

          <p className="mb-[1rem] mt-[0.3rem] text-justify">
            {data.result[items].dis}
          </p>

          <h1 className="text-right text-[#FF2F2F] font-bold text-[1.2rem]">
            - BY {data.result[items].writerName}
          </h1>
        </div>
      ))}

      <Pagination data={data} />
    </div>
  );
}

export default BlogTypePage;
