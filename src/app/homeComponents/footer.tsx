import React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
          <p className={smallText}>Destination</p>
          <p className={smallText}>About Us</p>
          <p className={smallText}>Events</p>
          <p className={smallText}>Blog</p>
        </div>

        <div className="ml-[5rem]">
          <h1 className="text-[1.5rem] text-[white] font-bold mb-[1rem]">
            Contact Us
          </h1>
          <p className={smallText}>Street no:</p>
          <p className={smallText}>Address</p>
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
