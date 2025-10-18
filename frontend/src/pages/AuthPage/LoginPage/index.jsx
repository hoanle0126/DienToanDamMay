import { Icon } from "@iconify/react";
import {
  Button,
  ButtonBase,
  Checkbox,
  Dialog,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import RegisterPage from "../RegisterPage";
import { useDispatch } from "react-redux";
import { login } from "@/store/users/action";

const LoginPage = ({ open, handleClose, navigate }) => {
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      sx={{
        "& .MuiPaper-root.MuiPaper-elevation": {
          borderRadius: 0,
          width: 400,
        },
      }}
      component="form"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(login(form));
      }}
    >
      <ButtonBase
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          bgcolor: "text.secondary",
          color: "background.paper",
          padding: "4px",
        }}
        onClick={handleClose}
      >
        <Icon icon="eva:close-fill" width="24" height="24" />
      </ButtonBase>
      <Stack sx={{ width: "100%" }}>
        <Stack
          sx={{
            padding: "20px",
            borderBottomWidth: 1,
            borderColor: "divider",
          }}
        >
          <Typography variant="body2">Đăng nhập với</Typography>
          <Stack direction="row" gap="12px">
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
        <Stack
          sx={{
            padding: "8px 20px",
            paddingBottom: "12px",
            borderBottomWidth: 1,
            borderColor: "divider",
            alignItems: "center",
            gap: "8px",
            width: "100%",
          }}
        >
          <Typography variant="body2">Hoặc đăng nhập với Hasaki.vn</Typography>
          <Stack
            gap="12px"
            sx={{
              width: "100%",
            }}
          >
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
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <Icon icon="solar:letter-linear" width="16" height="16" />
            </Stack>
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
                placeholder="Nhập mật khẩu"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
              <Icon icon="solar:lock-bold" width="16" height="16" />
            </Stack>
            <Stack
              sx={{
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <Checkbox size="small" sx={{ padding: 0 }} />
              <Typography variant="body2">Nhớ mật khẩu</Typography>
              <div className="flex-1"></div>
              <Typography variant="body2">Quên mật khẩu</Typography>
            </Stack>
            <Button
              size="large"
              variant="contained"
              sx={{ borderRadius: "99px" }}
              type="submit"
            >
              Đăng nhập
            </Button>
            <Typography
              sx={{
                ".sign-up": {
                  textTransform: "uppercase",
                  color: "primary.main",
                },
              }}
              variant="body2"
            >
              Bạn chưa có tài khoản?{" "}
              <span
                className="sign-up cursor-pointer"
                onClick={() => {
                  navigate("dang-ki");
                }}
              >
                Đăng kí ngay
              </span>
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default LoginPage;
