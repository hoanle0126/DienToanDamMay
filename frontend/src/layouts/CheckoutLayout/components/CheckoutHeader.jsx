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
  Divider,
  Popover,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const CheckoutHeader = () => {
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
        padding: "28px 120px",
        flexDirection: "row",
        gap: "20px",
      }}
      position="sticky"
    >
      <Link to="/">
        <img
          src="https://media.hcdn.vn/hsk/icon/logo_site_v2.png?v=2025061316"
          className="h-[42px] w-[180px]"
        />
      </Link>
      <Stack
        sx={{
          height: 42,
          paddingLeft: "20px",
          justifyContent: "center",
          borderLeftWidth: 1,
        }}
      >
        <Typography fontSize="h6.fontSize">Thanh toán</Typography>
      </Stack>
    </AppBar>
  );
};

export default CheckoutHeader;
