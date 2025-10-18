import { getAllHotDeals } from "@/store/hotDeals/action";
import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HotDealClientPage = () => {
  const dispatch = useDispatch();
  const { hot_deals, loading } = useSelector((store) => store.hotDeals);

  React.useEffect(() => {
    dispatch(getAllHotDeals());
  }, []);

  return (
    <Stack
      sx={{
        paddingX: "120px",
        backgroundColor: "background.neutral",
        paddingBottom: "40px",
      }}
    >
      <Grid
        container
        spacing="20px"
        sx={{
          bgcolor: "background.paper",
          padding: "20px",
          boxShadow: "custom.card",
        }}
      >
        {hot_deals?.map((item) => (
          <Grid size={6} key={item.id}>
            <Link to={"/campaign/" + item.url}>
              <Stack gap="8px">
                <img
                  src={item.banners[0]}
                  alt=""
                  className="w-full h-[240px]"
                />
                <Typography variant="subtitle2">{item.name}</Typography>
              </Stack>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default HotDealClientPage;
