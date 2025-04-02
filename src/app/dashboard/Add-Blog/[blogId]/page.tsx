"use client";

import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function EditNoticePage({ params }: { params: { blogId: string } }) {
  const router = useRouter();

  const [blogHeading, setBlogHeading] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [writerName, setWriterName] = useState<string>("");
  const [type, setType] = useState<string>("");

  const [errorMsg, setErrorMsg] = useState<string>("");

  async function addBlogFunctionHandel(e: any) {
    e.preventDefault();

    try {
      await axios.patch(`http://localhost:3000/api/blog/${params.blogId}`, {
        blogHeading: blogHeading,
        dis: description,
        writerName: writerName,
        type: type,
      });

      router.push("/dashboard/Add-Blog", { scroll: false });
    } catch (error) {
      const e = error as AxiosError<any>;
      setErrorMsg(e.response?.data.msg.message);
    }
  }

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/api/blog/${params.blogId}`
        );

        setBlogHeading(data.result.heading);
        setDescription(data.result.dis);
        setWriterName(data.result.writerName);
        setType(data.result.type);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [params.blogId]);

  return (
    <div className="px-[5rem] py-[5rem] tablet:px-[1.5rem]">
      <div className="text-center mb-[3rem]">
        <h1 className="text-[1.5rem] font-bold">Update Blog</h1>
      </div>

      <form onSubmit={addBlogFunctionHandel}>
        <label
          htmlFor="Blog Heading"
          className="text-[1.2rem] mb-[0.5rem] block font-bold"
        >
          Blog Heading
        </label>
        <input
          type="text"
          className="w-full text-[1.2rem] px-[1rem] py-[0.5rem] rounded-[0.5rem] mb-[2rem] outline-none"
          value={blogHeading}
          onChange={(e) => {
            setBlogHeading(e.target.value);
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
          value={type}
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

export default EditNoticePage;
