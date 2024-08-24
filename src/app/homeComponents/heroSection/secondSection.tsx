import React from "react";

import image2 from "@/img/photo2.jpeg";
import Image from "next/image";

function SecondSection() {
  return (
    <div className="flex justify-center gap-[8rem] items-center px-[3rem]">
      <div className="h-[31.2rem] w-[18.7rem] relative mt-[-1.5rem] z-[50] mb-[-1.5rem] shadow-[0px_-2.5px_9px_10px_rgba(0,0,0,0.4)] tablet:hidden">
        <Image
          alt="Photo2"
          src={image2}
          placeholder="blur"
          // quality={100}
          fill
          // sizes="(min-width: 568px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="max-w-[40rem] my-[4rem]">
        <h2 className="text-[1.5rem] font-bold text-[#de2426]">Since 2002</h2>
        <p className="text-justify text-[17px] mb-[2rem] mt-[1rem]">
          Students have ready access to both academic enrichment and support, as
          well as to an inviting range of opportunities for social interactions,
          artistic expression, service learning, and athletics.Students have
          ready access to both academic enrichment.
        </p>
      </div>
    </div>
  );
}

export default SecondSection;
