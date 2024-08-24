import Image from "next/image";
import React from "react";

import CoverImage from "@/img/cover-photo.jpg";

function FirstSection() {
  return (
    <div className="w-full h-[95vh] relative">
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

export default FirstSection;
