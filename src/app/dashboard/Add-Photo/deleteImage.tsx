"use client";

import React from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { useRouter } from "next/navigation";

function DeleteImage(props: any) {
  const router = useRouter();

  const deleteButtonHendel = async (e: any) => {
    e.preventDefault();

    try {
      await axios.delete(
        `http://localhost:3000/api/photos/${props.singlImage._id}`
      );
    } catch (error) {
      console.log(error);
    }

    router.refresh();
  };

  return (
    <div className="absolute top-0 right-0 left-0 bottom-0 bg-[black] opacity-0 transition delay-150 hover:opacity-80">
      <DeleteIcon
        className="mx-[0.5rem] text-[white] text-[2rem] cursor-pointer absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
        onClick={deleteButtonHendel}
      />
    </div>
  );
}

export default DeleteImage;
