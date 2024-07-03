import axios from "axios";
import React, { Suspense } from "react";

async function getData() {
  try {
    const { data } = await axios.get("http://localhost:3000/api/blog");

    return data;
  } catch (error) {
    console.log("error");
  }
}

async function BlogPage() {
  const data = await getData();

  return (
    <div className="py-[2rem]">
      <Suspense fallback={"loading..."}>
        {Object.keys(data.result).map((items, i) => (
          <div
            className="bg-[#FFEA9F] mx-[2rem] px-[1.5rem] pb-[1rem] mb-[2rem]"
            key={i}
          >
            <div className="flex justify-between mb-[1rem]">
              <h1 className="bg-[#F92929] px-[1rem] py-[0.7rem] text-white rounded-b-lg ">
                <p className="w-[5rem] text-nowrap overflow-hidden">
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
      </Suspense>
    </div>
  );
}

export default BlogPage;
