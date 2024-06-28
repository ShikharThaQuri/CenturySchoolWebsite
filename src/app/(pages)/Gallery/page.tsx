import Image from "next/image";
import React from "react";

import Photo1 from "@/img/event_photo_1.jpg";
import Photo2 from "@/img/photo2.jpeg";
import Profile6 from "@/img/profile-6.jpg";

import CloseIcon from "@mui/icons-material/Close";

const imgDes =
  "w-[20rem] h-[20rem] rounded-[1rem] object-cover object-center my-[0.5rem]";

function GalleryPage() {
  return (
    <div className="pb-[3rem]">
      <div className="px-[6rem] text-white">
        <button className="bg-[#3a0ca3] px-[1rem] py-[0.5rem] rounded-[2rem]">
          Special Events
        </button>
        <button className="bg-[#7209b7] px-[1rem] py-[0.5rem] rounded-[2rem]">
          Friday Games
        </button>
        <button className="bg-[#7209b7] px-[1rem] py-[0.5rem] rounded-[2rem]">
          School Ground
        </button>
      </div>
      <h1 className="pt-[3rem] text-center font-bold text-[1.5rem]">
        Special Events
      </h1>

      <div className="px-[6rem] my-[1rem] flex flex-wrap justify-evenly items-center">
        <div>
          <Image src={Photo1} alt="image" className={imgDes} />
        </div>
        <div>
          <Image src={Photo2} alt="image" className={imgDes} />
        </div>
        <div>
          <Image src={Profile6} alt="image" className={imgDes} />
        </div>
        <div>
          <Image src={Photo1} alt="image" className={imgDes} />
        </div>
        <div>
          <Image src={Photo2} alt="image" className={imgDes} />
        </div>
        <div>
          <Image src={Profile6} alt="image" className={imgDes} />
        </div>
      </div>

      {/* --------------- Single Image Effect -------------------- */}

      <div className="fixed top-0 bottom-0 left-0 right-0 bg-[#001219] opacity-[0.98] hidden">
        <div className="z-50 relative opacity-100 flex justify-center items-center w-full h-full">
          <CloseIcon className="absolute right-[2rem] top-[2rem] text-white cursor-pointer" />

          <Image
            src={Profile6}
            alt="image"
            className="w-[auto] h-[30rem] rounded-[1rem] object-cover object-center my-[0.5rem]"
          />
        </div>
      </div>
    </div>
  );
}

export default GalleryPage;
