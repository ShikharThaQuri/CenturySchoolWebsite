import React, { Suspense } from "react";

import axios, { AxiosError } from "axios";
import Form from "./form";
import DeleteImage from "./deleteImage";
import Image from "next/image";

async function getData() {
  try {
    const { data } = await axios.get("http://localhost:3000/api/images");

    return { data: data, err: null };
  } catch (error) {
    const e = error as AxiosError<any>;
    return { data: null, err: e };
  }
}

export default async function Photo() {
  const { data, err } = await getData();

  if (err) {
    return (
      <div className="py-[4rem] px-[5rem]">
        <h1 className="text-center font-bold text-[1.5rem] mb-[3rem]">
          Add Photo
        </h1>

        <Form />

        <div className="mt-[5rem]">
          <h1>Connection Error</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="py-[5rem] flex flex-wrap justify-center gap-[0.6rem]">
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
    </div>
  );
}
