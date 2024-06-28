import React from "react";
import Gallery from "./gallery";
import axios from "axios";

const getData = async () => {
  try {
    const { data } = await axios.get("http://localhost:3000//api/photos");

    return data;
  } catch (error) {
    console.log(error);
  }
};

async function AllPhotosPage() {
  const data = await getData();

  return (
    <div className="">
      <Gallery data={data} />
    </div>
  );
}

export default AllPhotosPage;
