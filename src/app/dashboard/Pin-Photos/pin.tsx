import axios, { AxiosError } from "axios";
import Image from "next/image";
import React, { Suspense } from "react";
import DeleteImage from "./deleteImage";

async function getData() {
  try {
    const { data } = await axios.get("http://localhost:3000/api/images");

    return { data: data, err: null };
  } catch (error) {
    const e = error as AxiosError<any>;
    return { data: null, err: e };
  }
}

export default async function Pin() {
  const { data, err } = await getData();

  if (err) {
    return (
      <div className="py-[4rem] px-[5rem]">
        <h1 className="text-center text-[1.5rem] text-[#c1121f] font-bold pt-[1rem]">
          Pin Images
        </h1>

        <div className="mt-[5rem]">
          <h1>Connection Error</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-[3rem] pb-[5rem] px-[1rem] flex flex-wrap justify-right gap-[0.6rem]">
      <Suspense fallback={"Loading Pin Images..."}>
        {Object.keys(data.result).map((items, i) => (
          <>
            {data.result[items].pin === true ? (
              <div className="relative w-[20rem] h-[20rem]" key={i}>
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
            ) : (
              ""
            )}
          </>
        ))}
      </Suspense>
    </div>
  );
}
