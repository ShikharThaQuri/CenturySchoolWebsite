import React from "react";
import SideBar from "./sideBar";
import DashboardAuth from "./dashboardAuth";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DashboardAuth>
        <div className="pl-[12rem] bg-[#D5BDAF] relative">
          <SideBar />
          {children}
        </div>
      </DashboardAuth>
    </>
  );
}

export default DashboardLayout;
