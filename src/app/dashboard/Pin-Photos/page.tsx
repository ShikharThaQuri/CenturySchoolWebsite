import React, { Suspense } from "react";
import Pin from "./pin";
import Loading from "@/app/loading";

export default async function PinPhotosPage() {
  return (
    <>
      <h1 className="text-center text-[1.5rem] text-[#c1121f] font-bold pt-[1rem]">
        Pin Images
      </h1>
      <Suspense fallback={<Loading />}>
        <Pin />
      </Suspense>

      <h1 className="text-right pb-[1rem] mr-[1rem] text-[#e63946]">
        Only 6 Images are required.
      </h1>
    </>
  );
}
