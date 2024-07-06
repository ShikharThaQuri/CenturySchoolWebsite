import React, { Suspense } from "react";
import ImageLinkPage from "./imagelinks";
import GalleryLoading from "./galleryLoading";
import Loading from "@/app/loading";

function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="bg-[#D5BDAF]">
        <ImageLinkPage />
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </div>
    </>
  );
}

export default BlogLayout;
