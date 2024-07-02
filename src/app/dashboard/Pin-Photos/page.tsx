import axios from "axios";
import Image from "next/image";
import React from "react";
import DeleteImage from "./deleteImage";

async function getData() {
  try {
    const { data } = await axios.get("http://localhost:3000/api/images");

    return data;
  } catch (error) {
    console.log("error");
  }
}

export default async function PinPhotosPage() {
  const data = await getData();

  return (
    <>
      <h1 className="text-center text-[1.5rem] text-[#c1121f] font-bold pt-[1rem]">
        Pin Images
      </h1>

      <div className="mt-[3rem] pb-[5rem] px-[1rem] flex flex-wrap justify-right gap-[0.6rem]">
        {Object.keys(data.result).map((items, i) => (
          <div key={i}>
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
          </div>
        ))}
      </div>
      <h1 className="text-right pb-[1rem] mr-[1rem] text-[#e63946]">
        Only 6 Images are required.
      </h1>
    </>
  );
}
