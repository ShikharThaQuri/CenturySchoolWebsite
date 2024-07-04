import React, { Suspense } from "react";

import Form from "./form";
import Photo from "./photo";
import Loading from "@/app/loading";

async function PhotoPage() {
  return (
    <div className="py-[4rem] px-[5rem]">
      <h1 className="text-center font-bold text-[1.5rem] mb-[3rem]">
        Add Photo
      </h1>
      <Form />
      <Suspense fallback={<Loading />}>
        <Photo />
      </Suspense>
    </div>
  );
}

export default PhotoPage;
