"use client";

import Link from "next/link";
import React from "react";
import { usePathname, useSearchParams } from "next/navigation";

const navLinks =
  "m-[1.5rem] text-[20px] font-bold after:content-{} after:w-[0%] after:h-[0.2rem] after:bg-[#f44336] after:block after:m-[auto] after:duration-[200ms] hover:after:w-[100%]";
const navLinksSolid =
  "m-[1.5rem] text-[20px] font-bold after:content-{} after:w-[100%] after:h-[0.2rem] after:bg-[#f44336] after:block after:m-[auto] after:duration-[200ms] ";

function NavBar() {
  const pathname = usePathname();

  return (
    <>
      <div className="bg-[#faedcd] z-50">
        <div className="text-center pt-[1rem]">
          <h1 className="text-[36px] font-bold text-[#0096C7]">
            CENTURY EDUCATION ACADEMY SCHOOL
          </h1>
          <h3 className="text-[20px] font-bold text-[#07617E]">
            Kohalpur 3, Banke
          </h3>
        </div>

        <div className="flex justify-between mx-[5rem] items-center relative">
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
              {/* <li
                className={`${
                  pathname === "/Programs" ? `${navLinksSolid}` : `${navLinks}`
                }`}
              >
                <Link href="/Programs">Programs</Link>
              </li> */}
              <li
                className={`${
                  pathname === "/Blogs" ? `${navLinksSolid}` : `${navLinks}`
                }`}
              >
                <Link href="/Blogs">Blog</Link>
              </li>
            </ul>
          </div>

          <div className="absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]">
            Logo
          </div>

          <div>
            <ul className="flex items-center">
              <li
                className={`${
                  pathname === "/Gallery" ? `${navLinksSolid}` : `${navLinks}`
                }`}
              >
                <Link href="/Gallery">Gallery</Link>
              </li>
              <li
                className={`${
                  pathname === "/Notice" ? `${navLinksSolid}` : `${navLinks}`
                }`}
              >
                <Link href="/Notice">Notice</Link>
              </li>
              {/* <li
                className={`${
                  pathname === "/Materials" ? `${navLinksSolid}` : `${navLinks}`
                }`}
              >
                <Link href="/Materials">Materials</Link>
              </li> */}
              <li
                className={`${
                  pathname === "/Contact" ? `${navLinksSolid}` : `${navLinks}`
                }`}
              >
                <Link href="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
