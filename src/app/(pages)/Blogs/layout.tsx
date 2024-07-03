import React from "react";
import SideBar from "./sideBar";

function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="bg-[#D5BDAF] pl-[25rem] relative">
        <SideBar />
        {children}
      </div>
    </>
  );
}

export default BlogLayout;
