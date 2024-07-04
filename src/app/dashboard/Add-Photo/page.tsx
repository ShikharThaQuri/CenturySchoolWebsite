import React, { Suspense } from "react";

import Form from "./form";
import Photo from "./photo";
import Loading from "@/app/loading";

async function PhotoPage() {
  return (
    <>
      <Form />
      <Suspense fallback={<Loading />}>
        <Photo />
      </Suspense>
    </>
  );
}

export default PhotoPage;
