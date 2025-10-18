import AdminDefaultLayout from "@/layouts/AdminLayout/DefaultLayout";
import { Icon } from "@iconify/react";
import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  IconButton,
  OutlinedInput,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import ProductModal from "./ProductModal";
import { TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { getFlashDeals, updateFlashDeals } from "@/store/flashDeals/action";
import { formatCurrency } from "@/Function/formatCurrency";

const FlashDealsPage = () => {
  const [deal, setDeal] = React.useState({
    products: [],
  });
  const [editSales, setEditSales] = React.useState();
  const [openProductModal, setOpenProductModal] = React.useState(false);
  const dispatch = useDispatch();
  const { flashDeal, loading } = useSelector((store) => store.flashDeal);

  React.useEffect(() => {
    dispatch(getFlashDeals());
  }, []);

  React.useEffect(() => {
    setDeal(flashDeal);
  }, [loading]);

  return (
    <AdminDefaultLayout title="Flash Deals">
      <Stack
        alignItems="center"
        justifyContent="center"
        paddingY="12px"
        direction="row"
        gap="12px"
      >
        <TimePicker
          label="Start"
          value={dayjs(deal?.start_time, "HH:mm:ss")}
          onChange={(e) =>
            setDeal({ ...deal, start_time: e.format("HH:mm:ss") })
          }
        />
        <TimePicker
          label="End"
          value={dayjs(deal?.end_time, "HH:mm:ss")}
          onChange={(e) => setDeal({ ...deal, end_time: e.format("HH:mm:ss") })}
        />
      </Stack>
      <Grid container spacing="20px">
        {deal?.products?.map((item, index) => (
          <Grid size={12 / 5} key={index}>
            <Stack
              sx={{
                padding: "8px",
                boxShadow: "custom.card",
              }}
            >
              <img src={item?.thumbnail} className="size-full aspect-square" />
              <Stack paddingTop="8px">
                <Stack direction="row" alignItems="center" gap="20px">
                  <Typography variant="h6" color="secondary.main" flex={1}>
                    {formatCurrency(item?.price)}
                  </Typography>
                  {editSales === index ? (
                    <Stack direction="row">
                      <OutlinedInput
                        sx={{
                          fontSize: 12,
                          width: 60,
                        }}
                        size="small"
                        type="number"
                        value={item.sales}
                        onChange={(e) => {
                          let startDeals = deal?.products.slice(0, index);
                          let endDeals = deal?.products.slice(
                            index + 1,
                            deal?.products.length
                          );
                          setDeal({
                            ...deal,
                            products: startDeals
                              .concat({ ...item, sales: e.target.value })
                              .concat(endDeals),
                          });
                        }}
                      />
                      <IconButton onClick={() => setEditSales(-1)}>
                        <Icon icon="eva:save-outline" width="24" height="24" />
                      </IconButton>
                    </Stack>
                  ) : (
                    <Typography variant="body2" color="secondary.main">
                      {item?.sales}%
                    </Typography>
                  )}
                </Stack>
                <Typography variant="subtitle2">{item?.brand?.name}</Typography>
                <Typography
                  variant="body1"
                  sx={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    textAlign: "start",
                  }}
                >
                  {item?.name}
                </Typography>
                <Stack
                  direction="row"
                  alignItems="center"
                  color="text.secondary"
                  gap="4px"
                >
                  <Rating size="small" />
                  <Typography variant="captiontext">(1)</Typography>
                  <Typography variant="captiontext">|</Typography>
                  <Icon
                    icon="solar:cart-large-minimalistic-bold"
                    width="14"
                    height="14"
                  />
                  <Typography variant="captiontext">623</Typography>
                </Stack>
                <Box
                  sx={{
                    width: "100%",
                    height: "6px",
                    backgroundColor: "secondary.light",
                    position: "relative",
                    marginTop: "8px",
                    borderRadius: "20px",
                  }}
                >
                  <Box
                    sx={{
                      width: "50%",
                      height: "6px",
                      backgroundColor: "secondary.main",
                      position: "absolute",
                      borderRadius: "20px",
                    }}
                  />
                </Box>
                <ButtonGroup
                  variant="outlined"
                  aria-label="Basic button group"
                  fullWidth
                  sx={{ marginTop: "8px" }}
                >
                  <Button
                    sx={{
                      borderRadius: 0,
                    }}
                    color="success"
                    onClick={() => setEditSales(index)}
                  >
                    Edit
                  </Button>
                  <Button
                    sx={{
                      borderRadius: 0,
                    }}
                    color="error"
                    onClick={() => {
                      let startDeals = deal?.products.slice(0, index);
                      let endDeals = deal?.products.slice(
                        index + 1,
                        deal?.products.length
                      );
                      setDeal({
                        ...deal,
                        products: startDeals.concat(endDeals),
                      });
                    }}
                  >
                    Delete
                  </Button>
                </ButtonGroup>
              </Stack>
            </Stack>
          </Grid>
        ))}
        <Grid size={12 / 5}>
          <Stack height="100%" alignItems="center" justifyContent="center">
            <IconButton size="large" onClick={() => setOpenProductModal(true)}>
              <Icon icon="eva:plus-outline" width="40" height="40" />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
      <ProductModal
        deal={deal?.products}
        open={openProductModal}
        handleClose={() => setOpenProductModal(false)}
        action={(modalValue) =>
          setDeal({ ...deal, products: deal?.products.concat(modalValue) })
        }
      />
      <Button
        variant="contained"
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
        }}
        onClick={() => dispatch(updateFlashDeals(deal))}
      >
        Save
      </Button>
    </AdminDefaultLayout>
  );
};

export default FlashDealsPage;
