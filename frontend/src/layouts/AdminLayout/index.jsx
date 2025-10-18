import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./components/AdminSidebar";
import AdminHeader from "./components/AdminHeader";

const AdminLayout = () => {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1 w-[0vw]">
        <AdminHeader />
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
