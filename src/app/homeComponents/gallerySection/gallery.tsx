import React from "react";
import axios, { AxiosError } from "axios";

import Link from "next/link";
import Image from "next/image";

async function getData() {
  try {
    const { data } = await axios.get(
      "http://localhost:3000/api/images?pin=true"
    );

    return { data: data, err: null };
  } catch (error) {
    const e = error as AxiosError<any>;
    // console.log("hello", e.response);
    return { data: null, err: e.response?.data.msg };
  }
}

export default async function Gallery() {
  const { data, err } = await getData();

  if (err) {
    return (
      <div className=" bg-[#0096C7] h-[50vh] flex justify-center items-center">
        <h1 className="font-bold text-[2rem] text-[#780000] ">{err}</h1>
      </div>
    );
  }

  return (
    <div className="mt-[3rem] px-[1rem] tabletGallery:px-[0.5rem] flex flex-wrap justify-center gap-[1rem]">
      {Object.keys(data.result).map((items, i) => (
        <Link key={i} href={`/${data.result[items]._id}`}>
          <div
            className="relative w-[25rem] tabletGallery:w-[10rem] tabletGallery:h-[8rem] h-[16rem]"
            key={i}
          >
            <Image
              src={data.result[items].image_Url}
              alt="photo"
              sizes="(max-width: 768px) 100vw, 700px"
              fill
              priority
              className="border object-cover object-center relative"
              key={i}
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
