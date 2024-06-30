import React from "react";
import Form from "./form";
import axios from "axios";
import DeletePost from "./deletePost";

async function getData() {
  try {
    const { data } = await axios.get("http://localhost:3000/api/blog");

    return data;
  } catch (error) {
    console.log("error");
  }
}

async function BlogPage() {
  const data = await getData();

  return (
    <div className="py-[4rem] px-[5rem]">
      <h1 className="text-center font-bold text-[1.5rem] mb-[3rem]">
        Blog Form
      </h1>

      <Form />

      <div className="mt-[5rem]">
        {Object.keys(data.result).map((items, i) => (
          <div
            className="flex justify-between items-center mb-[1.5rem] px-[1rem] py-[1rem] bg-white"
            key={i}
          >
            <h1 className="text-[1.3rem] font-bold" key={i}>
              {data.result[items].writerName}
            </h1>
            <div>
              <h1 className="ml-[1rem]">{data.result[items].date}</h1>
              <DeletePost singlNotice={data.result[items]} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
