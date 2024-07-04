import axios, { AxiosError } from "axios";
import React from "react";

async function getData() {
  try {
    const { data } = await axios.get("http://localhost:3000/api/notice");

    return { data: data, err: null };
  } catch (error) {
    const e = error as AxiosError<any>;
    return { data: null, err: e.response?.data.msg };
  }
}
export default async function Notice() {
  const { data, err } = await getData();

  if (err) {
    return (
      <div className="h-[50vh] flex justify-center items-center">
        <h1 className="font-bold text-[2rem] text-[#780000] ">{err}</h1>
      </div>
    );
  }

  return (
    <>
      <div>
        {Object.keys(data.result).map((items, i) => (
          <div key={i}>
            {data.result[items].type === "Pin" ? (
              <div
                className="bg-[#fb6f92] py-[1.5rem] px-[1.5rem]  my-[1.5rem]"
                key={i}
              >
                <h1 key={i} className="text-[1.25rem] font-bold mb-[0.5rem]">
                  {data.result[items].noticeTitle}
                </h1>
                <p className="ml-[1rem]">{data.result[items].disc}</p>
                <div className="flex justify-end mt-[0.4rem]">
                  <p
                    key={i}
                    className="w-[5.4rem] text-nowrap overflow-hidden font-bold"
                  >
                    {data.result[items].createdAt}
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>

      {/* -------------------------- Second Notice ----------------------------- */}
      <div className="mt-[3.5rem]">
        {Object.keys(data.result).map((items, i) => (
          <div key={i}>
            {data.result[items].type === "Normal" ? (
              <div
                className="bg-[#9f86c0] py-[1.5rem] px-[1.5rem]  my-[1.5rem]"
                key={i}
              >
                <h1 key={i} className="text-[1.25rem] font-bold mb-[0.5rem]">
                  {data.result[items].noticeTitle}
                </h1>
                <p className="ml-[1rem]">{data.result[items].disc}</p>
                <div className="flex justify-end mt-[0.4rem]">
                  <p
                    key={i}
                    className="w-[5.4rem] text-nowrap overflow-hidden font-bold"
                  >
                    {data.result[items].createdAt}
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </>
  );
}
