"use client";

import React from "react";
import { useRef } from "react";

const inputBox =
  "w-full flex-[1] text-white text-[1.65rem] max700:text-[1rem] px-[1rem] py-[0.4rem] bg-transparent border border-2 border-white outline-none placeholder:text-[#CACACA]";

function FormSubmition() {
  const ref = useRef<HTMLFormElement>(null);

  async function handleSubmit(event: any) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b619f2f6-a7b6-42bb-8172-267da3ea0928");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    if (response) {
      ref.current?.reset();
    } else {
      // fail
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      ref={ref}
      className="flex-[4] px-[4rem] max700:px-[0] "
    >
      <div className="flex max700:flex-col gap-x-[1rem] max700:gap-y-[1rem] mt-[6rem]">
        <input
          type="text"
          name="name"
          placeholder="Enter Your Full Name"
          required
          className={`${inputBox}`}
        />
        <input
          type="text"
          name="address"
          placeholder="Enter Your Address"
          required
          className={`${inputBox}`}
        />
      </div>
      <div className="flex max700:flex-col my-[2.25rem] gap-x-[1rem] max700:gap-y-[1rem]">
        <input
          type="email"
          name="email"
          placeholder="Enter a Valid Email Address"
          required
          className={`${inputBox}`}
        />
        {/* <input type="text" className={`${inputBox}`} /> */}
      </div>
      <div>
        <textarea
          name="message"
          required
          className="w-[100%] h-[9rem] outline-none bg-transparent border border-2 border-white px-[1rem] py-[0.4rem] text-white text-[1.65rem]  max700:text-[1rem]"
        ></textarea>
      </div>
      <button
        type="submit"
        className="text-[1.25rem] px-[1.5rem] py-[0.5rem] bg-white mt-[2.25rem]"
      >
        Submit
      </button>
    </form>
  );
}

export default FormSubmition;
