"use client";

import React from "react";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";

const arrowCSS = "mr-[0.5rem]";

export default function SideBar() {
  const { slug } = useParams();

  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  return (
    <div className="py-[1rem] px-[1rem] mt-[1rem] tablet:mt-[0] w-full bg-[#f4a261] max-w-[20rem] tablet:max-w-full absolute tablet:static top-[1rem] left-[3rem] bg-[#D9D9D9]">
      <h1 className="text-[1.5rem] tablet:text-[1.8rem] font-bold text-[red] ">
        Categories
      </h1>
      <hr className="border-black mt-[0.5rem] tablet:mt-[1rem] border-[0.15rem]" />
      <div className="my-[1rem] text-[1.2rem] text-[#432818] font-bold leading-[3rem] ml-[0.5rem] text-[black] tablet:flex tablet:gap-x-[2rem] tablet:flex-wrap">
        <div className=" my-[0.5rem] flex items-center">
          <ArrowForwardIcon
            className={` ${arrowCSS} ${
              slug === "AllBlogs" ? "text-[2rem]" : ""
            } `}
          />
          <Link href="/Blogs/AllBlogs" className="">
            <h1
              className={`${
                slug === "AllBlogs"
                  ? "text-[1.5rem] text-[#d90429]"
                  : "hover:text-[#d90429]"
              } `}
            >
              All
            </h1>
          </Link>
        </div>

        <div className="my-[0.5rem] flex items-center">
          <ArrowForwardIcon
            className={` ${arrowCSS} ${type === "story" ? "text-[2rem]" : ""} `}
          />
          <Link href="/Blogs/SingleBlogs?type=story" className="">
            <h1
              className={`${
                type === "story"
                  ? "text-[1.5rem] text-[#d90429]"
                  : "hover:text-[#d90429]"
              } `}
            >
              Stories
            </h1>
          </Link>
        </div>

        <div className="flex my-[0.5rem] items-center">
          <ArrowForwardIcon
            className={`${arrowCSS} ${type === "poem" ? "text-[2rem]" : ""}`}
          />
          <Link href="/Blogs/SingleBlogs?type=poem" className="">
            <h1
              className={`${
                type === "poem"
                  ? "text-[1.5rem] text-[#d90429]"
                  : "hover:text-[#d90429]"
              } `}
            >
              Poems
            </h1>
          </Link>
        </div>

        <div className="flex my-[0.5rem] items-center">
          <ArrowForwardIcon
            className={`${arrowCSS} ${
              type === "educational" ? "text-[2rem]" : ""
            }`}
          />
          <Link href="/Blogs/SingleBlogs?type=educational">
            <h1
              className={`${
                type === "educational"
                  ? "text-[1.5rem] text-[#d90429]"
                  : "hover:text-[#d90429]"
              } `}
            >
              Educational
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}
