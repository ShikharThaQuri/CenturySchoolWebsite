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
    <div className="my-[4rem] px-[1rem] flex flex-wrap justify-center gap-[0.6rem]">
      {Object.keys(data.result).map((items, i) => (
        <Link key={i} href={`/${data.result[items]._id}`}>
          <div className="relative w-[26rem] h-[18rem]" key={i}>
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
