import React from "react";

import axios, { AxiosError } from "axios";
import DeletePost from "./deletePost";
import Link from "next/link";
import Form from "./form";

import EditIcon from "@mui/icons-material/Edit";

async function getData() {
  try {
    const { data } = await axios.get("http://localhost:3000/api/blog");

    return { data: data, err: null };
  } catch (error) {
    const e = error as AxiosError<any>;
    return { data: null, err: e };
  }
}

export default async function Blog() {
  const { data, err } = await getData();

  if (err) {
    return (
      <div className="py-[4rem] px-[5rem]">
        <h1 className="text-center font-bold text-[1.5rem] mb-[3rem]">
          Blog Form
        </h1>

        <Form />

        <div className="mt-[5rem]">
          <h1>Connection Error</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-[5rem]">
      {Object.keys(data.result).map((items, i) => (
        <div
          className="flex justify-between items-center mb-[1.5rem] px-[1rem] py-[1rem] max700:p-[0.5rem] bg-white"
          key={i}
        >
          <h1 className="text-[1.3rem] max700:text-[0.8rem] font-bold" key={i}>
            {data.result[items].writerName}
          </h1>
          <div className="flex items-center">
            <h1 className="w-[5rem] text-nowrap overflow-hidden max700:hidden">
              {data.result[items].createdAt}
            </h1>
            <Link
              className="mx-[1.5rem]"
              href={`/dashboard/Add-Blog/${data.result[items]._id}`}
            >
              <EditIcon className="text-[#de2426] text-[1.6rem]" />
            </Link>
            <DeletePost singlNotice={data.result[items]} />
          </div>
        </div>
      ))}
    </div>
  );
}
