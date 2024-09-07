import React, { Suspense } from "react";

import Link from "next/link";
import Gallery from "./gallery";
import Loading from "@/app/loading";

async function GallerySection() {
  return (
    <div className="px-[5.5rem] tabletGallery:px-[2rem] bg-[#0096C7] py-[4rem]">
      <h1 className="font-bold text-[2rem] text-[white] text-center mb-[2rem]">
        School Gallary
      </h1>

      <Suspense fallback={<Loading />}>
        <Gallery />
      </Suspense>

      <div className="text-center mt-[2.5rem]">
        <Link
          href="/Gallery/AllGallery"
          className="bg-[#FDE773] px-[1.2rem] py-[0.5rem] font-bold text-[1.2rem]"
        >
          View More
        </Link>
      </div>
    </div>
  );
}

export default GallerySection;
