import React from "react";
import CheckoutHeader from "./components/CheckoutHeader";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUser } from "@/store/users/action";

const CheckoutLayout = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <div>
      <CheckoutHeader />
      <Outlet />
    </div>
  );
};

export default CheckoutLayout;
