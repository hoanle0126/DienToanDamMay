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
import { useDispatch } from "react-redux";
import { addNewHotDeal } from "@/store/hotDeals/action";
import { useNavigate } from "react-router-dom";

const HotDealsAddPage = () => {
  const navigate = useNavigate();
  const [deals, setDeals] = React.useState({
    banners: [
      "https://media.hcdn.vn/hsk/campaign/1320x400land-1750644402.jpg",
      "https://media.hcdn.vn/hsk/campaign/24-6-luong-ve-sale-to-640x240-1750649806.jpg",
      "http://res.cloudinary.com/dbszvxbvv/image/upload/v1750781349/yimfqrdhqpmodbjyaejj.jpg",
    ],
    deal_times: [
      {
        time: "2025-06-25T14:56:18.885Z",
        products: [
          {
            product: {
              id: 4,
              name: "adsasd",
              categories: {
                id: 556,
                name: "Bộ Chăm Sóc Da Mặt",
                thumbnail: null,
                type: "Heath & Beauty",
                parent_id: 1,
                created_at: "2025-06-19T21:22:13.000000Z",
                updated_at: "2025-06-19T21:22:13.000000Z",
              },
              categories_id: 556,
              thumbnail:
                "http://res.cloudinary.com/dbszvxbvv/image/upload/v1750705622/wusmcvs6lwdjlsr2kdci.jpg",
              parameters: {
                "Cấu hình và bộ nhớ": {
                  "Hệ điều hành:": ["Android 14"],
                  "Chip xử lí(CPU):": [
                    "MediaTek Dimensity 8200 5G 8 nhân",
                    "MediaTek Dimensity 8200 5G 8 nhân 2",
                  ],
                },
                "Camera & Màn hình": {
                  "Độ phân giải camera sau:": ["Chính 50 MP & Phụ 32 MP, 8 MP"],
                },
              },
              price: 213,
              quantity: 234,
              remain: 234,
              description: "<p>safadsfadsfadsf</p>",
              ingredients: "<p>asdasd</p>",
              guide: "<p>sadasd</p>",
              images: [
                "http://res.cloudinary.com/dbszvxbvv/image/upload/v1750705642/hz9yyn2zepzypfeq8oeh.jpg",
                "http://res.cloudinary.com/dbszvxbvv/image/upload/v1750705646/wqqm7qp1uyhvnstn9ihn.jpg",
              ],
              brand: {
                id: 1,
                name: "16plain",
                description:
                  "16plain là thương hiệu chăm sóc da từ Hàn Quốc, nổi bật với các dòng mặt nạ giấy phục hồi, dưỡng sáng và ngừa lão hóa, phù hợp mọi loại da. Với cam kết chất lượng và hiệu quả, thương 16plain đang trở thành lựa chọn số một của nhiều khách hàng yêu thích dưỡng da tại Việt Nam và trên thế giới.",
                thumbnail:
                  "http://res.cloudinary.com/dbszvxbvv/image/upload/v1750513096/qoacmsbtacanlztmo6ee.jpg",
                banner: null,
                logo: "http://res.cloudinary.com/dbszvxbvv/image/upload/v1750513102/sgendofiqpzns5upbcyn.jpg",
                created_at: "2025-06-21T05:44:42.000000Z",
                updated_at: "2025-06-21T06:38:42.000000Z",
              },
              brand_id: 1,
              created_at: "2025-06-23T12:09:17.000000Z",
            },
            sales: 0,
          },
          {
            product: {
              id: 5,
              name: "asdasd",
              categories: {
                id: 550,
                name: "Serum / Tinh Chất",
                thumbnail: null,
                type: "Heath & Beauty",
                parent_id: 549,
                created_at: "2025-06-19T21:22:13.000000Z",
                updated_at: "2025-06-19T21:22:13.000000Z",
              },
              categories_id: 550,
              thumbnail:
                "http://res.cloudinary.com/dbszvxbvv/image/upload/v1750706998/azc8zx4rbas79jctslid.jpg",
              parameters: {
                "Cấu hình và bộ nhớ": {
                  "Hệ điều hành:": ["Android 14"],
                  "Chip xử lí(CPU):": [
                    "MediaTek Dimensity 8200 5G 8 nhân",
                    "MediaTek Dimensity 8200 5G 8 nhân 2",
                  ],
                },
                "Camera & Màn hình": {
                  "Độ phân giải camera sau:": ["Chính 50 MP & Phụ 32 MP, 8 MP"],
                },
              },
              price: 21,
              quantity: 123,
              remain: 123,
              description: "<p>asdasd</p>",
              ingredients: "<p>asd</p>",
              guide: "<p>asd</p>",
              images: [
                "http://res.cloudinary.com/dbszvxbvv/image/upload/v1750707016/uwpw3plefbrjb8iejjpq.jpg",
              ],
              brand: {
                id: 1,
                name: "16plain",
                description:
                  "16plain là thương hiệu chăm sóc da từ Hàn Quốc, nổi bật với các dòng mặt nạ giấy phục hồi, dưỡng sáng và ngừa lão hóa, phù hợp mọi loại da. Với cam kết chất lượng và hiệu quả, thương 16plain đang trở thành lựa chọn số một của nhiều khách hàng yêu thích dưỡng da tại Việt Nam và trên thế giới.",
                thumbnail:
                  "http://res.cloudinary.com/dbszvxbvv/image/upload/v1750513096/qoacmsbtacanlztmo6ee.jpg",
                banner: null,
                logo: "http://res.cloudinary.com/dbszvxbvv/image/upload/v1750513102/sgendofiqpzns5upbcyn.jpg",
                created_at: "2025-06-21T05:44:42.000000Z",
                updated_at: "2025-06-21T06:38:42.000000Z",
              },
              brand_id: 1,
              created_at: "2025-06-23T12:30:25.000000Z",
            },
            sales: "24",
          },
        ],
      },
      {
        products: [
          {
            product: {
              id: 4,
              name: "adsasd",
              categories: {
                id: 556,
                name: "Bộ Chăm Sóc Da Mặt",
                thumbnail: null,
                type: "Heath & Beauty",
                parent_id: 1,
                created_at: "2025-06-19T21:22:13.000000Z",
                updated_at: "2025-06-19T21:22:13.000000Z",
              },
              categories_id: 556,
              thumbnail:
                "http://res.cloudinary.com/dbszvxbvv/image/upload/v1750705622/wusmcvs6lwdjlsr2kdci.jpg",
              parameters: {
                "Cấu hình và bộ nhớ": {
                  "Hệ điều hành:": ["Android 14"],
                  "Chip xử lí(CPU):": [
                    "MediaTek Dimensity 8200 5G 8 nhân",
                    "MediaTek Dimensity 8200 5G 8 nhân 2",
                  ],
                },
                "Camera & Màn hình": {
                  "Độ phân giải camera sau:": ["Chính 50 MP & Phụ 32 MP, 8 MP"],
                },
              },
              price: 213,
              quantity: 234,
              remain: 234,
              description: "<p>safadsfadsfadsf</p>",
              ingredients: "<p>asdasd</p>",
              guide: "<p>sadasd</p>",
              images: [
                "http://res.cloudinary.com/dbszvxbvv/image/upload/v1750705642/hz9yyn2zepzypfeq8oeh.jpg",
                "http://res.cloudinary.com/dbszvxbvv/image/upload/v1750705646/wqqm7qp1uyhvnstn9ihn.jpg",
              ],
              brand: {
                id: 1,
                name: "16plain",
                description:
                  "16plain là thương hiệu chăm sóc da từ Hàn Quốc, nổi bật với các dòng mặt nạ giấy phục hồi, dưỡng sáng và ngừa lão hóa, phù hợp mọi loại da. Với cam kết chất lượng và hiệu quả, thương 16plain đang trở thành lựa chọn số một của nhiều khách hàng yêu thích dưỡng da tại Việt Nam và trên thế giới.",
                thumbnail:
                  "http://res.cloudinary.com/dbszvxbvv/image/upload/v1750513096/qoacmsbtacanlztmo6ee.jpg",
                banner: null,
                logo: "http://res.cloudinary.com/dbszvxbvv/image/upload/v1750513102/sgendofiqpzns5upbcyn.jpg",
                created_at: "2025-06-21T05:44:42.000000Z",
                updated_at: "2025-06-21T06:38:42.000000Z",
              },
              brand_id: 1,
              created_at: "2025-06-23T12:09:17.000000Z",
            },
            sales: 0,
          },
          {
            product: {
              id: 2,
              name: "Sữa rửa mặt dịu nhẹ",
              categories: {
                id: 1,
                name: "Chăm sóc da mặt",
                thumbnail:
                  "http://res.cloudinary.com/dbszvxbvv/image/upload/v1750418479/s1oqql25xem2qpmkgjwu.webp",
                type: "Heath & Beauty",
                parent_id: null,
                created_at: "2025-06-19T17:26:19.000000Z",
                updated_at: "2025-06-19T21:21:22.000000Z",
              },
              categories_id: 1,
              thumbnail: "https://example.com/images/thumbnail.jpg",
              parameters: {
                "Cấu hình và bộ nhớ": {
                  "Hệ điều hành:": ["Android 14"],
                  "Chip xử lí(CPU):": [
                    "MediaTek Dimensity 8200 5G 8 nhân",
                    "MediaTek Dimensity 8200 5G 8 nhân 2",
                  ],
                },
                "Camera & Màn hình": {
                  "Độ phân giải camera sau:": ["Chính 50 MP & Phụ 32 MP, 8 MP"],
                },
              },
              price: 185000,
              quantity: 120,
              remain: 120,
              description: "Làm sạch sâu, không gây khô da.",
              ingredients: "Water, Glycerin, Aloe Vera...",
              guide: "Dùng mỗi sáng và tối, tạo bọt và massage nhẹ nhàng.",
              images: [
                "https://example.com/images/image1.jpg",
                "https://example.com/images/image2.jpg",
              ],
              brand: {
                id: 1,
                name: "16plain",
                description:
                  "16plain là thương hiệu chăm sóc da từ Hàn Quốc, nổi bật với các dòng mặt nạ giấy phục hồi, dưỡng sáng và ngừa lão hóa, phù hợp mọi loại da. Với cam kết chất lượng và hiệu quả, thương 16plain đang trở thành lựa chọn số một của nhiều khách hàng yêu thích dưỡng da tại Việt Nam và trên thế giới.",
                thumbnail:
                  "http://res.cloudinary.com/dbszvxbvv/image/upload/v1750513096/qoacmsbtacanlztmo6ee.jpg",
                banner: null,
                logo: "http://res.cloudinary.com/dbszvxbvv/image/upload/v1750513102/sgendofiqpzns5upbcyn.jpg",
                created_at: "2025-06-21T05:44:42.000000Z",
                updated_at: "2025-06-21T06:38:42.000000Z",
              },
              brand_id: 1,
              created_at: "2025-06-23T11:24:07.000000Z",
            },
            sales: 0,
          },
        ],
        time: "2025-06-27T16:09:28.216Z",
      },
    ],
  });
  const [selectIndex, setSelectIndex] = React.useState(0);
  const [openDealDateModal, setOpenDealDateModal] = React.useState(false);
  const [openProductModal, setOpenProductModal] = React.useState(false);
  const [editSales, setEditSales] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log("deals", deals);
  }, [deals]);

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
          banners={deals.banners}
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
        {deals.deal_times.at(selectIndex)?.products && (
          <Grid container spacing="12px">
            {deals.deal_times.at(selectIndex)?.products?.map((item, index) => (
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
                              let startDealsTime = deals.deal_times
                                .at(selectIndex)
                                .products.slice(0, index);
                              let startDeals = deals.deal_times.slice(
                                0,
                                selectIndex
                              );
                              let endDealsTime = deals.deal_times
                                .at(selectIndex)
                                .products.slice(
                                  index + 1,
                                  deals.deal_times.at(selectIndex).products
                                    ?.length
                                );
                              let endDeals = deals.deal_times.slice(
                                selectIndex + 1,
                                deals.deal_times.length
                              );
                              let newDealsTime = startDealsTime
                                .concat({ ...item, sales: e.target.value })
                                .concat(endDealsTime);
                              let currentDeal =
                                deals.deal_times.at(selectIndex);
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
                          let startArray = deals.deal_times
                            .at(selectIndex)
                            .products.slice(0, index);
                          let endArray = deals.deal_times
                            .at(selectIndex)
                            .products.slice(
                              index + 1,
                              deals.deal_times.at(selectIndex).products.length
                            );
                          let startDeal = deals.deal_times.slice(
                            0,
                            selectIndex
                          );
                          let endDeal = deals.deal_times.slice(
                            selectIndex + 1,
                            deals.deal_times.length
                          );
                          let currentDeal = {
                            ...deals.deal_times.at(selectIndex),
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
          setDeals({ ...deals, deal_times: [...deals.deal_times, modalValue] })
        }
      />
      <ProductModal
        open={openProductModal}
        handleClose={() => setOpenProductModal(false)}
        deal={deals.deal_times.at(selectIndex).products}
        action={(modalValue) => {
          let startDeal = deals.deal_times.slice(0, selectIndex);
          let endDeal = deals.deal_times.slice(
            selectIndex + 1,
            deals.deal_times.length
          );
          setDeals({
            ...deals,
            deal_times: startDeal
              .concat({
                ...deals.deal_times.at(selectIndex),
                products: deals.deal_times
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
          dispatch(addNewHotDeal(deals));
          // navigate("/admin/brands");
        }}
      >
        Save
      </Button>
    </AdminDefaultLayout>
  );
};

export default HotDealsAddPage;
