"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const linkdign =
  "text-[1.2rem] px-[1.7rem] py-[0.65rem] rounded-[1rem] mx-[0.1rem]";

function ImageLinkPage(props: any) {
  const pathname = usePathname();

  return (
    <div className="px-[6rem] text-white">
      <Link href="/Gallery">
        <button
          className={` ${
            pathname === "/Gallery"
              ? "bg-[#212529]"
              : "bg-[#495057] hover:bg-[#343a40] "
          }  ${linkdign}`}
        >
          All
        </button>
      </Link>
      <Link href="/Gallery/hero?category=Special Events">
        <button
          className={`${
            props.category === "Special Events"
              ? "bg-[#212529]"
              : "bg-[#495057] hover:bg-[#343a40]"
          }  ${linkdign}`}
        >
          Special Events
        </button>
      </Link>
      <Link href="/Gallery/hero?category=Friday Games">
        <button
          className={`${
            props.category === "Friday Games"
              ? "bg-[#212529]"
              : "bg-[#495057] hover:bg-[#343a40]"
          }  ${linkdign}`}
        >
          Friday Games
        </button>
      </Link>
      <Link href="/Gallery/hero?category=School Boundary">
        <button
          className={`${
            props.category === "School Boundary"
              ? "bg-[#212529]"
              : "bg-[#495057] hover:bg-[#343a40]"
          }  ${linkdign}`}
        >
          School Boundary
        </button>
      </Link>
      <Link href="/Gallery/hero?category=School Family">
        <button
          className={`${
            props.category === "School Family"
              ? "bg-[#212529]"
              : "bg-[#495057] hover:bg-[#343a40]"
          }  ${linkdign}`}
        >
          School Family
        </button>
      </Link>
    </div>
  );
}

export default ImageLinkPage;
