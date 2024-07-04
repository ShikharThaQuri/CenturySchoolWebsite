import React, { Suspense } from "react";
import Form from "./form";
import Notice from "./notice";
import Loading from "@/app/loading";

async function NoticePage() {
  return (
    <div className="py-[4rem] px-[5rem]">
      <h1 className="text-center font-bold text-[1.5rem] mb-[3rem]">
        Notice Form
      </h1>

      <Form />
      <Suspense fallback={<Loading />}>
        <Notice />
      </Suspense>
    </div>
  );
}

export default NoticePage;
