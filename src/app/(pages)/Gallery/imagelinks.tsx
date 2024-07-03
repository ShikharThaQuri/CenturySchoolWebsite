"use client";

import Link from "next/link";
import React from "react";
import { useParams, usePathname, useSearchParams } from "next/navigation";

const linkdign =
  "text-[1.2rem] px-[1.7rem] py-[0.65rem] rounded-[1rem] mx-[0.1rem]";

function ImageLinkPage() {
  const { slug } = useParams();

  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  return (
    <div className="px-[6rem] text-white">
      <Link href="/Gallery/AllGallery">
        <button
          className={` ${
            slug === "AllGallery"
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
            category === "Special Events"
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
            category === "Friday Games"
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
            category === "School Boundary"
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
            category === "School Family"
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
