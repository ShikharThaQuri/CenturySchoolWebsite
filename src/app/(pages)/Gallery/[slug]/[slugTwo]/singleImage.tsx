import React from "react";

import Image from "next/image";

type Data = {
  _id: string;
  imageDis: string;
  image_Url: string;
  public_id: string;
  pin: boolean;
  category: string;
  createdAt: string;
  updatedAt: string;
};

export default async function SingleImage({ data }: { data: Data }) {
  return (
    <>
      <div className="relative  w-[80%] h-[75%] max700:h-[20rem] max400:h-[15rem] rounded-[1rem] object-cover object-center my-[0.5rem] z-[100]">
        <Image
          src={data.image_Url}
          alt="photo"
          sizes="(max-width: 768px) 100vw, 700px"
          fill
          priority
          className="border object-cover object-center"
        />
      </div>
      <div className="mb-[1rem] mt-[2rem]">
        <h1 className="text-white text-[1.3rem] font-bold">{data.imageDis}</h1>
      </div>
      <div className="w-full flex justify-end">
        <h1 className="w-[5.4rem] mr-[2rem] text-nowrap overflow-hidden font-bold text-[#ffba08]">
          {data.createdAt}
        </h1>
      </div>
    </>
  );
}
