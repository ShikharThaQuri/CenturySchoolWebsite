import axios, { AxiosError } from "axios";
import React, { Suspense } from "react";
import Notice from "./notice";
import Loading from "@/app/loading";
import NoticeLoading from "./noticeLoading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notice",
};

async function NoticePage() {
  return (
    <div className="bg-[#D9D9D9] px-[11.5rem] tablet:px-[2rem] py-[4rem]">
      <h1 className="text-[1.8rem] text-[#FF0000] font-bold">Notice</h1>
      <Suspense fallback={<NoticeLoading />}>
        <Notice />
      </Suspense>
    </div>
  );
}

export default NoticePage;
