"use client";

import React from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import { useRouter } from "next/navigation";

function DeletePost(props: any) {
  const router = useRouter();

  const deleteButtonHendel = async (e: any) => {
    e.preventDefault();

    try {
      await axios.delete(
        `http://localhost:3000/api/notice/${props.singlNotice._id}`
      );
    } catch (error) {
      console.log(error);
    }

    router.refresh();
  };

  return (
    <DeleteIcon
      className="mx-[0.5rem] text-[#de2426] cursor-pointer"
      onClick={deleteButtonHendel}
    />
  );
}

export default DeletePost;
