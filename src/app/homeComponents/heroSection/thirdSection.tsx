import Image from "next/image";
import React from "react";
import CoverImage from "@/img/cover-photo.jpg";

function ThirdSection() {
  return (
    <div className="w-full h-[95vh]  tablet:h-[70vh] max700:h-[50vh] max400:h-[45vh] relative">
      <Image
        alt="cover Photo"
        src={CoverImage}
        fill
        placeholder="blur"
        quality={100}
        className="object-cover"
      />
    </div>
  );
}

export default ThirdSection;
