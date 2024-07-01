"use client";

import React, { FormEvent, useState } from "react";

import UploadIcon from "@mui/icons-material/Upload";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";

function Form() {
  const { refresh } = useRouter();

  const [photoDis, setPhotoDis] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [file, setFile] = useState<File>();
  const [loading, setLoding] = useState<Boolean>(false);
  const [error, setError] = useState<string>("");

  const submitHindelFunction = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;
    if (!photoDis) return;

    try {
      setLoding(true);

      const Data = new FormData();
      Data.set("imageDis", photoDis);
      Data.set("imageCategory", category);
      Data.set("image", file);

      const { data } = await axios.post(
        "http://localhost:3000/api/images",
        Data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setLoding(false);

      setPhotoDis("");
    } catch (error) {
      const e = error as AxiosError<any>;
      console.log(e);

      setError(e.response?.data.msg);
    }

    refresh();
  };

  return (
    <div className="py-[4rem] px-[5rem]">
      <h1 className="text-center font-bold text-[1.5rem] mb-[3rem]">
        Add Photo
      </h1>

      <form onSubmit={submitHindelFunction}>
        <label
          htmlFor="Notice Heading"
          className="text-[1.2rem] mb-[0.5rem] block font-bold"
        >
          Photo Details
        </label>
        <input
          type="text"
          className="w-full text-[1.2rem] px-[1rem] py-[0.5rem] rounded-[0.5rem] mb-[2rem] outline-none"
          value={photoDis}
          onChange={(e: any) => {
            setPhotoDis(e.target.value);
          }}
        />

        <label
          htmlFor="Notice Color"
          className="text-[1.2rem] mb-[0.5rem] block font-bold"
        >
          Category
        </label>
        <select
          className="px-[0.8rem] py-[0.5rem] text-[1.2rem] rounded-[0.5rem] outline-none mb-[2rem]"
          defaultValue={"Default"}
          onChange={(e) => {
            setCategory(e.target[e.target.options.selectedIndex].innerText);
          }}
        >
          <option value="Default" hidden disabled>
            Select Category
          </option>
          <option value="Special Events">Special Events</option>
          <option value="Friday Games">Friday Games</option>
          <option value="School Boundary">School Boundary</option>
          <option value="School Family">School Family</option>
        </select>

        <div className="text-center my-[3rem]">
          <input
            // className="hidden"
            type="file"
            name="file"
            id="uploadImg"
            onChange={(e) => setFile(e.target.files?.[0])}
          />
          <label
            htmlFor="uploadImg"
            className="text-center bg-[#c0392b] text-white font-bold px-[2rem] py-[0.9rem] rounded cursor-pointer"
          >
            <UploadIcon className="mr-[0.4rem]" />
            {loading ? "UPLOADING..." : "UPLOAD IMAGE"}
          </label>
        </div>

        <div className="text-right">
          {error ? (
            <h1 className="text-[#D90429] font-bold mt-[1rem]">{error}</h1>
          ) : (
            ""
          )}
        </div>

        <div className="text-center">
          <button
            disabled={loading ? true : false}
            className="px-[1.5rem] py-[0.5rem] bg-[#6c757d] mt-[2rem] font-bold rounded hover:bg-[#495057]"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
