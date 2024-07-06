import React, { Suspense } from "react";

import Loading from "@/app/loading";
import BackButton from "./backButton";
import SingleImage from "./singleImage";

export default async function SingleImagePage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div
      className={`fixed top-0 bottom-0 left-0 right-0 bg-[#001219] opacity-100 z-50 flex flex-col justify-center items-center  `}
    >
      <BackButton />

      <Suspense fallback={<Loading />}>
        <SingleImage imageId={params.slug} />
      </Suspense>
    </div>
  );
}
