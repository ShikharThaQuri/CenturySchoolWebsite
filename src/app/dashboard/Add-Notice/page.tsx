import React, { Suspense } from "react";
import Form from "./form";
import Notice from "./notice";
import Loading from "@/app/loading";

function NoticePage() {
  return (
    <div className="py-[4rem] px-[5rem] max700:px-[1.5rem]">
      <h1 className="text-center font-bold text-[1.5rem] mb-[3rem]">
        Notice Form
      </h1>

      <Suspense fallback={<Loading />}>
        <Form />
        <Notice />
      </Suspense>
    </div>
  );
}

export default NoticePage;
