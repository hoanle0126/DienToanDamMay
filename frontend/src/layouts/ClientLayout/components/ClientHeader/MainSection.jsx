import LoginPage from "@/pages/AuthPage/LoginPage";
import RegisterPage from "@/pages/AuthPage/RegisterPage";
import { logout } from "@/store/users/action";
import { MuiTheme } from "@/theme";
import { Icon } from "@iconify/react";
import {
  AppBar,
  Badge,
  Button,
  ButtonBase,
  Popover,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const MainSection = () => {
  const [openAuthEl, setOpenAuthEl] = React.useState(null);
  const [openUserEl, setOpenUserEl] = React.useState(null);
  const [openLogin, setOpenLogin] = React.useState(false);
  const { user, loading } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <AppBar
      sx={{
        boxShadow: "none",
        top: 0,
        left: 0,
      }}
      position="sticky"
    >
      <Stack
        sx={{
          paddingX: "120px",
          backgroundColor: "#084322",
        }}
        onClick={() => navigate("/")}
      >
        <img
          src="https://media.hcdn.vn/hsk/1749726223top14156.jpg"
          width="100%"
          height="50px"
        />
      </Stack>
      <Stack
        direction="row"
        sx={{
          alignItems: "end",
          height: "84px",
          paddingX: "120px",
          gap: "24px",
          paddingBottom: "16px",
        }}
      >
        <Link to="/">
          <img
            src="https://media.hcdn.vn/hsk/icon/logo_site_v2.png?v=2025061316"
            className="h-[42px] w-[180px]"
          />
        </Link>
        <Stack gap="4px" flex={1}>
          <Stack direction="row" gap="12px">
            {[
              "Kem chống nắng",
              "Tẩy trang",
              "Sửa rửa mặt",
              "Tẩy tế bào chết",
              "Kem chống nắng Sunplay",
            ].map((item, index) => (
              <Typography
                key={index}
                variant="captiontext"
                color="background.paper"
              >
                {item}
              </Typography>
            ))}
          </Stack>
          <Stack
            sx={{
              flexDirection: "row",
              width: "100%",
              height: "36px",
              backgroundColor: "#fff",
              borderRadius: "36px",
              alignItems: "center",
              paddingRight: "8px",
            }}
          >
            <TextField
              placeholder="Tìm sản phẩm, thương hiệu bạn mong muốn..."
              sx={{
                flex: 1,
                "& input::placeholder": {
                  fontSize: "12px",
                },
                "& input": {
                  fontSize: "12px",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                  },
                  "&:hover fieldset": {
                    border: "none",
                  },
                  "&.Mui-focused fieldset": {
                    border: "none",
                  },
                },
              }}
            />
            <Icon
              icon="eva:search-fill"
              width="32"
              height="32"
              color={MuiTheme().palette.primary.main}
            />
          </Stack>
        </Stack>
        {/* Đăng nhập / Đăng ký */}
        <Stack
          direction="row"
          gap="12px"
          alignItems="center"
          onClick={(e) =>
            user.email
              ? setOpenUserEl(e.currentTarget)
              : setOpenAuthEl(e.currentTarget)
          }
        >
          <Icon icon="solar:user-circle-outline" width="32" height="32" />
          {user.first_name ? (
            <Stack>
              <Typography variant="captiontext">
                Chào {user.first_name}
              </Typography>
              <Stack direction="row" alignItems="center">
                <Typography variant="captiontext">Tài khoản</Typography>
                <Icon icon="solar:alt-arrow-down-bold" width="18" height="18" />
              </Stack>
            </Stack>
          ) : (
            <Stack>
              <Typography variant="captiontext">Đăng nhập / Đăng ký</Typography>
              <Stack direction="row" alignItems="center">
                <Typography variant="captiontext">Tài khoản</Typography>
                <Icon icon="solar:alt-arrow-down-bold" width="18" height="18" />
              </Stack>
            </Stack>
          )}
        </Stack>
        {/* Đăng nhập / Đăng ký */}
        <Stack direction="row" gap="12px" alignItems="center">
          <Icon icon="solar:shop-linear" width="32" height="32" />
          <Stack>
            <Typography variant="captiontext">Hệ thống</Typography>
            <Typography variant="captiontext">cửa hàng</Typography>
          </Stack>
        </Stack>
        <Stack direction="row" gap="12px" alignItems="center">
          <Icon icon="solar:shield-check-bold" width="32" height="32" />
          <Stack>
            <Typography variant="captiontext">Bảo</Typography>
            <Typography variant="captiontext">hành</Typography>
          </Stack>
        </Stack>
        <Stack direction="row" gap="12px" alignItems="center">
          <Icon icon="solar:phone-bold" width="32" height="32" />
          <Stack>
            <Typography variant="captiontext">Hỗ trợ</Typography>
            <Typography variant="captiontext">khách hàng</Typography>
          </Stack>
        </Stack>
        <Stack justifyContent="end" height="100%">
          <Link to="/checkout/cart">
            <Badge badgeContent={user.cart?.length || 0} color="error">
              <Icon
                icon="solar:cart-large-minimalistic-linear"
                width="32"
                height="32"
              />
            </Badge>
          </Link>
        </Stack>
      </Stack>
      <Popover
        open={Boolean(openAuthEl)}
        anchorEl={openAuthEl}
        onClose={() => setOpenAuthEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Stack>
          <Stack
            padding="12px 20px"
            gap="4px"
            borderBottom="1px solid black"
            borderColor="divider"
          >
            <Typography variant="body2" color="text.secondary">
              Đăng nhập với
            </Typography>
            <Stack direction="row" gap="12px">
              <ButtonBase>
                <img
                  src="https://hasaki.vn/images/graphics/img_login_fb.jpg"
                  alt=""
                />
              </ButtonBase>
              <ButtonBase>
                <img
                  src="https://hasaki.vn/images/graphics/img_login_gg.jpg"
                  alt=""
                />
              </ButtonBase>
            </Stack>
          </Stack>
          <Stack
            paddingX="20px"
            paddingY="8px"
            gap="12px"
            alignItems="center"
            sx={{
              span: {
                color: "primary.main",
                textTransform: "uppercase",
                cursor: "pointer",
              },
            }}
          >
            <Typography variant="body2">
              Hoặc đăng nhập với Hasaki.vn
            </Typography>
            <Button
              fullWidth
              variant="contained"
              onClick={() => setOpenLogin("dang-nhap")}
            >
              Đăng nhập
            </Button>
            <Typography variant="body2">
              Bạn chưa có tài khoản?{" "}
              <span onClick={() => setOpenLogin("dang-ki")}>Đăng kí ngay</span>
            </Typography>
          </Stack>
        </Stack>
      </Popover>
      <Popover
        open={Boolean(openUserEl)}
        anchorEl={openUserEl}
        onClose={() => setOpenUserEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Stack
          sx={{
            padding: "12px",
            minWidth: 240,
            gap: "8px",
            "& .MuiStack-root": {
              cursor: "pointer",
              "&:hover": {
                color: "text.secondary",
              },
            },
          }}
        >
          <Link to="/customer/account/index">
            <Stack direction="row" alignItems="center" gap="8px">
              <Icon icon="solar:user-circle-linear" width={20} height={20} />
              <Typography variant="body2">Tài khoản của bạn</Typography>
            </Stack>
          </Link>
          <Link to="/customer/order/history">
            <Stack direction="row" alignItems="center" gap="8px">
              <Icon icon="solar:reorder-outline" width={20} height={20} />
              <Typography variant="body2">Quản lí đơn hàng</Typography>
            </Stack>
          </Link>
          <Link to="/customer/wishlist/index">
            <Stack direction="row" alignItems="center" gap="8px">
              <Icon icon="solar:heart-linear" width={20} height={20} />
              <Typography variant="body2">Sản phẩm yêu thích</Typography>
            </Stack>
          </Link>
          <Link to="/customer/address/index">
            <Stack direction="row" alignItems="center" gap="8px">
              <Icon icon="solar:map-point-linear" width={20} height={20} />
              <Typography variant="body2">Địa chỉ giao hàng</Typography>
            </Stack>
          </Link>
          <Stack
            direction="row"
            alignItems="center"
            gap="8px"
            onClick={() => dispatch(logout())}
          >
            <Icon icon="solar:logout-2-linear" width={20} height={20} />
            <Typography variant="body2">Thoát</Typography>
          </Stack>
        </Stack>
      </Popover>
      {openLogin === "dang-nhap" && (
        <LoginPage
          open={openLogin}
          handleClose={() => setOpenLogin(false)}
          navigate={(url) => setOpenLogin(url)}
        />
      )}
      {openLogin === "dang-ki" && (
        <RegisterPage
          open={openLogin}
          handleClose={() => setOpenLogin(false)}
          navigate={(url) => setOpenLogin(url)}
        />
      )}
    </AppBar>
  );
};

export default MainSection;
