import React from "react";

import Image from "next/image";
import BackButton from "./backButton";
import axios, { AxiosError } from "axios";

const getData = async (props: string) => {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/images/${props}`
    );

    return { data: data, err: null };
  } catch (error) {
    const e = error as AxiosError<any>;
    return { data: null, err: e.response?.data.msg };
  }
};

export default async function SingleImage({ imageId }: { imageId: string }) {
  const { data, err } = await getData(imageId);

  if (err) {
    return (
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-[#001219] opacity-100 z-50 flex flex-col justify-center items-center">
        <BackButton />

        <div className="relative w-[80%] h-[30rem] rounded-[1rem] object-cover object-center my-[0.5rem] z-[100]">
          <h1 className="font-bold text-[2rem] text-[#780000]">{err}</h1>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="relative w-[80%] h-[30rem] max700:h-[20rem] max400:h-[15rem] rounded-[1rem] object-cover object-center my-[0.5rem] z-[100]">
        <Image
          src={data.result[0].image_Url}
          alt="photo"
          sizes="(max-width: 768px) 100vw, 700px"
          fill
          priority
          className="border object-cover object-center"
        />
      </div>
      <div className="mb-[1rem] mt-[2rem]">
        <h1 className="text-white text-[1.3rem] font-bold">
          {data.result[0].imageDis}
        </h1>
      </div>
      <div className="w-full flex justify-end">
        <h1 className="w-[5.4rem] mr-[2rem] text-nowrap overflow-hidden font-bold text-[#ffba08]">
          {data.result[0].createdAt}
        </h1>
      </div>
    </>
  );
}
