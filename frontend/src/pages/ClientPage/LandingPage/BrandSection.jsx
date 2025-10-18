import EmblaCarousel from "@/components/carousel";
import { getAllBrands } from "@/store/brands/action";
import { Box, Grid, Stack, Typography } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const BrandSection = () => {
  const dispatch = useDispatch();
  const { brands } = useSelector((store) => store.brands);

  React.useEffect(() => {
    dispatch(getAllBrands({
      onSuccess: (data) => {},
    }));
  }, []);

  return (
    <Stack
      sx={{
        backgroundColor: "background.paper",
        padding: "16px",
        borderRadius: "16px",
        gap: "8px",
      }}
    >
      <Typography variant="h6" color="primary.main">
        Thương hiệu
      </Typography>
      <Grid container spacing="16px">
        <Grid size={4}>
          <EmblaCarousel
            options={{
              loop: true,
              align: "start",
            }}
            lists={brands}
          >
            {(item) => <img className="size-full" src={item.thumbnail} />}
          </EmblaCarousel>
        </Grid>
        <Grid size={8}>
          <Grid container spacing="16px">
            {brands.slice(0, 8).map((item, index) => (
              <Grid size={3} key={index}>
                <Box
                  sx={{
                    width: "100%",
                    position: "relative",
                    boxShadow: "custom.card",
                    borderRadius: "16px",
                    overflow: "hidden",
                    "&:hover": {
                      boxShadow: "none",
                      border: "1px solid black",
                      borderColor: "grey.0",
                      "& .sub__img": {
                        border: "1px solid black",
                        borderColor: "secondary.main",
                      },
                    },
                  }}
                >
                  <img src={item.thumbnail} className="w-full" />
                  <img
                    src={item.logo}
                    className="sub__img absolute z-[100] bottom-[8px] left-[50%] -translate-x-[50%] w-[110px] h-[55px] rounded-[16px]"
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default BrandSection;
