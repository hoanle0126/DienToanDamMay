import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ListNavItems = () => {
  const { pathname } = useLocation();
  const [openCategories, setOpenCategories] = React.useState(false);
  const [openDeals, setOpenDeals] = React.useState(false);
  const [openDiscount, setOpenDiscount] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (pathname.includes("/categories")) {
      setOpenCategories(true);
    } else if (pathname.includes("/deals")) {
      setOpenDeals(true);
    } else if (pathname.includes("/discounts")) {
      setOpenDiscount(true);
    }
  }, []);

  return [
    {
      name: "Overview",
      items: [
        {
          name: "Dashboard",
          icon: "solar:chart-bold-duotone",
          action: () => navigate("/admin"),
          active: pathname === "/admin",
        },
      ],
    },
    {
      name: "Management",
      items: [
        {
          name: "Products",
          icon: "solar:bag-2-bold-duotone",
          action: () => navigate("/admin/products"),
          active: pathname.includes("/products"),
        },
        {
          name: "Categories",
          icon: "solar:widget-bold-duotone",
          state: openCategories,
          action: () => setOpenCategories(!openCategories),
          active: pathname.includes("/categories"),
          children: [
            {
              name: "Heathy & Beauty",
              active: pathname.includes("heathy-&-beauty"),
              action: () => navigate("admin/categories/heathy-&-beauty"),
            },
            {
              name: "Hasaki Clinic & Spa",
              active: pathname.includes("hasaki-clinic-&-spa"),
              action: () => navigate("admin/categories/hasaki-clinic-&-spa"),
            },
            {
              name: "DermaHair",
              active: pathname.includes("dermaHair"),
              action: () => navigate("admin/categories/dermaHair"),
            },
          ],
        },
        {
          name: "Brands",
          icon: "solar:hashtag-circle-bold-duotone",
          action: () => navigate("/admin/brands"),
          active: pathname.includes("/brands"),
        },
        {
          name: "Deals",
          icon: "solar:sale-bold-duotone",
          state: openDeals,
          action: () => setOpenDeals(!openDeals),
          active: pathname.includes("/deals"),
          children: [
            {
              name: "Hot Deals",
              active: pathname.includes("hot-deals"),
              action: () => navigate("admin/deals/hot-deals"),
            },
            {
              name: "Flash Deals",
              active: pathname.includes("flash-deals"),
              action: () => navigate("admin/deals/flash-deals"),
            },
          ],
        },
        {
          name: "Discount code",
          icon: "solar:ticket-sale-bold",
          state: openDiscount,
          action: () => navigate("/admin/discounts"),
          active: pathname.includes("/discounts"),
        },
        {
          name: "Orders",
          icon: "solar:cart-large-4-bold-duotone",
          action: () => navigate("/admin/orders"),
          active: pathname.includes("/orders"),
        },
      ],
    },
  ];
};

export default ListNavItems;
