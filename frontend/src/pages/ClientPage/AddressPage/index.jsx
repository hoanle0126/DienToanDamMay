import CustomerLayout from "@/layouts/ClientLayout/CustomerLayout";
import { deleteAddress, showAddress } from "@/store/users/action";
import { Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const AddressPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);

  return (
    <Stack
      sx={{
        bgcolor: "background.paper",
        width: "100%",
        padding: "16px",
        gap: "12px",
      }}
    >
      <Typography variant="h6">Sổ địa chỉ</Typography>
      <Grid container spacing="20px">
        {user.address?.map((item, index) => (
          <Grid size={6} key={index}>
            <Stack
              sx={{
                borderWidth: 1,
                borderStyle: item.default ? "solid" : "dashed",
                borderColor: "text.secondary",
                padding: "8px",
                gap: "4px",
              }}
            >
              <Stack direction="row" gap="4px">
                <Typography variant="subtitle2">{item.name}</Typography>
                <Typography variant="body2">-</Typography>
                <Typography variant="body2">0{item.phone}</Typography>
                <div className="flex-1"></div>
                <Typography
                  className="cursor-pointer"
                  variant="body2"
                  onClick={async () => {
                    await dispatch(showAddress(item.id));
                    navigate("/customer/address/edit/" + item.id);
                  }}
                >
                  Chỉnh sửa
                </Typography>
                <Typography
                  className="cursor-pointer"
                  variant="body2"
                  onClick={async () => {
                    await dispatch(deleteAddress(item.id));
                    // navigate("/customer/address/edit/" + item.id);
                  }}
                >
                  Xóa
                </Typography>
              </Stack>
              <Typography variant="body2">
                {item.street_address}, {item.ward}, {item.district},
                {item.province}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
      <Stack
        sx={{
          flexDirection: "row",
          paddingTop: "20px",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Typography variant="body2">
          Bạn muốn giao hàng đến địa chỉ khác?
        </Typography>
        <Button
          variant="contained"
          sx={{
            borderRadius: "20px",
          }}
          onClick={() => navigate("/customer/address/new")}
        >
          Thêm địa chỉ mới
        </Button>
      </Stack>
    </Stack>
  );
};

export default AddressPage;
