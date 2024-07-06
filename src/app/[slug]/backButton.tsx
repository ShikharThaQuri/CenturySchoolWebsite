"use client";

import { useRouter } from "next/navigation";
import React from "react";

import CloseIcon from "@mui/icons-material/Close";

export default function BackButton() {
  const { back } = useRouter();

  return (
    <CloseIcon
      onClick={back}
      className="absolute right-[2rem] top-[2rem] text-white text-[3rem] cursor-pointer"
    />
  );
}
