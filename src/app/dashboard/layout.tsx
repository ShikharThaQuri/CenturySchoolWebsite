import React, { Suspense } from "react";
import SideBar from "./sideBar";
import DashboardAuth from "./dashboardAuth";
import Loading from "../loading";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <DashboardAuth>
          <div className="pl-[11.5rem] max700:pl-[9.5rem] bg-[#D5BDAF] relative">
            <SideBar />
            {children}
          </div>
        </DashboardAuth>
      </Suspense>
    </>
  );
}

export default DashboardLayout;
