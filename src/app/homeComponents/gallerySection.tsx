import React from "react";

import Link from "next/link";
import Gellarymid from "./gellarymid";

function GallerySection() {
  return (
    <div className="px-[5.5rem] bg-[#0096C7] py-[4rem]">
      <h1 className="font-bold text-[2rem] text-[#ffff] text-center mb-[2rem]">
        School Gallary
      </h1>

      <Gellarymid />

      <div className="text-center mt-[4rem]">
        <Link
          href="/Gallery"
          className="bg-[#FDE773] px-[1.2rem] py-[0.5rem] font-bold text-[1.2rem]"
        >
          View More
        </Link>
      </div>
    </div>
  );
}

export default GallerySection;
