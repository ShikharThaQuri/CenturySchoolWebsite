import Image from "next/image";
import React from "react";

import EventPhoto1 from "@/img/event_photo_1.jpg";

const imageProp =
  "w-[13rem] h-[20rem] transition-all duration-[0.25s] ease-in-out hover:h-[22rem] hover:w-[15rem] object-center ";

function EventsSection() {
  return (
    <div className="px-[11.5rem] bg-[#0096C7] pt-[2rem] h-[90vh]">
      <h1 className="text-white text-[2rem] font-bold text-center">
        LATEST EVENTS
      </h1>

      <div className="h-[78%] flex justify-evenly items-center">
        <Image alt="image1" src={EventPhoto1} className={imageProp} />
        <Image alt="image1" src={EventPhoto1} className={imageProp} />
        <Image alt="image1" src={EventPhoto1} className={imageProp} />
        <Image alt="image1" src={EventPhoto1} className={imageProp} />
        <Image alt="image1" src={EventPhoto1} className={imageProp} />
      </div>

      <div className="text-center">
        <button className="px-[1.5rem] py-[0.7rem] bg-[#FDE773] font-bold text-[1.2rem]">
          View All Events
        </button>
      </div>
    </div>
  );
}

export default EventsSection;
