import React from "react";

const inputBox =
  "w-[25rem] flex-[1] text-white text-[1.65rem] px-[1rem] py-[0.4rem] bg-transparent border border-2 border-white outline-none placeholder:text-[#CACACA]";

function ContactPage() {
  return (
    <div className="bg-[#68677D] h-[80vh] flex px-[5rem]">
      <div className="flex-[1] flex flex-col items-center text-white">
        <div className="mt-[6rem]">
          <h1 className="text-[1.25rem] mb-[1.4rem] font-bold">CALL US</h1>
          <p className="font-bold ml-[1rem] mb-[0.4rem]">++9812345678</p>
          <p className="font-bold ml-[1rem]">++9812345000</p>
        </div>
        <div className="mt-[4rem]">
          <h1 className="text-[1.25rem] mb-[1.4rem] font-bold">LOCATION</h1>
          <p className="font-bold ml-[1rem] mb-[0.4rem]">Kohalpur 2, Banke</p>
          <p className="font-bold ml-[1rem]">121 Rook Street, 21</p>
        </div>
      </div>

      {/*  ------------------------- Input Box --------------------------- */}
      <div className="flex-[4] px-[4rem]">
        <div className="flex gap-x-[1rem] mt-[6rem]">
          <input
            type="text"
            placeholder="Enter Your Full Name"
            className={`${inputBox} `}
          />
          <input
            type="text"
            placeholder="Enter Your Address"
            className={`${inputBox} `}
          />
        </div>
        <div className="flex my-[2.25rem] gap-x-[1rem]">
          <input
            type="text"
            placeholder="Enter a Valid Email Address"
            className={`${inputBox}`}
          />
          <input type="text" className={`${inputBox}`} />
        </div>
        <div>
          <textarea
            name="msgBox"
            className="w-[100%] h-[9rem] outline-none bg-transparent border border-2 border-white px-[1rem] py-[0.4rem] text-white text-[1.65rem]"
          ></textarea>
        </div>
        <button className="text-[1.25rem] px-[1.5rem] py-[0.5rem] bg-white mt-[2.25rem]">
          Submit
        </button>
      </div>
    </div>
  );
}

export default ContactPage;
