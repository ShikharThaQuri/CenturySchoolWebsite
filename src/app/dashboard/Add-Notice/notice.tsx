import React from "react";
import Form from "./form";
import axios, { AxiosError } from "axios";

import EditIcon from "@mui/icons-material/Edit";
import DeletePost from "./deletePost";
import Link from "next/link";

async function getData() {
  try {
    const { data } = await axios.get("http://localhost:3000/api/notice");

    return { data: data, err: null };
  } catch (error) {
    const e = error as AxiosError<any>;
    return { data: null, err: e };
  }
}

export default async function Notice() {
  const { data, err } = await getData();

  if (err) {
    return (
      <div className="py-[4rem] px-[5rem]">
        <h1 className="text-center font-bold text-[1.5rem] mb-[3rem]">
          Notice Form
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
          className="flex justify-between items-center mb-[1.5rem] px-[1rem] py-[1rem] bg-white"
          key={i}
        >
          <h1 className="text-[1.3rem] font-bold" key={i}>
            {data.result[items].noticeTitle}
          </h1>
          <div>
            <Link href={`/dashboard/Add-Notice/${data.result[items]._id}`}>
              <EditIcon />
            </Link>

            <DeletePost singlNotice={data.result[items]} />
          </div>
        </div>
      ))}
    </div>
  );
}
