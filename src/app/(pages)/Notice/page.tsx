import axios from "axios";
import React from "react";

async function getData() {
  try {
    const { data } = await axios.get("http://localhost:3000/api/notice");

    return data;
  } catch (error) {
    console.log("error");
  }
}

async function NoticePage() {
  const data = await getData();

  return (
    <div className="bg-[#D9D9D9] px-[11.5rem] py-[4rem]">
      <div>
        <h1 className="text-[1.8rem] text-[#FF0000] font-bold">Notice</h1>

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
    </div>
  );
}

export default NoticePage;
