import React, { Suspense } from "react";

import Link from "next/link";
import Gellarymid from "./gellarymid";
import Image from "next/image";
import axios from "axios";

async function getData() {
  try {
    const { data } = await axios.get("http://localhost:3000/api/images");

    return data;
  } catch (error) {
    console.log("error");
  }
}

async function GallerySection() {
  const data = await getData();

  return (
    <div className="px-[5.5rem] bg-[#0096C7] py-[4rem]">
      <h1 className="font-bold text-[2rem] text-[#ffff] text-center mb-[2rem]">
        School Gallary
      </h1>

      <div className="my-[4rem]  px-[1rem] flex flex-wrap justify-center gap-[0.6rem]">
        <Suspense fallback={"loading..."}>
          {Object.keys(data.result).map((items, i) => (
            <div key={i}>
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
            </div>
          ))}
        </Suspense>
      </div>

      <div className="text-center mt-[4rem]">
        <Link
          href="/Gallery"
          className="bg-[#FDE773] px-[1.2rem] py-[0.5rem] font-bold text-[1.2rem]"
        >
          View More
        </Link>
      </div>
    </div>
  );
}

export default GallerySection;
