import React, { Suspense } from "react";

import axios, { AxiosError } from "axios";
import Form from "./form";
import DeleteImage from "./deleteImage";
import Image from "next/image";

async function getData() {
  try {
    const { data } = await axios.get("http://localhost:3000/api/images");

    return data;
  } catch (error) {
    console.log("error");
  }
}

export default async function Photo() {
  const data = await getData();

  return (
    <div className="py-[5rem] px-[1rem] flex flex-wrap justify-right gap-[0.6rem]">
      <Suspense fallback={"Loading Images..."}>
        {Object.keys(data.result).map((items, i) => (
          <div className="relative w-full max-w-[20rem] h-[20rem]" key={i}>
            <Image
              src={data.result[items].image_Url}
              alt="photo"
              sizes="(max-width: 768px) 100vw, 700px"
              fill
              priority
              className="border object-cover object-center relative"
              key={i}
            />
            <DeleteImage singlImage={data.result[items]} />
          </div>
        ))}
      </Suspense>
    </div>
  );
}
