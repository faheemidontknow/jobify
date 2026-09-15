import React from "react";
import { Outlet } from "react-router";
import EmployerSidebar from "../../components/employer/EmployerSidebar";

const EmployerLayout = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fc]">
      <EmployerSidebar />

      <main className="ml-64 min-h-screen p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default EmployerLayout;
