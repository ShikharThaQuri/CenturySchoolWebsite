import Image from "next/image";
import React from "react";

import axios from "axios";
import SingleImage from "./singleImage";

async function getData() {
  try {
    const { data } = await axios.get("http://localhost:3000/api/images");

    return data;
  } catch (error) {
    console.log("error");
  }
}

async function GalleryPage() {
  const data = await getData();

  return (
    <div className="pb-[3rem]">
      <div className="px-[6rem] text-white">
        <button className="bg-[#3a0ca3] px-[1rem] py-[0.5rem] rounded-[2rem]">
          Special Events
        </button>
        <button className="bg-[#7209b7] px-[1rem] py-[0.5rem] rounded-[2rem]">
          Friday Games
        </button>
        <button className="bg-[#7209b7] px-[1rem] py-[0.5rem] rounded-[2rem]">
          School Ground
        </button>
      </div>

      <h1 className="pt-[3rem] text-center font-bold text-[1.5rem]">
        Special Events
      </h1>

      <div className="py-[5rem] px-[1rem] flex flex-wrap justify-center gap-[0.6rem]">
        {Object.keys(data.result).map((items, i) => (
          <div className="relative w-full max-w-[20rem] h-[20rem]" key={i}>
            <Image
              src={data.result[items].image_Url}
              alt="photo"
              sizes="(max-width: 768px) 100vw, 700px"
              fill
              priority
              className="border object-cover object-center relative "
              key={i}
            />

            <SingleImage singlImage={data.result[items]} keys={i} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryPage;
