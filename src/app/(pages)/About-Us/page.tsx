import Image from "next/image";
import React from "react";

import eventPhoto2 from "@/img/event_photo_2.jpg";

import profile6 from "@/img/profile-6.jpg";
import profile7 from "@/img/profile-7.jpg";
import profile9 from "@/img/profile-9.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const midColor =
  "flex-[1] tablet:flex-[100%] h-[auto] flex flex-col items-center py-[3rem]";
const midColorFont = "text-white mt-[1rem] text-[1.25rem] tablet:text-[0.9rem]";

const imageDes =
  "absolute -top-[15%] left-[22%]  w-[10rem] h-[10rem] rounded-[10rem] object-cover";
const singTeacherDiv =
  "h-[22.5rem] mx-[1rem] my-[3rem] w-[18rem] px-[0.5rem] border relative bg-white flex flex-col justify-between items-center rounded-[0.5rem]";

function AboutUsPage() {
  return (
    <div className="">
      {/* --------------------- First Section -------------------------- */}
      <div className="flex tablet:flex-col justify-evenly items-center py-[5rem]">
        <div className="text-center hidden tablet:block">
          <Image
            src={eventPhoto2}
            alt="About-us-school-Photo"
            className="w-[20.5rem] tablet:w-[20rem] h-[32rem] tablet:h-[18rem] object-cover object-center "
          />
          <h1 className="text-[1.5rem] font-bold  tablet:text-[#f44336]">
            Aayush Kumar Thakur
          </h1>
          <p className="text-[1.25rem] font-bold text-[#424141] ">Principle</p>
        </div>

        <div className="tablet:mx-[5rem] ">
          <h1 className="text-[1.5rem] font-bold tablet:hidden">
            Aayush Kumar Thakur
          </h1>
          <p className="text-[1.25rem] font-bold text-[#424141] tablet:hidden">
            Principle
          </p>
          <h1 className="text-[4rem] font-bold mt-[1.5rem] text-[#f44336]">
            WHY US
          </h1>
          <p className="w-[32.5rem] tablet:w-[100%] font-[1.1rem] text-justify">
            Students have ready access to both academic enrichment and
            support&#x2c; as well as to an inviting range of opportunities for
            social interactions&#x2c; artistic expression&#x2c; service
            learning&#x2c; and athletics&#183; Students have ready access to
            both academic enrichment&#183; Students have ready access to both
            academic enrichment and support&#x2c; as well as to an inviting
            range of opportunities for social interactions&#x2c; artistic
            expression&#x2c; service learning&#x2c; and athletics&#183; Students
            have ready access to both academic enrichment&#183;
          </p>
        </div>

        <div className="tablet:hidden">
          <Image
            src={eventPhoto2}
            alt="About-us-school-Photo"
            className="w-[20.5rem] tablet:w-[15rem] h-[32rem] tablet:h-[25rem] object-cover object-center "
          />
        </div>
      </div>

      {/* --------------------- Second Section -------------------------- */}
      <div className="flex flex-wrap">
        <div className={`bg-[#56C344] ${midColor}`}>
          <h1 className="text-[2.5rem] tablet:text-[2rem] font-bold mb-[1rem]">
            We Are
          </h1>
          <div className="text-left ">
            <p className={`${midColorFont}`}>A Delicious Meal</p>
            <p className={`${midColorFont}`}>Close Firends</p>
            <p className={`${midColorFont}`}>Comfotable</p>
            <p className={`${midColorFont}`}>Finding Love</p>
            <p className={`${midColorFont}`}>Good Health</p>
          </div>
        </div>
        <div className={`bg-[#6872CE] ${midColor}`}>
          <h1 className="text-[2.5rem]  tablet:text-[2rem] font-bold mb-[1rem]">
            We Are Not
          </h1>
          <div className="text-left">
            <p className={`${midColorFont}`}>A Delicious Meal</p>
            <p className={`${midColorFont}`}>Close Firends</p>
            <p className={`${midColorFont}`}>Comfotable</p>
            <p className={`${midColorFont}`}>Finding Love</p>
            <p className={`${midColorFont}`}>Good Health</p>
          </div>
        </div>
        <div className={`bg-[#C84B4B] ${midColor}`}>
          <h1 className="text-[2.5rem] tablet:text-[2rem] font-bold mb-[1rem]">
            What We Offer
          </h1>
          <div className="text-left">
            <p className={`${midColorFont}`}>A Delicious Meal</p>
            <p className={`${midColorFont}`}>Close Firends</p>
            <p className={`${midColorFont}`}>Comfotable</p>
            <p className={`${midColorFont}`}>Finding Love</p>
            <p className={`${midColorFont}`}>Good Health</p>
          </div>
        </div>
      </div>

      {/* --------------------- Third Section -------------------------- */}
      <div className="flex tablet:flex-col justify-evenly items-center py-[5rem]">
        <div className="text-center hidden tablet:block">
          <Image
            src={eventPhoto2}
            alt="About-us-school-Photo"
            className="w-[20.5rem] tablet:w-[20rem] h-[32rem] tablet:h-[18rem] object-cover object-center"
          />
          <h1 className="text-[1.5rem] font-bold  tablet:text-[#f44336]">
            Lokendra Magar
          </h1>
          <p className="text-[1.25rem] font-bold text-[#424141] ">Founder</p>
        </div>

        <div className="tablet:hidden">
          <Image
            src={eventPhoto2}
            alt="About-us-school-Photo"
            className="w-[20.5rem] tablet:w-[20rem] h-[32rem] tablet:h-[18rem] object-cover object-center"
          />
        </div>

        <div className="tablet:mx-[5rem] ">
          <h1 className="text-[1.5rem] font-bold tablet:hidden">
            Lokendra Magar
          </h1>
          <p className="text-[1.25rem] font-bold text-[#424141] tablet:hidden">
            Founder
          </p>
          <h1 className="text-[4rem] font-bold mt-[1.5rem]  text-[#f44336]">
            History
          </h1>
          <p className="w-[32.5rem] tablet:w-[100%] font-[1.1rem] text-justify">
            Students have ready access to both academic enrichment and
            support&#x2c; as well as to an inviting range of opportunities for
            social interactions&#x2c; artistic expression&#x2c; service
            learning&#x2c; and athletics&#183; Students have ready access to
            both academic enrichment&#183; Students have ready access to both
            academic enrichment and support&#x2c; as well as to an inviting
            range of opportunities for social interactions&#x2c; artistic
            expression&#x2c; service learning&#x2c; and athletics&#183; Students
            have ready access to both academic enrichment&#183;
          </p>
        </div>
      </div>

      {/* -------------------------- Teacher Section ------------------------- */}

      <section className=" px-[5rem] tablet:px-[2rem] py-[4rem] bg-[#ffe5ec] ">
        <h1 className="text-center mb-[2rem] font-bold text-[2rem]  text-[#ff6700]">
          Our Staffs
        </h1>

        <div className="flex flex-wrap justify-evenly items-center">
          <div className={singTeacherDiv}>
            <Image alt="image1" src={profile6} className={imageDes} />

            <p className="">.</p>

            <p className="text-center mt-[5rem]">
              &x22;if you&#xB4;re looking for a place where you can be assured
              that they get the best of what you paid for&#x2c; then Century is
              the best place.&x22;
            </p>

            <div className="text-center mb-[1rem]">
              <h1 className="mb-[0.2rem] text-[#de2426] font-bold text-[1.2rem]">
                Mr. Aayush Kumar Thakur
              </h1>
              <p className="text-[#6c757d] font-bold">Principle</p>
            </div>
          </div>

          <div className={singTeacherDiv}>
            <Image alt="image1" src={profile7} className={imageDes} />

            <p className="">.</p>

            <p className="text-center mt-[5rem]">
              &x22;if you&#xB4;re looking for a place where you can be assured
              that they get the best of what you paid for&#x2c; then Century is
              the best place.&x22;
            </p>

            <div className="text-center mb-[1rem]">
              <h1 className="mb-[0.2rem] text-[#de2426] font-bold text-[1.2rem]">
                Mr. Aayush Kumar Thakur
              </h1>
              <p className="text-[#6c757d] font-bold">Principle</p>
            </div>
          </div>

          <div className={singTeacherDiv}>
            <Image alt="image1" src={profile9} className={imageDes} />

            <p className="">.</p>

            <p className="text-center mt-[5rem]">
              &x22;if you&#xB4;re looking for a place where you can be assured
              that they get the best of what you paid for&#x2c; then Century is
              the best place.&x22;
            </p>

            <div className="text-center mb-[1rem]">
              <h1 className="mb-[0.2rem] text-[#de2426] font-bold text-[1.2rem]">
                Mr. Aayush Kumar Thakur
              </h1>
              <p className="text-[#6c757d] font-bold">Principle</p>
            </div>
          </div>

          <div className={singTeacherDiv}>
            <Image alt="image1" src={profile6} className={imageDes} />

            <p className="">.</p>

            <p className="text-center mt-[5rem]">
              &x22;if you&#xB4;re looking for a place where you can be assured
              that they get the best of what you paid for&#x2c; then Century is
              the best place.&x22;
            </p>

            <div className="text-center mb-[1rem]">
              <h1 className="mb-[0.2rem] text-[#de2426] font-bold text-[1.2rem]">
                Mr. Aayush Kumar Thakur
              </h1>
              <p className="text-[#6c757d] font-bold">Principle</p>
            </div>
          </div>

          <div className={singTeacherDiv}>
            <Image alt="image1" src={profile6} className={imageDes} />

            <p className="">.</p>

            <p className="text-center mt-[5rem]">
              &x22;if you&#xB4;re looking for a place where you can be assured
              that they get the best of what you paid for&#x2c; then Century is
              the best place.&x22;
            </p>

            <div className="text-center mb-[1rem]">
              <h1 className="mb-[0.2rem] text-[#de2426] font-bold text-[1.2rem]">
                Mr. Aayush Kumar Thakur
              </h1>
              <p className="text-[#6c757d] font-bold">Principle</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUsPage;
