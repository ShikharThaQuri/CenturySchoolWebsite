"use client";

import Image from "next/image";
import React from "react";

import profile6 from "@/img/profile-6.jpg";
import profile7 from "@/img/profile-7.jpg";
import profile9 from "@/img/profile-9.jpg";
import Link from "next/link";

function TeacherSection() {
  return (
    <div className="h-[90vh] px-[11.5rem] bg-[#F1FAEE] pt-[3rem] flex flex-col justify-center">
      <div className="h-[60%] mb-[2rem]  flex justify-evenly items-center">
        <div className="h-[100%] w-[18rem] px-[0.5rem] border relative bg-white flex flex-col justify-between items-center rounded-[0.5rem]">
          <Image
            alt="image1"
            src={profile6}
            className="absolute -top-[15%] left-[22%]  w-[10rem] h-[10rem] rounded-[10rem] object-cover"
          />

          <p className="">.</p>

          <p className="text-center mt-[5rem]">
            “if you're looking for a place where you can be assured that they
            get the best of what you paid for, then Century is the best place.”
          </p>

          <div className="text-center mb-[1rem]">
            <h1 className="mb-[0.2rem] text-[#de2426] font-bold text-[1.2rem]">
              Mr. Aayush Kumar Thakur
            </h1>
            <p className="text-[#6c757d] font-bold">Principle</p>
          </div>
        </div>

        <div className="h-[100%] w-[18rem] px-[0.5rem] border relative bg-white flex flex-col justify-between items-center  rounded-[0.5rem]">
          <Image
            alt="image1"
            src={profile7}
            className="absolute -top-[15%] left-[22%]  w-[10rem] h-[10rem] rounded-[10rem] "
          />

          <p className="">.</p>

          <p className="text-center mt-[5rem]">
            “if you're looking for a place where you can be assured that they
            get the best of what you paid for, then Century is the best place.”
          </p>

          <div className="text-center mb-[1rem]">
            <h1 className="mb-[0.2rem] text-[#de2426] font-bold text-[1.2rem]">
              Mr. Aayush Kumar Thakur
            </h1>
            <p className="text-[#6c757d] font-bold">Principle</p>
          </div>
        </div>

        <div className="h-[100%] w-[18rem] px-[0.5rem] border relative bg-white flex flex-col justify-between items-center  rounded-[0.5rem]">
          <Image
            alt="image1"
            src={profile9}
            className="absolute -top-[15%] left-[22%]  w-[10rem] h-[10rem] rounded-[10rem] "
          />

          <p className="">.</p>

          <p className="text-center mt-[5rem]">
            “if you're looking for a place where you can be assured that they
            get the best of what you paid for, then Century is the best place.”
          </p>

          <div className="text-center mb-[1rem]">
            <h1 className="mb-[0.2rem] text-[#de2426] font-bold text-[1.2rem]">
              Mr. Aayush Kumar Thakur
            </h1>
            <p className="text-[#6c757d] font-bold">Principle</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link
          href="/About-Us"
          className="bg-[#FDE773] px-[1.2rem] py-[0.5rem] font-bold text-[1.2rem]"
        >
          View More
        </Link>
      </div>
    </div>
  );
}

export default TeacherSection;