"use client";

import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Form() {
  const { refresh } = useRouter();

  const [blogTitle, setBlogTitle] = useState<string>("");
  const [writerName, setWriterName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [type, setType] = useState<string>("");

  const [errorMsg, setErrorMsg] = useState<string>("");

  async function addNoticeFunctionHandel(e: any) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/api/blog", {
        heading: blogTitle,
        discription: description,
        writerName: writerName,
        type: type,
      });

      setBlogTitle("");
      setWriterName("");
      setDescription("");
      setErrorMsg("");
    } catch (error) {
      const e = error as AxiosError<any>;
      setErrorMsg(e.response?.data.msg);

      console.log(e);
    }

    refresh();
  }

  return (
    <div>
      <form onSubmit={addNoticeFunctionHandel}>
        <label
          htmlFor="Notice Heading"
          className="text-[1.2rem] mb-[0.5rem] block font-bold"
        >
          Blog Heading
        </label>
        <input
          type="text"
          className="w-full text-[1.2rem] px-[1rem] py-[0.5rem] rounded-[0.5rem] mb-[2rem] outline-none"
          value={blogTitle}
          onChange={(e) => {
            setBlogTitle(e.target.value);
          }}
        />

        <label
          htmlFor="Notice Heading"
          className="text-[1.2rem] mb-[0.5rem] block font-bold"
        >
          Writer Name
        </label>
        <input
          type="text"
          className="w-full text-[1.2rem] px-[1rem] py-[0.5rem] rounded-[0.5rem] mb-[2rem] outline-none"
          value={writerName}
          onChange={(e) => {
            setWriterName(e.target.value);
          }}
        />

        <label
          htmlFor="Notice Discription"
          className="text-[1.2rem] mb-[0.5rem] block font-bold"
        >
          Blog Discription
        </label>
        <textarea
          className="w-full text-[1.2rem] px-[1rem] py-[0.5rem] rounded-[0.5rem] mb-[2rem] outline-none "
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />

        <label
          htmlFor="Notice Color"
          className="text-[1.2rem] mb-[0.5rem] block font-bold"
        >
          Type
        </label>
        <select
          className="px-[0.8rem] py-[0.5rem] text-[1.2rem] rounded-[0.5rem] outline-none mb-[2rem]"
          defaultValue={"Default"}
          onChange={(e) => {
            setType(e.target[e.target.options.selectedIndex].innerText);
          }}
        >
          <option value="Default" hidden disabled>
            Blog Type
          </option>
          <option value="story">story</option>
          <option value="poem">poem</option>
          <option value="educational">educational</option>
        </select>

        <div className="text-right">
          {errorMsg ? (
            <h1 className="text-[#D90429] font-bold mt-[1rem]">{errorMsg}</h1>
          ) : (
            ""
          )}
        </div>

        <div className="text-center mt-[3rem]">
          <button className="bg-[#5E548E] px-[1.5rem] py-[0.5rem] text-white rounded-[0.5rem]">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
