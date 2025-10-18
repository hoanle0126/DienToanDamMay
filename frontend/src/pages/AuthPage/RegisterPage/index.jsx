import { Icon } from "@iconify/react";
import {
  Box,
  Button,
  ButtonBase,
  Checkbox,
  Dialog,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const RegisterPage = ({ open, handleClose, navigate }) => {
  return (
    <Dialog
        onClose={handleClose}
      open={open}
      sx={{
        "& .MuiPaper-root.MuiPaper-elevation": {
          borderRadius: 0,
          width: 400,
          position: "relative",
          a: {
            color: "info.main",
          },
        },
      }}
    >
      <ButtonBase
        onClick={handleClose}
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          bgcolor: "text.secondary",
          color: "background.paper",
          padding: "4px",
        }}
      >
        <Icon icon="eva:close-fill" width="24" height="24" />
      </ButtonBase>
      <Stack sx={{ width: "100%" }}>
        <Stack
          sx={{
            padding: "20px",
            borderBottomWidth: 1,
            borderColor: "divider",
            gap: "12px",
          }}
        >
          <Typography variant="body2">Đăng ký tài khoản</Typography>
          <Stack
            gap="12px"
            sx={{
              width: "100%",
            }}
          >
            {/* Email */}
            <Stack
              sx={{
                borderWidth: 1,
                borderColor: "divider",
                padding: "4px 12px",
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <input
                className="focus:outline-none text-[13px] placeholder:text-[13px] flex-1"
                placeholder="Nhập email hoặc số điện thoại"
              />
              <Icon icon="solar:letter-linear" width="16" height="16" />
            </Stack>
            {/* Email */}
            {/* Mã xác nhận */}
            <Stack
              sx={{
                borderWidth: 1,
                borderColor: "divider",
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
              }}
            >
              <input
                className="focus:outline-none text-[13px] placeholder:text-[13px] flex-1 px-[12px]"
                placeholder="Nhập mã xác nhận 6 chữ số"
              />
              <Button disabled variant="contained">
                Lấy mã
              </Button>
            </Stack>
            {/* Mã xác nhận */}
            {/* Mật khẩu */}
            <Stack
              sx={{
                borderWidth: 1,
                borderColor: "divider",
                padding: "4px 12px",
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <input
                className="focus:outline-none text-[13px] placeholder:text-[13px] flex-1"
                placeholder="Nhập mật khẩu từ 6 - 32 ký tự"
              />
              <Icon icon="solar:lock-bold" width="16" height="16" />
            </Stack>
            {/* Mật khẩu */}
            {/* Họ tên */}
            <Stack
              sx={{
                borderWidth: 1,
                borderColor: "divider",
                padding: "4px 12px",
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <input
                className="focus:outline-none text-[13px] placeholder:text-[13px] flex-1"
                placeholder="Họ tên"
              />
              <Icon icon="solar:user-bold" width="16" height="16" />
            </Stack>
            {/* Họ tên */}
            {/* Giới tính */}
            <FormControl sx={{ paddingX: "12px" }}>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                sx={{
                  gap: "12px",
                }}
              >
                <FormControlLabel
                  value="male"
                  control={<Radio size="small" sx={{ padding: 0 }} />}
                  label={<Typography variant="body2">Nam</Typography>}
                  sx={{
                    gap: "4px",
                  }}
                />
                <FormControlLabel
                  value="female"
                  control={<Radio size="small" sx={{ padding: 0 }} />}
                  label={<Typography variant="body2">Nữ</Typography>}
                  sx={{
                    gap: "4px",
                  }}
                />
              </RadioGroup>
            </FormControl>
            {/* Giới tính */}
            {/* Ngày sinh */}
            <Stack
              sx={{
                select: {
                  borderColor: "divider",
                  flex: 1,
                  fontSize: 13,
                  padding: "4px 8px",
                  option: {
                    fontSize: 13,
                  },
                },
                flexDirection: "row",
                gap: "12px",
              }}
            >
              <select className="border focus:outline-none" value={0}>
                <option value={0}>Ngày</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
              <select className="border focus:outline-none" value={1}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
              <select className="border focus:outline-none" value={1}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
            </Stack>
            {/* Ngày sinh */}
            {/* Điều khoản */}
            <Stack
              sx={{
                flexDirection: "row",
                width: "100%",
                alignItems: "start",
                gap: "4px",
              }}
            >
              <Checkbox size="small" sx={{ padding: 0 }} />
              <Typography variant="captiontext">
                Tôi đã đọc và đồng ý với{" "}
                <a href="#">Điều kiện giao dịch chung</a> và{" "}
                <a>Chính sách bảo mật thông tin</a> của Hasaki
              </Typography>
            </Stack>
            <Stack
              sx={{
                flexDirection: "row",
                width: "100%",
                alignItems: "start",
                gap: "4px",
              }}
            >
              <Checkbox size="small" sx={{ padding: 0 }} />
              <Typography variant="captiontext">
                Nhận thông tin khuyến mãi qua e-mail
              </Typography>
            </Stack>
            <Stack
              sx={{
                flexDirection: "row",
                width: "100%",
                alignItems: "start",
                gap: "4px",
              }}
            >
              <Checkbox size="small" sx={{ padding: 0 }} />
              <Typography variant="captiontext">
                Tôi đồng ý với <a>chính sách xử lý dữ liệu cá nhân</a> của
                Hasaki
              </Typography>
            </Stack>
            {/* Điều khoản */}
            <Button
              size="large"
              variant="contained"
              sx={{ borderRadius: "99px" }}
            >
              Đăng ký
            </Button>
          </Stack>
        </Stack>
        {/* Đã có tài khoản */}
        <Stack
          sx={{
            borderTopWidth: 1,
            padding: "12px 16px",
            paddingBottom: "16px",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              span: {
                color: "primary.main",
                textTransform: "uppercase",
                cursor: "pointer",
              },
            }}
          >
            Bạn đã có tài khoản?{" "}
            <span onClick={() => navigate("dang-nhap")}>Đăng nhập</span>
          </Typography>
          <Typography variant="body2">Hoặc đăng nhập với</Typography>
          <Stack direction="row" gap="12px" paddingTop="4px">
            <ButtonBase
              sx={{
                flex: 1,
              }}
            >
              <img
                src="https://hasaki.vn/images/graphics/img_login_fb_2.jpg"
                className="w-full"
              />
            </ButtonBase>
            <ButtonBase
              sx={{
                flex: 1,
              }}
            >
              <img
                src="https://hasaki.vn/images/graphics/img_login_gg_2.jpg"
                className="w-full"
              />
            </ButtonBase>
          </Stack>
        </Stack>
        {/* Đã có tài khoản */}
      </Stack>
    </Dialog>
  );
};

export default RegisterPage;
