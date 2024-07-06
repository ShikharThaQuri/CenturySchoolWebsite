import React from "react";

const leftRightBox =
  "mx-[1rem] border border-[0.15rem] px-[0.9rem] py-[0.5rem] font-bold  cursor-pointer";

export default function BlogLoading() {
  return (
    <div className="py-[2rem] h-[50vh]">
      <div className="bg-[#FFEA9F] mx-[2rem] px-[1.5rem] pb-[1rem] mb-[2rem]">
        <div className="flex justify-between mb-[1rem]">
          <h1 className="bg-[#F92929] px-[1rem] py-[0.7rem] text-white rounded-b-lg ">
            <p className="w-[5.1rem] text-nowrap overflow-hidden">........</p>
          </h1>
          <h1 className="bg-[#FFC6C6] px-[1rem] py-[0.7rem] text-black rounded-b-lg">
            TYPE : .......
          </h1>
        </div>

        <p className="mb-[1rem] mt-[0.3rem] text-justify">Loading.....</p>

        <h1 className="text-right text-[#FF2F2F] font-bold text-[1.2rem]">
          - BY ....
        </h1>
      </div>

      {/* ----- Pagination ----- */}
      <div className="flex justify-center mt-[1.5rem]">
        <p className={`${leftRightBox} border-[#d6ccc2] text-[#d6ccc2]`}>
          Left
        </p>

        <p className={`${leftRightBox} border-[#d6ccc2] text-[#d6ccc2]`}>
          Right
        </p>
      </div>
    </div>
  );
}
