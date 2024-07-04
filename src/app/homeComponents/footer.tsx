import React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

const smallText = "text-[1.1rem] text-white";

function Footer() {
  return (
    <div className="bg-[#1b263b] px-[11.5rem] py-[3.5rem] flex justify-between ">
      <h1>Logo</h1>

      <div className="flex">
        <div className="ml-[5rem]">
          <h1 className="text-[1.5rem] text-[white] font-bold mb-[1rem]">
            Information
          </h1>
          <p className={smallText}>
            <Link href="/About-Us">About Us</Link>
          </p>
          <p className={smallText}>
            <Link href="/Notice">Notice</Link>
          </p>
          <p className={smallText}>
            <Link href="/Blogs/AllBlogs">Blog</Link>
          </p>
        </div>
        <div className="ml-[5rem]">
          <h1 className="text-[1.5rem] text-[white] font-bold mb-[1rem]">
            Contact Us
          </h1>
          <p className={smallText}>++ 9812489000</p>
          <p className={smallText}>++ 9812489000</p>
        </div>

        <div className="ml-[5rem]">
          <h1 className="text-[1.5rem] text-[white] font-bold mb-[1rem]">
            Socal Links
          </h1>
          <div className="flex justify-evenly">
            <FacebookIcon className="text-[#0077b6] cursor-pointer" />
            <InstagramIcon className="text-[#f72585] cursor-pointer" />
            <LinkedInIcon className="text-[#0077b6] cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
