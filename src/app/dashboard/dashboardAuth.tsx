"use client";

import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

async function Data() {
  try {
    const { data } = await axios.get("http://localhost:3000/api/user/auth");

    return { user: data, error: null };
  } catch (error) {
    const e = error as AxiosError<any>;

    return { user: null, error: e };
  }
}

function DashboardAuth({ children }: { children: React.ReactNode }) {
  const { push } = useRouter();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const { user, error } = await Data();

      if (error) {
        push("/login");
        return;
      }

      setIsSuccess(true);
    })();
  }, [push]);

  if (!isSuccess) {
    return (
      <div className="text-center">
        <p className="font-bold text-[2rem]">Loading....</p>
      </div>
    );
  }

  return <>{children}</>;
}

export default DashboardAuth;
