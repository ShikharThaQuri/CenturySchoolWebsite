import React, { Suspense, cache } from "react";

import Loading from "@/app/loading";
import BackButton from "./backButton";
import SingleImage from "./singleImage";
import axios, { AxiosError } from "axios";

type Data = {
  _id: string;
  imageDis: string;
  image_Url: string;
  public_id: string;
  pin: boolean;
  category: string;
  createdAt: string;
  updatedAt: string;
};

const getData = cache(async (props: string) => {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/api/images/${props}`
    );

    return { data: data, err: null };
  } catch (error) {
    const e = error as AxiosError<any>;
    return { data: null, err: e.response?.data.msg };
  }
});

export async function generateMetadata({
  params,
}: {
  params: { slugTwo: string };
}) {
  const { data, err } = await getData(params.slugTwo);

  if (err) {
    return {
      title: "Error",
      description: "Something Went wrong!!!",
    };
  } else {
    return {
      title: data.result[0].imageDis,
      description: data.result[0].imageDis,
    };
  }
}

export default async function SingleImagePage({
  params,
}: {
  params: { slugTwo: string };
}) {
  const { data, err } = await getData(params.slugTwo);

  if (err) {
    return (
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-[#001219] opacity-100 z-50 flex flex-col justify-center items-center">
        <BackButton />

        <div className="relative w-[80%] h-full flex justify-center items-center rounded-[1rem] object-cover object-center my-[0.5rem] z-[100]">
          <h1 className="font-bold text-[2rem] text-[#780000]">{err}</h1>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`fixed top-0 bottom-0 left-0 right-0 bg-[#001219] opacity-100 z-50 flex flex-col justify-center items-center`}
    >
      <BackButton />

      <Suspense fallback={<Loading />}>
        <SingleImage data={data.result[0] as Data} />
      </Suspense>
    </div>
  );
}
