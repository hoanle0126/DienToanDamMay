import React from "react";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  Tab,
  Tabs,
  Typography,
  Card,
  OutlinedInput,
  Grid,
  ButtonBase,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Avatar,
  TextField,
  Rating,
  ButtonGroup,
} from "@mui/material";
import { Icon } from "@iconify/react";
import ImageThumbnail from "@/components/ImageThumbnail";
import AdminDefaultLayout from "@/layouts/AdminLayout/DefaultLayout";
import ListBanners from "@/components/ListBanner";
import DealDateModal from "./DealDateModal";
import { formatDate } from "@/Function/formatDate";
import { MuiTheme } from "@/theme";
import ProductModal from "./ProductModal";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getHotDealsById, updateHotDeal } from "@/store/hotDeals/action";

const HotDealsViewPage = () => {
  const [deals, setDeals] = React.useState();
  const [selectIndex, setSelectIndex] = React.useState(0);
  const [openDealDateModal, setOpenDealDateModal] = React.useState(false);
  const [openProductModal, setOpenProductModal] = React.useState(false);
  const [editSales, setEditSales] = React.useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const dealReducer = useSelector((store) => store.hotDeals);
  React.useEffect(() => {
    dispatch(getHotDealsById(id));
  }, []);

  React.useEffect(() => {
    setDeals(dealReducer.hot_deal);
    console.log(dealReducer.hot_deal);
  }, [dealReducer.loading]);

  return (
    <AdminDefaultLayout title="Add hot deals">
      <Stack>
        <OutlinedInput
          placeholder="Name"
          value={deals?.name}
          onChange={(e) => setDeals({ ...deals, name: e.target.value })}
          fullWidth
          sx={{ marginBottom: "20px" }}
        />
        <ListBanners
          banners={deals?.banners}
          setBanners={(bannerSrc) => {
            setDeals({ ...deals, banners: bannerSrc });
          }}
        />
        <Stack
          direction="row"
          justifyContent="center"
          sx={{ backgroundColor: "background.paper" }}
        >
          {deals?.deal_times.map((item, index) => (
            <Stack direction="row" alignItems="center" gap="12px">
              {selectIndex === index && (
                <IconButton
                  onClick={() => {
                    setDeals({
                      ...deals,
                      deal_times: deals.deal_times.filter((it) => it !== item),
                    });
                    setSelectIndex(0);
                  }}
                >
                  <Icon
                    icon="solar:trash-bin-minimalistic-linear"
                    width="24"
                    height="24"
                  />
                </IconButton>
              )}
              <Stack
                key={index}
                sx={{
                  padding: "16px 32px",
                  cursor: "pointer",
                  backgroundColor:
                    selectIndex === index
                      ? "secondary.main"
                      : "background.paper",
                  color:
                    selectIndex === index ? "background.paper" : "text.primary",
                }}
                onClick={() => {
                  setSelectIndex(index);
                }}
              >
                <Typography variant="subtitle2">
                  {formatDate(item.time)}
                </Typography>
              </Stack>
            </Stack>
          ))}
          <Button
            sx={{
              borderRadius: 0,
            }}
            variant="outlined"
            color="common"
            onClick={() => setOpenDealDateModal(true)}
          >
            <Typography variant="subtitle2">Add date</Typography>
          </Button>
        </Stack>
        {deals?.deal_times.at(selectIndex)?.products && (
          <Grid container spacing="12px">
            {deals?.deal_times.at(selectIndex)?.products?.map((item, index) => (
              <Grid size={12 / 5} key={index}>
                <Stack
                  sx={{
                    padding: "8px",
                    boxShadow: "custom.card",
                  }}
                >
                  <img
                    src={item?.product?.thumbnail}
                    className="size-full aspect-square"
                  />
                  <Stack paddingTop="8px">
                    <Stack direction="row" alignItems="center" gap="20px">
                      <Typography variant="h6" color="secondary.main">
                        {item?.product?.price}
                      </Typography>
                      <div className="flex-1"></div>
                      {editSales === index ? (
                        <Stack direction="row">
                          <OutlinedInput
                            size="small"
                            type="number"
                            value={item.sales}
                            onChange={(e) => {
                              let startDealsTime = deals?.deal_times
                                .at(selectIndex)
                                .products.slice(0, index);
                              let startDeals = deals?.deal_times.slice(
                                0,
                                selectIndex
                              );
                              let endDealsTime = deals?.deal_times
                                .at(selectIndex)
                                .products.slice(
                                  index + 1,
                                  deals?.deal_times.at(selectIndex).products
                                    ?.length
                                );
                              let endDeals = deals?.deal_times.slice(
                                selectIndex + 1,
                                deals?.deal_times.length
                              );
                              let newDealsTime = startDealsTime
                                .concat({ ...item, sales: e.target.value })
                                .concat(endDealsTime);
                              let currentDeal =
                                deals?.deal_times.at(selectIndex);
                              currentDeal = {
                                ...currentDeal,
                                products: newDealsTime,
                              };
                              let newDeals = startDeals
                                .concat(currentDeal)
                                .concat(endDeals);

                              console.log(currentDeal);
                              setDeals({ ...deals, deal_times: newDeals });
                            }}
                          />
                          <IconButton
                            onClick={() => {
                              setEditSales(false);
                            }}
                          >
                            <Icon
                              icon="eva:save-outline"
                              width="24"
                              height="24"
                            />
                          </IconButton>
                        </Stack>
                      ) : (
                        <Typography variant="body2" color="secondary.main">
                          {item?.sales}%
                        </Typography>
                      )}
                    </Stack>
                    <Typography variant="subtitle2">
                      {item?.product?.brand.name}
                    </Typography>
                    <Typography variant="body1">
                      {item?.product?.name}
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
                          let startArray = deals?.deal_times
                            .at(selectIndex)
                            .products.slice(0, index);
                          let endArray = deals?.deal_times
                            .at(selectIndex)
                            .products.slice(
                              index + 1,
                              deals?.deal_times.at(selectIndex).products.length
                            );
                          let startDeal = deals?.deal_times.slice(
                            0,
                            selectIndex
                          );
                          let endDeal = deals?.deal_times.slice(
                            selectIndex + 1,
                            deals?.deal_times.length
                          );
                          let currentDeal = {
                            ...deals?.deal_times.at(selectIndex),
                            products: startArray.concat(endArray),
                          };
                          setDeals({
                            ...deals,
                            deal_times: startDeal
                              .concat(currentDeal)
                              .concat(endDeal),
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
                <IconButton
                  size="large"
                  onClick={() => setOpenProductModal(true)}
                >
                  <Icon icon="eva:plus-outline" width="40" height="40" />
                </IconButton>
              </Stack>
            </Grid>
          </Grid>
        )}
      </Stack>
      <DealDateModal
        open={openDealDateModal}
        handleClose={() => setOpenDealDateModal(false)}
        action={(modalValue) =>
          setDeals({ ...deals, deal_times: [...deals?.deal_times, modalValue] })
        }
      />
      <ProductModal
        open={openProductModal}
        handleClose={() => setOpenProductModal(false)}
        deal={deals?.deal_times.at(selectIndex)?.products}
        action={(modalValue) => {
          let startDeal = deals?.deal_times.slice(0, selectIndex);
          let endDeal = deals?.deal_times.slice(
            selectIndex + 1,
            deals?.deal_times.length
          );
          setDeals({
            ...deals,
            deal_times: startDeal
              .concat({
                ...deals?.deal_times.at(selectIndex),
                products: deals?.deal_times
                  .at(selectIndex)
                  .products.concat(modalValue),
              })
              .concat(endDeal),
          });
        }}
      />
      <Button
        variant="contained"
        sx={{
          position: "fixed",
          zIndex: 10000,
          right: 20,
          bottom: 20,
        }}
        onClick={() => {
          dispatch(updateHotDeal(deals, id));
          console.log(deals);
        }}
      >
        Save
      </Button>
    </AdminDefaultLayout>
  );
};

export default HotDealsViewPage;
