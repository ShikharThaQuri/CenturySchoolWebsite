"use client";

import React from "react";
import Image from "next/image";

import Photo1 from "@/img/event_photo_1.jpg";
import Photo2 from "@/img/photo2.jpeg";
import Profile6 from "@/img/profile-6.jpg";
import Link from "next/link";

const imgDes =
  "w-[15rem] h-[15rem] rounded-[1rem] object-cover object-center my-[0.5rem]";

function GallerySection() {
  return (
    <div className="px-[11.5rem] bg-[#0096C7] py-[4rem]">
      <div className="text-center">
        <h1 className="font-bold text-[2rem] text-[#ffff]">School Gallary</h1>

        <div className="my-[1rem] flex flex-wrap justify-evenly items-center">
          <div>
            <Image src={Photo1} alt="image" className={imgDes} />
          </div>
          <div>
            <Image src={Photo2} alt="image" className={imgDes} />
          </div>
          <div>
            <Image src={Profile6} alt="image" className={imgDes} />
          </div>
          <div>
            <Image src={Photo1} alt="image" className={imgDes} />
          </div>
          <div>
            <Image src={Photo2} alt="image" className={imgDes} />
          </div>
          <div>
            <Image src={Profile6} alt="image" className={imgDes} />
          </div>
          <div>
            <Image src={Photo2} alt="image" className={imgDes} />
          </div>
          <div>
            <Image src={Profile6} alt="image" className={imgDes} />
          </div>
        </div>

        <div className="text-center mt-[4rem]">
          <Link
            href="/Gallery"
            className="bg-[#FDE773] px-[1.2rem] py-[0.5rem] font-bold text-[1.2rem]"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GallerySection;
