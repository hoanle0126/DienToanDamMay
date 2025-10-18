import React from "react";
import ClientHeader from "./components/ClientHeader";
import { Outlet, useLocation } from "react-router-dom";
import ClientFooter from "./components/ClientFooter";

const ClientLayout = () => {
  const location = useLocation();

  React.useEffect(() => {
    window.scroll(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <ClientHeader />
      <Outlet />
      <ClientFooter />
    </div>
  );
};

export default ClientLayout;
