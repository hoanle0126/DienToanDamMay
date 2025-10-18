/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
  Stack,
  Typography,
  Grid,
  Breadcrumbs,
  Button,
  Radio,
  IconButton,
  ButtonBase,
  Avatar,
  OutlinedInput,
} from "@mui/material";
import React from "react";
import { MuiTheme } from "@/Theme";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { formatCurrency } from "@/Function/formatCurrency";
import { useDispatch, useSelector } from "react-redux";
import { sumPrice } from "../CartPage";
import { useStateContext } from "@/Context";
import SelectAddressModal from "../CartPage/components/SelectAddressModal";
import PaymentTypeModal from "./PaymentTypeModal";
import { addOrder } from "@/store/users/action";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const { addressCheckout } = useStateContext();
  const [openAddressModal, setOpenAddressModal] = React.useState(false);
  const [openPaymentTypeModal, setOpenPaymentTypeModal] = React.useState(false);
  const [card, setCard] = React.useState(null);
  const [checkoutForm, setCheckoutForm] = React.useState({
    payment: { name: "Thanh toán khi nhận hàng", type: "offline" },
    note: "",
    products: [],
    address_id: addressCheckout.id,
  });

  React.useEffect(() => {
    setCheckoutForm({ ...checkoutForm, products: user.cart });
  }, [user.cart]);

  React.useEffect(() => {
    const loadSquare = async () => {
      if (!window.Square) {
        console.error("Square SDK chưa được tải.");
        return;
      }

      try {
        const paymentsInstance = window.Square.payments(
          import.meta.env.VITE_SQUARE_APPLICATION_ID,
          import.meta.env.VITE_SQUARE_LOCATION_ID
        );

        const cardInstance = await paymentsInstance.card();
        await cardInstance.attach("#card-container");
        setCard(cardInstance);
      } catch (error) {
        console.error("Square Payments failed to load", error);
      }
    };

    loadSquare();
  }, [checkoutForm.payment.type]);

  const handlePayment = async () => {
    try {
      console.log("Token");
      const result = await card.tokenize();
      console.log(result);
      if (result.status === "OK") {
        const token = result.token;
        console.log("Token", token);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Grid
      sx={{
        paddingBottom: "40px",
        paddingX: "120px",
        bgcolor: "background.neutral",
        paddingTop: "20px",
      }}
      container
      spacing="20px"
    >
      <Grid size={8}>
        <Stack
          sx={{
            gap: "20px",
          }}
        >
          {/* Địa chỉ nhận hàng */}
          <Stack
            gap="8px"
            sx={{
              padding: "20px",
              bgcolor: "background.paper",
              borderRadius: "20px",
              boxShadow: "custom.card",
            }}
          >
            <Typography id="modal-modal-title" variant="h6">
              Địa chỉ nhận hàng
            </Typography>
            <Stack direction="row" alignItems="center" gap="12px">
              <Stack alignItems="start" gap="4px" flex={1}>
                <Typography variant="subtitle2">
                  {addressCheckout.name} - {addressCheckout.phone}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {addressCheckout.street_address}, {addressCheckout.ward},{" "}
                  {addressCheckout.district},{addressCheckout.province}
                </Typography>
              </Stack>
              <Button onClick={() => setOpenAddressModal(true)}>
                Thay đổi
              </Button>
            </Stack>
          </Stack>
          {/*  */}
          {/* Hình thức thanh toán */}
          <Stack
            gap="8px"
            sx={{
              padding: "20px",
              bgcolor: "background.paper",
              borderRadius: "20px",
              boxShadow: "custom.card",
            }}
          >
            <Typography id="modal-modal-title" variant="h6">
              Hình thức thanh toán
            </Typography>
            <Stack direction="row" alignItems="center" gap="12px">
              <Radio
                sx={{
                  padding: 0,
                }}
                size="small"
                checked
              />
              <Stack flex={1}>
                <Stack direction="row" alignItems="center" gap="12px">
                  <Icon
                    icon={
                      checkoutForm.payment.type === "offline"
                        ? "streamline-ultimate-color:cash-payment-bills-1"
                        : "logos:visaelectron"
                    }
                    width="24"
                    height="24"
                  />
                  <Typography>{checkoutForm.payment.name}</Typography>
                </Stack>
              </Stack>
              <Button onClick={() => setOpenPaymentTypeModal(true)}>
                Thay đổi
              </Button>
            </Stack>
            {String(checkoutForm.payment.type) === "online" && (
              <Stack gap="20px">
                <div id="card-container"></div>
              </Stack>
            )}
          </Stack>
          {/*  */}
          {/* Phiếu mua hàng */}
          <Stack
            gap="8px"
            sx={{
              padding: "20px",
              bgcolor: "background.paper",
              borderRadius: "20px",
              boxShadow: "custom.card",
            }}
          >
            <Stack direction="row" alignItems="center">
              <Typography id="modal-modal-title" variant="h6" flex={1}>
                Phiếu mua hàng
              </Typography>
              <Button>Chọn phiếu mua hàng</Button>
            </Stack>
          </Stack>
          {/*  */}
          {/* Mã giảm giá */}
          <Stack
            gap="8px"
            sx={{
              padding: "20px",
              bgcolor: "background.paper",
              borderRadius: "20px",
              boxShadow: "custom.card",
            }}
          >
            <Stack direction="row" alignItems="center">
              <Typography id="modal-modal-title" variant="h6" flex={1}>
                Mã giảm giá
              </Typography>
              <Button>Nhập mã giảm giá</Button>
            </Stack>
          </Stack>
          {/*  */}
          {/* Thông tin kiện hàng */}
          <Stack
            gap="8px"
            sx={{
              padding: "20px",
              bgcolor: "background.paper",
              borderRadius: "20px",
              boxShadow: "custom.card",
            }}
          >
            <Typography id="modal-modal-title" variant="h6" flex={1}>
              Thông tin kiện hàng
            </Typography>
            <Stack gap="12px">
              {checkoutForm.products?.map((item, index) => (
                <Stack
                  key={index}
                  direction="row"
                  alignItems="end"
                  height="76px"
                  gap="12px"
                  paddingY="4px"
                  sx={{
                    "&:not(:first-child)": {
                      borderTopWidth: 1,
                      borderColor: "divider",
                    },
                  }}
                >
                  <Avatar
                    variant="rounded"
                    sx={{
                      width: "68px",
                      height: "68px",
                    }}
                    src={item.thumbnail}
                  />
                  <Stack sx={{ height: "100%", flex: 1 }}>
                    <Typography variant="subtitle2">
                      {item.brand.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        flex: 1,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "normal",
                        wordBreak: "break-word",
                        width: "100%",
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Stack>
                  <Typography variant="body2">{item.quantity_cart}</Typography>
                  <Typography>x</Typography>
                  <Typography variant="subtitle2">
                    {formatCurrency(item.price)}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Stack>
          {/*  */}
          {/* Ghi chú  */}
          <Stack
            gap="8px"
            sx={{
              padding: "20px",
              bgcolor: "background.paper",
              borderRadius: "20px",
              boxShadow: "custom.card",
            }}
          >
            <Grid container columnSpacing="20px" rowSpacing="12px">
              <Grid size={6}>
                <OutlinedInput
                  value={checkoutForm.note}
                  onChange={(e) =>
                    setCheckoutForm({ ...checkoutForm, note: e.target.value })
                  }
                  fullWidth
                  multiline
                  minRows={2}
                />
              </Grid>
              <Grid size={6}>
                <Stack
                  sx={{
                    height: "100%",
                  }}
                >
                  <Stack direction="row">
                    <Typography>Tổng tiền</Typography>
                    <div className="flex-1"></div>
                    <Typography>
                      {formatCurrency(sumPrice(user.cart))}
                    </Typography>
                  </Stack>
                  <div className="flex-1"></div>
                  <Button
                    fullWidth
                    size="large"
                    variant="contained"
                    sx={{
                      borderRadius: "40px",
                    }}
                    onClick={() => handlePayment()}
                  >
                    Đặt hàng
                  </Button>
                </Stack>
              </Grid>
              <Grid size={12}>
                <Typography variant="body2">
                  Nhấn "Đặt hàng" đồng nghĩa việc bạn đồng ý tuân theo Chính
                  sách xử lý dữ liệu cá nhân&Điều khoản Hasaki
                </Typography>
              </Grid>
            </Grid>
          </Stack>
          {/*  */}
        </Stack>
      </Grid>
      <Grid size={4}>
        <Stack
          sx={{
            backgroundColor: "background.paper",
            padding: "20px",
            gap: "12px",
            position: "sticky",
            top: 100,
            borderRadius: "20px",
          }}
        >
          <Button
            size="large"
            variant="contained"
            sx={{
              borderRadius: "40px",
            }}
            onClick={async() => {
              await dispatch(addOrder(checkoutForm));
              alert("success")
            }}
          >
            Đặt hàng
          </Button>
          <Stack
            direction="row"
            sx={{
              padding: "12px 20px",
              backgroundColor: "background.neutral",
              borderRadius: "40px",
            }}
          >
            <Typography flex={1}>Thông tin xuất hóa đơn</Typography>
            <Typography color="info.main">Nhập</Typography>
          </Stack>
          <Stack
            width="100%"
            sx={{
              borderBottomWidth: 1,
              paddingBottom: "12px",
              borderColor: "divider",
            }}
          >
            <Stack
              direction="row"
              width="100%"
              alignItems="center"
              paddingY="12px"
            >
              <Typography variant="h6">Đơn hàng</Typography>
              <div className="flex-1"></div>
              <Link to={-1}>
                <Typography color="info.main">Thay đổi</Typography>
              </Link>
            </Stack>
            <Stack direction="row" width="100%" alignItems="center">
              <Typography color="text.secondary">Tạm tính</Typography>
              <div className="flex-1"></div>
              <Typography>{formatCurrency(sumPrice(user.cart))}</Typography>
            </Stack>
            <Stack direction="row" width="100%" alignItems="center">
              <Typography color="text.secondary">Giảm giá</Typography>
              <div className="flex-1"></div>
              <Typography>{formatCurrency(0)}</Typography>
            </Stack>
            <Stack direction="row" width="100%" alignItems="center">
              <Typography color="text.secondary">Phí vận chuyển</Typography>
              <div className="flex-1"></div>
              <Typography>{formatCurrency(0)}</Typography>
            </Stack>
            <Stack
              direction="row"
              width="100%"
              alignItems="center"
              paddingTop="12px"
            >
              <Typography color="text.secondary">
                Thành tiền (Đã VAT)
              </Typography>
              <div className="flex-1"></div>
              <Typography variant="h6" color="error.main">
                {formatCurrency(sumPrice(user.cart))}
              </Typography>
            </Stack>
          </Stack>
          <Typography variant="captiontext" textAlign="center">
            Đã bao gồm VAT, phí đóng gói, phí vận chuyển và các chi phí khác vui
            lòng xem Chính sách vận chuyển
          </Typography>
        </Stack>
      </Grid>
      <SelectAddressModal
        open={openAddressModal}
        handleClose={() => setOpenAddressModal(false)}
      />
      <PaymentTypeModal
        open={openPaymentTypeModal}
        handleClose={() => setOpenPaymentTypeModal(false)}
        action={(value) => {
          setCheckoutForm({ ...checkoutForm, payment: value });
        }}
      />
    </Grid>
  );
};

export default CheckoutPage;
