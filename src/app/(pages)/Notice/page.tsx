import axios, { AxiosError } from "axios";
import React, { Suspense } from "react";
import Notice from "./notice";
import Loading from "@/app/loading";
import NoticeLoading from "./noticeLoading";

async function getData() {
  try {
    const { data } = await axios.get("http://localhost:3000/api/notice");

    return { data: data, err: null };
  } catch (error) {
    const e = error as AxiosError<any>;
    return { data: null, err: e.response?.data.msg };
  }
}

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
