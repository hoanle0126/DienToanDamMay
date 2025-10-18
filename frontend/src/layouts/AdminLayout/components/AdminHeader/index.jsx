import { Icon } from "@iconify/react";
import {
  Avatar,
  Box,
  IconButton,
  MenuItem,
  MenuList,
  Popover,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MuiTheme } from "@/theme";

const AdminHeader = ({ title }) => {
  const [openSetting, setOpenSetting] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box
      component="header"
      sx={{
        backgroundColor: "background.paper",
      }}
      className="h-[80px] flex justify-end items-center px-[40px] gap-[20px]"
    >
      <Stack sx={{ flexDirection: "row", gap: "12px" }}>
        <IconButton>
          <Icon
            icon="solar:chat-line-bold-duotone"
            color={MuiTheme().palette.text.primary}
          />
        </IconButton>
        <IconButton>
          <Icon
            icon="solar:bell-bing-bold-duotone"
            color={MuiTheme().palette.text.primary}
          />
        </IconButton>
        <IconButton onClick={() => setOpenSetting(true)}>
          <Icon
            icon="solar:settings-bold-duotone"
            color={MuiTheme().palette.text.primary}
          />
        </IconButton>
      </Stack>
      <Avatar
        onClick={handleClick}
        sx={{
          overflow: "clip",
          cursor: "pointer",
          color: "text.primary",
        }}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuList
          sx={{
            minWidth: "128px",
            maxWidth: "160px",
          }}
        >
          <MenuItem onClick={() => console.log("")}>
            <Icon icon="solar:user-circle-linear" />
            <Typography variant="body2">Profile</Typography>
          </MenuItem>
          <MenuItem>
            <Icon icon="solar:logout-2-broken" />
            <Typography variant="body2">Logout</Typography>
          </MenuItem>
        </MenuList>
      </Popover>
    </Box>
  );
};

export default AdminHeader;
