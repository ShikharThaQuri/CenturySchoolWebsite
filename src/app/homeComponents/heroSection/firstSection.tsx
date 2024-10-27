import Image from "next/image";
import React from "react";

import CoverImage from "@/img/School-cover-photo.jpg";

function FirstSection() {
  return (
    <div className="w-full h-[90vh] tablet:h-[70vh] max700:h-[50vh] max400:h-[45vh] relative">
      <Image
        alt="cover Photo"
        src={CoverImage}
        fill
        placeholder="blur"
        quality={100}
        className="object-cover object-top"
      />
    </div>
  );
}

export default FirstSection;
