"use client";

import Link from "next/link";
import React from "react";
import { useParams, usePathname, useSearchParams } from "next/navigation";

const navLinks =
  "m-[1.5rem] text-[20px] tablet:text-[15px] font-bold after:content-{} after:w-[0%] after:h-[0.2rem] after:bg-[#f44336] after:block after:m-[auto] after:duration-[200ms] hover:after:w-[100%]";
const navLinksSolid =
  "m-[1.5rem] text-[20px] tablet:text-[15px] font-bold after:content-{} after:w-[100%] after:h-[0.2rem] after:bg-[#f44336] after:block after:m-[auto] after:duration-[200ms] ";

function NavBar() {
  const { slug } = useParams();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const category = searchParams.get("category");

  return (
    <>
      <div className="bg-[#faedcd] z-50">
        <div className="text-center pt-[1rem] tablet:pb-[1rem] px-[0.4rem]">
          <h1 className="text-[36px] tablet:text-[30px] max400:text-[18px] font-bold text-[#0096C7] ">
            CENTURY EDUCATION ACADEMY SCHOOL
          </h1>
          <h3 className="text-[20px] tablet:text-[15px] max400:text-[12px] font-bold text-[#07617E]">
            Kohalpur 3, Banke
          </h3>
        </div>

        <div className="flex justify-between tablet:justify-start mx-[5rem] tablet:ml-[1.5rem] items-center relative max700:hidden">
          <div>
            <ul className="flex items-center">
              <li
                className={`${
                  pathname === "/" ? `${navLinksSolid}` : `${navLinks}`
                }`}
              >
                <Link href="/">Home</Link>
              </li>
              <li
                className={`${
                  pathname === "/About-Us" ? `${navLinksSolid}` : `${navLinks}`
                }`}
              >
                <Link href="/About-Us">About Us</Link>
              </li>

              <li
                className={`${
                  type === "story" ||
                  type === "poem" ||
                  type === "educational" ||
                  slug === "AllBlogs"
                    ? `${navLinksSolid}`
                    : `${navLinks}`
                }`}
              >
                <Link href="/Blogs/AllBlogs">Blog</Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className="flex items-center">
              <li
                className={`${
                  slug === "AllGallery" ||
                  category === "Special Events" ||
                  category === "Friday Games" ||
                  category === "School Boundary" ||
                  category === "School Family"
                    ? `${navLinksSolid}`
                    : `${navLinks}`
                }`}
              >
                <Link href="/Gallery/AllGallery">Gallery</Link>
              </li>
              <li
                className={`${
                  pathname === "/Notice" ? `${navLinksSolid}` : `${navLinks}`
                }`}
              >
                <Link href="/Notice">Notice</Link>
              </li>

              <li
                className={`${
                  pathname === "/Contact" ? `${navLinksSolid}` : `${navLinks}`
                }`}
              >
                <Link href="/Contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
