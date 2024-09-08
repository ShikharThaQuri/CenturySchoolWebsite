import React, { Suspense } from "react";
import SideBar from "./sideBar";
import BlogLoading from "./blogLoading";

function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="bg-[#D5BDAF] pl-[25rem] tablet:pl-[0] relative ">
        <SideBar />
        <Suspense fallback={<BlogLoading />}>{children}</Suspense>
      </div>
    </>
  );
}

export default BlogLayout;
