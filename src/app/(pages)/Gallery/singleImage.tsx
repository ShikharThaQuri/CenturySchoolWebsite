"use client";

import Image from "next/image";
import React, { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";

function SingleImage(props: any) {
  const [active, setActice] = useState<Boolean>(false);
  const [image, setImage] = useState<string>(
    "https://res.cloudinary.com/dxr1ajuew/image/upload/v1719225691/centurySchoolGellay/rcrheibuweaylzqhqhxg.jpg"
  );
  const [imageDis, setImageDis] = useState<string>("");
  const [date, setDate] = useState<string>("");

  return (
    <>
      <div
        className="absolute top-0 right-0 left-0 bottom-0 bg-[black] opacity-0 transition hover:opacity-80 hover:cursor-pointer"
        onClick={() => {
          setImage(props.singlImage.image_Url);
          setImageDis(props.singlImage.imageDis);
          setDate(props.singlImage.createdAt);
          setActice(true);
        }}
      ></div>

      <div
        key={props.keys}
        className={`fixed top-0 bottom-0 left-0 right-0 bg-[#001219] opacity-100 z-50 flex flex-col justify-center items-center ${
          active === false ? "hidden" : ""
        } `}
      >
        <CloseIcon
          onClick={() => {
            setActice(false);
          }}
          className="absolute right-[2rem] top-[2rem] text-white cursor-pointer "
        />

        <div
          key={props.keys}
          className="relative w-[80%] h-[30rem] rounded-[1rem] object-cover object-center my-[0.5rem] z-[100]"
        >
          <Image
            src={image}
            alt="photo"
            sizes="(max-width: 768px) 100vw, 700px"
            fill
            priority
            className="border object-cover object-center"
            key={props.keys}
          />
        </div>
        <div className="mb-[1rem] mt-[2rem]">
          <h1 className="text-white text-[1.3rem] font-bold">{imageDis}</h1>
        </div>
        <div className=" w-full flex justify-end">
          <h1 className="w-[5.4rem] mr-[2rem] text-nowrap overflow-hidden font-bold text-[#ffba08]">
            {date}
          </h1>
        </div>
      </div>
    </>
  );
}

export default SingleImage;
