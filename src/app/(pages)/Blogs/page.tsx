import axios, { AxiosError } from "axios";
import { Metadata } from "next";
import React, { Suspense } from "react";

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

async function getData() {
  try {
    const { data } = await axios.get("http://localhost:3000/api/blog");

    return { data: data, err: null };
  } catch (error) {
    const e = error as AxiosError<any>;
    return {
      err: e.response?.data.msg,
    };
  }
}

async function BlogPage() {
  const { data, err } = await getData();

  if (err) {
    return (
      <div className="h-[50vh] flex justify-center items-center">
        <h1 className="font-bold text-[2rem] text-[#780000] ">{err}</h1>
      </div>
    );
  }

  return (
    <div className="py-[2rem]">
      <Suspense fallback={"loading..."}>
        {Object.keys(data.result as Data).map((items, i) => (
          <div
            className="bg-[#FFEA9F] mx-[2rem] px-[1.5rem] pb-[1rem] mb-[2rem]"
            key={i}
          >
            <div className="flex justify-between mb-[1rem]">
              <h1 className="bg-[#F92929] px-[1rem] py-[0.7rem] text-white rounded-b-lg ">
                <p className="w-[5rem] text-nowrap overflow-hidden">
                  {data.result[i].createdAt}
                </p>
              </h1>
              <h1 className="bg-[#FFC6C6] px-[1rem] py-[0.7rem] text-black rounded-b-lg">
                TYPE : {data.result[i].type}
              </h1>
            </div>

            <h1 className="mt-[1rem] font-bold text-[1.4rem]">
              {data.result[i].heading}
            </h1>

            <p className="mb-[1rem] mt-[0.3rem] text-justify">
              {data.result[i].dis}
            </p>

            <h1 className="text-right text-[#FF2F2F] font-bold text-[1.2rem]">
              - BY {data.result[i].writerName}
            </h1>
          </div>
        ))}
      </Suspense>
    </div>
  );
}

export default BlogPage;
