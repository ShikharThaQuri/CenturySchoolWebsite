import Image from "next/image";
import React from "react";

import image2 from "@/img/photo2.jpeg";

function FourthSection() {
  return (
    <div className="flex justify-between items-center px-[11.5rem]">
      <div className="max-w-[40rem]">
        <div className="text-right">
          <h2 className="text-[1.5rem] font-bold text-[#de2426]">
            WHY CENTURY SCHOOL ?
          </h2>
        </div>
        <p className="text-justify text-[17px] mb-[2rem] mt-[1rem]">
          Students have ready access to both academic enrichment and support, as
          well as to an inviting range of opportunities for social interactions,
          artistic expression, service learning, and athletics.Students have
          ready access to both academic enrichment.
        </p>
        {/* <div className="text-right">
          <span className="text-[1.25rem] bg-[#de2426] px-[2.5rem] py-[0.8rem] font-bold text-white">
            More
          </span>
        </div> */}
      </div>
      <div className="h-[31.2rem] w-[18.7rem] relative mt-[-1.5rem] z-[50] mb-[-1.5rem] shadow-[0px_-2.5px_9px_10px_rgba(0,0,0,0.4)]">
        <Image
          alt="Photo2"
          src={image2}
          placeholder="blur"
          quality={100}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default FourthSection;
