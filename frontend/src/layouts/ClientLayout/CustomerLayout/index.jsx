import { Avatar, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import SideBarData from "./sideBarData";

const CustomerLayout = ({ children }) => {
  const { user } = useSelector((store) => store.user);

  return (
    <Grid
      container
      sx={{
        paddingX: "120px",
        paddingTop: "12px",
        paddingBottom: "40px",
        backgroundColor: "background.neutral",
      }}
      spacing="20px"
    >
      <Grid size={3}>
        <Stack
          sx={{
            backgroundColor: "background.paper",
            boxShadow: "custom.card",
          }}
        >
          <Stack
            direction="row"
            gap="12px"
            padding="16px"
            sx={{
              borderBottomWidth: 1,
              borderColor: "divider",
            }}
          >
            <Avatar
              sx={{
                width: 48,
                height: 48,
              }}
            />
            <Stack>
              <Typography variant="subtitle2">
                Chào {user?.first_name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Chỉnh sửa tài khoản
              </Typography>
            </Stack>
          </Stack>
          <Stack
            sx={{
              a: {
                padding: "8px 16px",
                typography: "body2",
                "&:hover": {
                  color: "text.secondary",
                },
                "&.active": {
                  backgroundColor: "background.default",
                  color: "secondary.main",
                  typography: "subtitle2",
                },
              },
            }}
          >
            {SideBarData().map((item) => (
              <Link to={item.src} className={item.active && "active"}>
                {item.title}
              </Link>
            ))}
          </Stack>
        </Stack>
      </Grid>
      <Grid size={9}>
          <Outlet />
      </Grid>
    </Grid>
  );
};

export default CustomerLayout;
