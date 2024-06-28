import React from "react";

import axios, { AxiosError } from "axios";
import Form from "./form";
import DeleteImage from "./deleteImage";

async function getData() {
  try {
    const { data } = await axios.get("http://localhost:3000/api/photos");

    return data;
  } catch (error) {
    console.log("error");
  }
}

async function PhotoPage() {
  const data = await getData();

  return (
    <>
      <Form />

      <div className="py-[5rem]">
        {Object.keys(data.result).map((items, i) => (
          <div
            className="flex justify-between items-center mb-[1.5rem] px-[1rem] py-[1rem] bg-white mx-[2rem]"
            key={i}
          >
            <h1 className="text-[1.3rem] font-bold" key={i}>
              {data.result[items].photoDis}
            </h1>
            <div>
              <DeleteImage singlImage={data.result[items]} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default PhotoPage;
