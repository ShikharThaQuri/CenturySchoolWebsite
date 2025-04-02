"use client";

import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function EditNoticePage({ params }: { params: { noticeId: string } }) {
  const router = useRouter();

  const [noticeTitle, setNoticeTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [type, setType] = useState<string>("");

  const [errorMsg, setErrorMsg] = useState<string>("");

  async function addNoticeFunctionHandel(e: any) {
    e.preventDefault();

    try {
      await axios.patch(`http://localhost:3000/api/notice/${params.noticeId}`, {
        noticeTitle: noticeTitle,
        disc: description,
        color: color,
        type: type,
      });
    } catch (error) {
      const e = error as AxiosError<any>;
      setErrorMsg(e.response?.data.msg.message);
    }

    router.push("/dashboard/Add-Notice", { scroll: false });
  }

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/api/notice/${params.noticeId}`
        );

        setNoticeTitle(data.result.noticeTitle);
        setDescription(data.result.disc);
        setColor(data.result.color);
        setType(data.result.type);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [params.noticeId]);

  return (
    <div className="px-[5rem] py-[5rem] tablet:px-[1.5rem]">
      <div className="text-center mb-[3rem]">
        <h1 className="text-[1.5rem] font-bold">Update Notice</h1>
      </div>

      <form onSubmit={addNoticeFunctionHandel}>
        <label
          htmlFor="Notice Heading"
          className="text-[1.2rem] mb-[0.5rem] block font-bold"
        >
          Notice Heading
        </label>
        <input
          type="text"
          className="w-full text-[1.2rem] px-[1rem] py-[0.5rem] rounded-[0.5rem] mb-[2rem] outline-none"
          value={noticeTitle}
          onChange={(e) => {
            setNoticeTitle(e.target.value);
          }}
        />

        <label
          htmlFor="Notice Discription"
          className="text-[1.2rem] mb-[0.5rem] block font-bold"
        >
          Notice Discription
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
          Color
        </label>
        <select
          className="px-[0.8rem] py-[0.5rem] text-[1.2rem] rounded-[0.5rem] outline-none mb-[2rem]"
          defaultValue={"Default"}
          onChange={(e) => {
            setColor(e.target[e.target.options.selectedIndex].innerText);
          }}
        >
          <option value="Default" hidden disabled>
            Select Color
          </option>
          <option value="red">red</option>
          <option value="green">green</option>
        </select>

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
            Notice Type
          </option>
          <option value="Parmanent">Parmanent</option>
          <option value="Temporori">Temporori</option>
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
