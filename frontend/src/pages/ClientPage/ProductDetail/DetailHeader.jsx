import { formatCurrency } from "@/Function/formatCurrency";
import { Icon } from "@iconify/react";
import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DetailHeader = ({ action, tabLists, tab, setTab }) => {
  const { product } = useSelector((store) => store.products);

  return (
    <Stack
      sx={{
        height: 132,
        width: "100%",
        bgcolor: "background.paper",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 10000,
        boxShadow: "custom.z1",
      }}
    >
      <Stack
        sx={{
          paddingX: "120px",
          paddingY: "8px",
          boxShadow: "custom.z1",
          flexDirection: "row",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <img src={product?.thumbnail} className="size-[68px]" />
        <Stack
          sx={{
            flex: 1,
            overflow: "hidden",
            justifyContent: "start",
            height: "100%",
          }}
        >
          <Typography
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {product?.name}
          </Typography>
          <Typography
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              "& .price": {
                color: "secondary.main",
                typography: "body2",
              },
              "& .brand__name": {
                color: "primary.main",
                typography: "subtitle2",
              },
            }}
          >
            <span className="price">{formatCurrency(product?.price)}</span> |{" "}
            <span className="brand__name">{product?.brand?.name}</span>
          </Typography>
        </Stack>
        <Button
          size="large"
          variant="contained"
          startIcon={<Icon icon="solar:cart-plus-bold" />}
          sx={{
            marginLeft: "20px",
          }}
          onClick={action}
        >
          Thêm vào giỏ hàng
        </Button>
      </Stack>
      <Stack
        sx={{
          width: "100%",
          flex: 1,
          paddingX: "120px",
          alignItems: "center",
          flexDirection: "row",
          "& .tab__item": {
            cursor: "pointer",
            paddingX: "8px",
            height: "100%",
            alignItems: "center",
            display: "flex",
            "&.link__active": {
              color: "secondary.main",
              fontWeight: 600,
              borderBottomWidth: 3,
            },
          },
        }}
      >
        {tabLists.map((item, index) => (
          <Typography
            key={item.id}
            className={`${
              Number(tab) === Number(index) && "link__active"
            } tab__item`}
            onClick={() => {
              item.action();
            }}
          >
            {item.title}
          </Typography>
        ))}
      </Stack>
    </Stack>
  );
};

export default DetailHeader;
