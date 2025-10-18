import React from "react";
import { useLocation } from "react-router-dom";

const SideBarData = () => {
  const location = useLocation();

  return [
    {
      title: "Quản lí tài khoản",
      src: "/customer/account/index",
      active: location.pathname.includes("/customer/account/index"),
    },
    {
      title: "Hasaki tích điểm",
      src: "/customer/loyalty/home",
      active: location.pathname.includes("/customer/loyalty/home"),
    },
    {
      title: "Thông tin tài khoản",
      src: "/customer/account/edit",
      active: location.pathname.includes("/customer/account/edit"),
    },
    {
      title: "Đơn hàng của tôi",
      src: "/customer/order/history",
      active: location.pathname.includes("/customer/order/history"),
    },
    {
      title: "Booking của tôi",
      src: "/customer/booking/history",
      active: location.pathname.includes("/customer/booking/history"),
    },
    {
      title: "Số địa chỉ nhận hàng",
      src: "/customer/address/index",
      active: location.pathname.includes("/customer/address"),
    },
    {
      title: "Danh sách yêu thích",
      src: "/customer/wishlist/index",
      active: location.pathname.includes("/customer/wishlist/index"),
    },
    {
      title: "Mua lại",
      src: "/customer/repurchase-product",
      active: location.pathname.includes("/customer/repurchase-product"),
    },
    {
      title: "Hỏi đáp",
      src: "/customer/question",
      active: location.pathname.includes("/customer/question"),
    },
  ];
};

export default SideBarData;
