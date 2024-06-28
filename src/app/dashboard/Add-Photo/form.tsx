"use client";

import React, { FormEvent, useState } from "react";

import UploadIcon from "@mui/icons-material/Upload";
import axios, { AxiosError } from "axios";

function Form() {
  const [photoDis, setPhotoDis] = useState<string>("");
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
      Data.set("image", file);

      const { data } = await axios.post(
        "http://localhost:3000/api/photos",
        Data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (data) {
        setLoding(false);
      }

      setPhotoDis("");
    } catch (error) {
      const e = error as AxiosError<any>;
      setError(e.response?.data.msg);
    }
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

        <div className="text-center my-[3rem]">
          <input
            className="hidden"
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
