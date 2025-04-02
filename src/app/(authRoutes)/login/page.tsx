"use client";

import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function LoginPage() {
  const { push, refresh } = useRouter();

  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<string>("");

  const loginFunctionHandel = async (e: any) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/api/user/login", {
        username: username,
        password: password,
      });

      push("/dashboard");
      refresh();
    } catch (error) {
      const e = error as AxiosError<any>;
      setErrors(e.response?.data.msg);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[30rem] bg-[lightblue] px-[1.5rem] py-[2rem]">
        <h1 className="text-center">Login</h1>
        <form className="flex flex-col" onSubmit={loginFunctionHandel}>
          <label htmlFor="username"></label>
          <input
            className="my-[0.5rem] px-[0.5rem] py-[0.4rem] outline-none text-[1.2rem]"
            type="text"
            name="username"
            value={username}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />

          <label htmlFor="password"></label>
          <input
            className="my-[0.5rem] px-[0.5rem] py-[0.4rem] outline-none text-[1.2rem]"
            type="text"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <h1 className="text-[red] text-right">{errors}</h1>
          <div className="text-center">
            <button className="px-[1.3rem] py-[0.5rem] mt-[0.7rem] bg-[#023e8a]">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
