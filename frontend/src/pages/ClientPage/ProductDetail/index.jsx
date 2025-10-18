import GlobalStyle from "@/components/GlobalStyle";
import ProductCard from "@/components/productCard";
import { formatCurrency } from "@/Function/formatCurrency";
import { getProductById } from "@/store/products/action";
import { addCart } from "@/store/users/action";
import { MuiTheme } from "@/theme";
import { Icon } from "@iconify/react";
import {
  Alert,
  Avatar,
  Box,
  Breadcrumbs,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  LinearProgress,
  MenuItem,
  Pagination,
  Rating,
  Select,
  Slide,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import DetailHeader from "./DetailHeader";
import FeatureSection from "./FeatureSection";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, loading } = useSelector((store) => store.products);
  const [quantity, setQuantity] = React.useState(1);
  const [openDialog, setOpenDialog] = React.useState(false);

  React.useEffect(() => {
    dispatch(getProductById(id));
  }, []);

  React.useEffect(() => {
    if (openDialog) {
      const timer = setTimeout(() => {
        setOpenDialog(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [openDialog]);

  return (
    <>
      <Stack
        sx={{
          backgroundColor: "background.neutral",
          padding: "8px 120px",
          paddingBottom: "40px",
          position: "relative",
        }}
      >
        <Breadcrumbs
          separator={
            <Icon icon="solar:alt-arrow-right-linear" width="14" height="14" />
          }
          aria-label="breadcrumb"
          sx={{
            fontStyle: MuiTheme().typography.body2,
            paddingBottom: "8px",
          }}
        >
          <Link underline="hover" color="inherit" to="/">
            Trang chủ
          </Link>
          {product?.categories?.map((item, index) => (
            <Link
              underline="hover"
              color="inherit"
              to={"/danh-muc/" + item.url}
              key={index}
            >
              {item.name}
            </Link>
          ))}
          <Typography variant="body2" underline="hover" color="text.primary">
            {product.name}
          </Typography>
        </Breadcrumbs>
        <Grid container spacing="12px" height="100%">
          <Grid size={9.5}>
            <Stack
              className="size-full"
              sx={{
                height: "100%",
                boxSizing: "border-box",
                gap: "12px",
              }}
            >
              <Stack
                sx={{
                  bgcolor: "background.paper",
                  padding: "12px",
                  gap: "12px",
                  boxShadow: "custom.card",
                }}
              >
                <Stack
                  sx={{
                    flexDirection: "row",
                    gap: "12px",
                    justifyContent: "start",
                    alignItems: "start",
                  }}
                >
                  <Stack direction="row" gap="8px">
                    <Stack
                      sx={{
                        height: "375px",
                        overflowY: "scroll",
                        gap: "12px",
                        "&::-webkit-scrollbar": {
                          display: "none",
                        },
                      }}
                    >
                      {product?.images?.map((item, index) => (
                        <Avatar
                          key={index}
                          variant="square"
                          sx={{
                            width: "48px",
                            height: "48px",
                          }}
                          src={item}
                        />
                      ))}
                    </Stack>
                    <Avatar
                      src={product?.thumbnail}
                      variant="square"
                      sx={{
                        width: "375px",
                        height: "375px",
                      }}
                    />
                  </Stack>
                  <Stack>
                    <Stack
                      direction="row"
                      gap="12px"
                      alignItems="center"
                      justifyContent="start"
                    >
                      <img
                        src="https://hasaki.vn/icon/icon_nowfree.png"
                        className="w-[94px] h-[15px]"
                      />
                      <Link to={"/thuong-hieu/" + product.brand?.url}>
                        <Typography variant="subtitle1" color="primary.dark">
                          {product.brand?.name}
                        </Typography>
                      </Link>
                    </Stack>
                    <Typography variant="h6" color="text.primary">
                      {product?.name}
                    </Typography>
                    <Typography variant="h6" color="text.primary">
                      {product.brand?.name}
                    </Typography>
                    <Stack direction="row" alignItems="center" gap="8px">
                      <Rating size="small" />
                      <Breadcrumbs
                        separator={
                          <Typography variant="captiontext">|</Typography>
                        }
                      >
                        <Typography variant="captiontext">
                          0 đánh giá
                        </Typography>
                        <Typography variant="captiontext">
                          0 đánh giá
                        </Typography>
                        <Typography variant="captiontext">
                          Mã sản phẩm: {product.id}
                        </Typography>
                      </Breadcrumbs>
                    </Stack>
                    <Typography variant="h6" color="secondary.main">
                      {formatCurrency(product.price)}
                    </Typography>
                    <Stack
                      direction="row"
                      alignItems="center"
                      gap="8px"
                      paddingY="12px"
                    >
                      <Typography variant="captiontext">Số lượng</Typography>
                      <Stack
                        sx={{
                          width: "52px",
                          height: "28px",
                          borderWidth: 1,
                          padding: "2px",
                        }}
                      >
                        <input
                          type="number"
                          value={quantity}
                          onChange={(e) =>
                            e.target.value > 0 && setQuantity(e.target.value)
                          }
                          className="w-full flex-1 focus:outline-none text-[12px]"
                        />
                      </Stack>
                    </Stack>
                    <Stack direction="row" alignItems="center" gap="12px">
                      <img
                        src="https://hasaki.vn/icon/icon_nowfree.png"
                        className="w-[94px] h-[15px]"
                      />
                      <Typography variant="subtitle2">
                        Giao Nhanh Miễn Phí 2H
                      </Typography>
                    </Stack>
                    <Typography
                      variant="body2"
                      sx={{
                        ".primary": {
                          color: "primary.main",
                        },
                        ".secondary": {
                          color: "secondary.main",
                        },
                      }}
                    >
                      Bạn muốn nhận hàng trước{" "}
                      <span className="secondary">10h</span> ngày mai. Đặt hàng
                      trước <span className="secondary">24h</span> và chọn giao
                      hàng <span className="secondary">2H</span> ở bước thanh
                      toán. <span className="primary">Xem chi tiết</span>
                    </Typography>
                    <Stack direction="row" paddingTop="12px" gap="12px">
                      <Button
                        startIcon={
                          <Icon
                            icon="solar:cart-plus-linear"
                            width="24"
                            height="24"
                          />
                        }
                        variant="contained"
                        size="large"
                        onClick={async () => {
                          await dispatch(
                            addCart({
                              product: product.id,
                              quantity: quantity,
                            })
                          );
                          setOpenDialog(true);
                        }}
                      >
                        Giỏ hàng
                      </Button>
                      <Button
                        variant="contained"
                        size="large"
                        color="secondary"
                      >
                        Mua ngay
                      </Button>
                    </Stack>
                  </Stack>
                </Stack>
                <Stack direction="row" gap="12px">
                  <Button
                    size="small"
                    variant="contained"
                    color="info"
                    startIcon={<Icon icon="solar:like-bold" />}
                    sx={{
                      borderRadius: "4px",
                    }}
                  >
                    Thích
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    color="info"
                    sx={{
                      borderRadius: "4px",
                    }}
                  >
                    Chia sẻ
                  </Button>
                  <Button
                    size="small"
                    color="common"
                    startIcon={<Icon icon="solar:heart-bold" />}
                    sx={{
                      borderRadius: "4px",
                    }}
                  >
                    Thêm vào danh sách yêu thích
                  </Button>
                </Stack>
              </Stack>
              <FeatureSection
                action={async () => {
                  await dispatch(
                    addCart({
                      product: product.id,
                      quantity: quantity,
                    })
                  );
                  setOpenDialog(true);
                }}
              />
            </Stack>
          </Grid>
          <Grid size={2.5}>
            <Stack sx={{ gap: "12px", height: "100%" }}>
              <Stack
                sx={{
                  bgcolor: "background.paper",
                  boxShadow: "custom.card",
                }}
              >
                <Stack
                  sx={{
                    paddingX: "12px",
                    paddingTop: "12px",
                  }}
                >
                  <Divider>
                    <Typography
                      variant="subtitle2"
                      textTransform="uppercase"
                      color="primary.main"
                    >
                      Miễn phí vận chuyển
                    </Typography>
                  </Divider>
                </Stack>
                <Stack
                  sx={{
                    paddingX: "4px",
                  }}
                >
                  <Stack direction="row" alignItems="center" gap="8px">
                    <img
                      src="https://hasaki.vn/imgs/product/delivery-120-minutes.png"
                      alt=""
                      className="size-[80px]"
                    />
                    <Typography variant="body2">
                      Giao Nhanh Miễn Phí 2H. <strong>Trễ tặng 100K</strong>
                    </Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" gap="8px">
                    <img
                      src="https://hasaki.vn/imgs/product/img_quality_3.png"
                      alt=""
                      className="size-[80px]"
                    />
                    <Typography variant="body2">
                      Hasaki đền bù <strong>100%</strong> hãng đền bù{" "}
                      <strong>100%</strong> nếu phát hiện hàng giả
                    </Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" gap="8px">
                    <img
                      src="https://hasaki.vn/imgs/product/img_quality_2.png"
                      alt=""
                      className="size-[80px]"
                    />
                    <Typography variant="body2">
                      <strong>Giao Hàng Miễn Phí</strong> (từ 90K tại 60 Tỉnh
                      Thành trừ huyện, toàn Quốc từ 249K)
                    </Typography>
                  </Stack>
                  <Stack direction="row" alignItems="center" gap="8px">
                    <img
                      src="https://hasaki.vn/imgs/product/img_quality_44.png"
                      alt=""
                      className="size-[80px]"
                    />
                    <Typography variant="body2">
                      Đổi trả <strong>trong 30 ngày</strong>
                    </Typography>
                  </Stack>
                </Stack>
                <Stack
                  alignItems="center"
                  justifyContent="center"
                  padding="12px 8px"
                  sx={{
                    borderTopWidth: 1,
                    borderColor: "divider",
                    cursor: "pointer",
                  }}
                >
                  <Typography variant="body2">Xem thêm</Typography>
                </Stack>
              </Stack>
              <Stack
                sx={{
                  bgcolor: "background.paper",
                  boxShadow: "custom.card",
                  padding: "12px",
                  gap: "8px",
                }}
              >
                <img src={product.brand?.logo} className="w-full" />
                <Stack direction="row" gap="8px">
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{
                      flex: 1,
                    }}
                  >
                    Theo dõi
                  </Button>
                  <Button
                    variant="outlined"
                    color="common"
                    disableRipple
                    sx={{
                      cursor: "default",
                    }}
                  >
                    120
                  </Button>
                </Stack>
              </Stack>
              <Stack
                sx={{
                  bgcolor: "background.paper",
                  boxShadow: "custom.card",
                  padding: "12px",
                  gap: "8px",
                }}
              >
                <Typography variant="subtitle1">Sản phẩm xem cùng</Typography>
                <Stack gap="8px">
                  {product.recommends?.map((item, index) => (
                    <Stack
                      key={index}
                      sx={{
                        border: "1px solid black",
                        borderColor: "divider",
                        overflow: "hidden",
                        borderRadius: "8px",
                      }}
                    >
                      <ProductCard item={item} />
                    </Stack>
                  ))}
                </Stack>
              </Stack>
              <Stack
                sx={{
                  bgcolor: "background.paper",
                  boxShadow: "custom.card",
                  padding: "12px",
                  gap: "8px",
                  height: "100%",
                }}
              >
                <Typography variant="subtitle1">
                  Sản phẩm cùng thương hiệu
                </Typography>
                <Stack gap="8px">
                  {product.recommends?.map((item, index) => (
                    <Stack
                      key={index}
                      sx={{
                        border: "1px solid black",
                        borderColor: "divider",
                        overflow: "hidden",
                        borderRadius: "8px",
                        flexDirection: "row",
                        padding: "8px",
                        gap: "12px",
                      }}
                    >
                      <Avatar
                        src={item?.images[0]}
                        sx={{
                          height: "100px",
                          width: "100px",
                        }}
                        variant="square"
                      />
                      <Stack>
                        <Typography variant="subtitle1">
                          {item.price}
                        </Typography>
                        <Typography variant="body2">{item.price}</Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {item.name}
                        </Typography>
                      </Stack>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
      {openDialog && (
        <Slide direction="up" in={openDialog}>
          <Alert
            sx={{
              position: "fixed",
              top: "50%",
              left: "50%",
              translate: "-50%",
              zIndex: 10000,
              backgroundColor: "success.lighter",
              borderWidth: "1px",
              borderColor: "success.main",
              borderRadius: "8px",
            }}
            onClick={() => setOpenDialog(false)}
          >
            Sản phẩm đã được thêm vào giỏ hàng
          </Alert>
        </Slide>
      )}
    </>
  );
};

export default ProductDetail;
