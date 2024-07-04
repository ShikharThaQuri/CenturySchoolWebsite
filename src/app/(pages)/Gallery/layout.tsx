import React, { Suspense } from "react";
import Loading from "@/app/loading";
import ImageLinkPage from "./imagelinks";

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
