import AdminDefaultLayout from "@/layouts/AdminLayout/DefaultLayout";
import { deleteHotDeal, getAllHotDeals } from "@/store/hotDeals/action";
import { Icon } from "@iconify/react";
import { Button, Grid, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HotDealsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { hot_deals, loading } = useSelector((store) => store.hotDeals);

  React.useEffect(() => {
    dispatch(getAllHotDeals());
  }, []);

  React.useEffect(() => {
    console.log(hot_deals);
  }, [loading]);

  return (
    <AdminDefaultLayout
      title="Hot Deals"
      action={
        <Button
          variant="contained"
          color="common"
          onClick={() => {
            navigate("create");
          }}
        >
          Add Deals
        </Button>
      }
    >
      <Grid container spacing="20px">
        {hot_deals?.map((item, index) => (
          <Grid size={6} key={index}>
            <Stack gap="12px">
              <img className="w-full h-[200px]" src={item.banners[0]} />
              <Stack direction="row" alignItems="start">
                <Typography variant="subtitle1" flex={1}>
                  {item.name}
                </Typography>
                <IconButton
                  color="primary.main"
                  onClick={() => navigate("" + item.id)}
                >
                  <Icon icon="solar:pen-2-bold" width="24" height="24" />
                </IconButton>
                <IconButton
                  color="primary.main"
                  onClick={() => dispatch(deleteHotDeal(item.id))}
                >
                  <Icon
                    icon="solar:trash-bin-minimalistic-linear"
                    width="24"
                    height="24"
                  />
                </IconButton>
              </Stack>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </AdminDefaultLayout>
  );
};

export default HotDealsPage;
