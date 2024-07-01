"use client";

import Image from "next/image";

import Photo1 from "@/img/event_photo_1.jpg";
import Photo2 from "@/img/photo2.jpeg";
import Profile6 from "@/img/profile-6.jpg";
import React from "react";

const imgDes =
  "w-[26rem] h-[16rem] rounded-[0.5rem] object-cover object-center";

function Gellarymid() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-[0.6rem]">
      <div>
        <Image src={Photo1} alt="image" className={imgDes} />
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
      <div>
        <Image src={Photo2} alt="image" className={imgDes} />
      </div>
      <div>
        <Image src={Profile6} alt="image" className={imgDes} />
      </div>
    </div>
  );
}

export default Gellarymid;
