"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function SideBar() {
  const pathname = usePathname();

  const sideDesign =
    "pr-[2rem] pl-[1rem] py-[0.7rem] my-[0.5rem] text-[1.3rem] font-bold rounded-l-[2rem]";

  return (
    <div className="pl-[2rem] pt-[5rem] absolute top-0 bottom-0 left-0 bg-[#D9D9D9]">
      <h1
        className={`${
          pathname === "/dashboard" ? "bg-[#BC6C25]" : "bg-[#DDA15E]"
        } ${sideDesign}`}
      >
        <Link href="/dashboard">Dashboard</Link>
      </h1>

      <h1
        className={`${
          pathname === "/dashboard/Add-Notice" ? "bg-[#BC6C25]" : "bg-[#DDA15E]"
        } ${sideDesign}`}
      >
        <Link href="/dashboard/Add-Notice">Add Notice</Link>
      </h1>

      <h1
        className={`${
          pathname === "/dashboard/Add-Photo" ? "bg-[#BC6C25]" : "bg-[#DDA15E]"
        } ${sideDesign}`}
      >
        <Link href="/dashboard/Add-Photo">Add Photo</Link>
      </h1>

      <h1
        className={`${
          pathname === "/dashboard/Pin-Photos" ? "bg-[#BC6C25]" : "bg-[#DDA15E]"
        } ${sideDesign}`}
      >
        <Link href="/dashboard/Pin-Photos">Pin Photos</Link>
      </h1>

      <h1
        className={`${
          pathname === "/dashboard/Add-Blog" ? "bg-[#BC6C25]" : "bg-[#DDA15E]"
        } ${sideDesign}`}
      >
        <Link href="/dashboard/Add-Blog">Add Blog</Link>
      </h1>
    </div>
  );
}

export default SideBar;
