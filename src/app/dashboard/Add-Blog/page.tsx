import React, { Suspense } from "react";
import Form from "./form";
import Blog from "./blog";
import Loading from "@/app/loading";

async function BlogPage() {
  return (
    <div className="py-[4rem] px-[5rem] max700:px-[1.5rem]">
      <h1 className="text-center font-bold text-[1.5rem] mb-[3rem]">
        Blog Form
      </h1>

      <Suspense fallback={<Loading />}>
        <Form />
        <Blog />
      </Suspense>
    </div>
  );
}

export default BlogPage;
