import { formatCurrency } from "@/Function/formatCurrency";
import { getProductById } from "@/store/products/action";
import { Box, ButtonBase, Stack, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.products);
  const [hover, setHover] = React.useState(false);

  return (
    <ButtonBase
      disableRipple
      sx={{
        backgroundColor: "background.paper",
        borderRadius: "12px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
      }}
      onClick={() => {
        dispatch(
          getProductById(item.url, () => navigate("/san-pham/" + item.url))
        );
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={item?.images[!hover ? 0 : 1]}
        alt=""
        className="aspect-square w-full"
      />
      <Stack
        sx={{
          padding: "8px",
          width: "100%",
          alignItems: "start",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <Typography
            variant="subtitle1"
            className="break-all"
            color="secondary.main"
          >
            {formatCurrency(item.price - (item.price * item.sales) / 100)}
          </Typography>
          {item.sales > 0 && (
            <Typography variant="body2" color="text.disabled">
              {formatCurrency(item.price)}
            </Typography>
          )}
        </Stack>
        <Typography
          variant="body2"
          textTransform="capitalize"
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            textAlign: "start",
          }}
        >
          {item.name}
        </Typography>
        <Stack
          alignItems="center"
          justifyContent="center"
          bgcolor="secondary.light"
          borderRadius={"20px"}
          position="relative"
          overflow="hidden"
          width="100%"
          marginTop="8px"
        >
          <Box
            sx={{
              position: "absolute",
              height: "100%",
              width: Number((item.remain / item.quantity) * 100) + "%",
              backgroundColor: "secondary.main",
              top: 0,
              left: 0,
              zIndex: 0,
              borderRadius: "20px",
            }}
          ></Box>
          <Typography variant="captiontext" color="grey.0" zIndex={1}>
            {Number((item.remain / item.quantity) * 100).toFixed(0)}%
          </Typography>
        </Stack>
      </Stack>
    </ButtonBase>
  );
};

export default ProductCard;
