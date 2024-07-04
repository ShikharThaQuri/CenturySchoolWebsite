import React, { Suspense } from "react";

import Link from "next/link";
import Gellarymid from "./gellarymid";
import Image from "next/image";
import axios, { AxiosError } from "axios";

async function getData() {
  try {
    const { data } = await axios.get("http://localhost:3000/api/images");

    return { data: data, err: null };
  } catch (error) {
    const e = error as AxiosError<any>;
    return { data: null, err: e.response?.data.msg };
  }
}

async function GallerySection() {
  const { data, err } = await getData();

  if (err) {
    return (
      <div className=" bg-[#0096C7] h-[50vh] flex justify-center items-center">
        <h1 className="font-bold text-[2rem] text-[#780000] ">{err}</h1>
      </div>
    );
  }

  return (
    <div className="px-[5.5rem] bg-[#0096C7] py-[4rem]">
      <h1 className="font-bold text-[2rem] text-[#780000] text-center mb-[2rem]">
        School Gallary
      </h1>

      <div className="my-[4rem] px-[1rem] flex flex-wrap justify-center gap-[0.6rem]">
        <Suspense fallback={"loading..."}>
          {Object.keys(data.result).map((items, i) => (
            <>
              {data.result[items].pin === true ? (
                <div className="relative w-[26rem] h-[20rem]" key={i}>
                  <Image
                    src={data.result[items].image_Url}
                    alt="photo"
                    sizes="(max-width: 768px) 100vw, 700px"
                    fill
                    priority
                    className="border object-cover object-center relative"
                    key={i}
                  />
                  <Gellarymid singlImage={data.result[items]} keys={i} />
                </div>
              ) : (
                ""
              )}
            </>
          ))}
        </Suspense>
      </div>

      <div className="text-center mt-[4rem]">
        <Suspense fallback={"Loading...."}>
          <Link
            href="/Gallery"
            className="bg-[#FDE773] px-[1.2rem] py-[0.5rem] font-bold text-[1.2rem]"
          >
            View More
          </Link>
        </Suspense>
      </div>
    </div>
  );
}

export default GallerySection;
