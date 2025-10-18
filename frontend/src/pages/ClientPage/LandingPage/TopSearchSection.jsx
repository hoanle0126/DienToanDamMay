import { MuiTheme } from "@/theme";
import { alpha, Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const TopSearchSection = () => {
  const { categoriesChildren } = useSelector((store) => store.categories);

  return (
    <Stack
      sx={{
        gap: "8px",
      }}
    >
      <Typography variant="h6" color="primary.main">
        Top Tìm kiếm
      </Typography>
      <Grid container spacing="20px">
        {categoriesChildren
          .sort((a, b) => b.search_count - a.search_count)
          .slice(0, 4)
          .map((item, index) => (
            <Grid size={3} key={index}>
              <Stack
                sx={{
                  width: "100%",
                  flexDirection: "row",
                  backgroundColor: "background.paper",
                  borderRadius: "16px",
                  boxShadow: "custom.card",
                  overflow: "hidden",
                  height: "210px",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                  }}
                >
                  <img
                    src={item.thumbnail}
                    alt=""
                    className="aspect-square size-full"
                  />
                  <Stack
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      paddingLeft: "12px",
                      paddingY: "4px",
                      zIndex: 100,
                      width: "100%",
                      backgroundColor: alpha(
                        MuiTheme().palette.background.paper,
                        0.9
                      ),
                    }}
                  >
                    <Typography variant="body2">{item.name}</Typography>
                    <Typography variant="captiontext" color="text.secondary">
                      {item.product_count} sản phẩm
                    </Typography>
                  </Stack>
                </Box>
                <Stack
                  sx={{
                    height: "100%",
                    flex: 1,
                    img: {
                      borderLeft: "1px solid black",
                      borderColor: "divider",
                      "&:first-child": {
                        borderBottomWidth: "1px",
                      },
                    },
                  }}
                >
                  {item.products?.map((img, idx) => (
                    <img
                      key={idx}
                      src={img.thumbnail}
                      alt=""
                      className="flex-1"
                    />
                  ))}
                </Stack>
              </Stack>
            </Grid>
          ))}
      </Grid>
    </Stack>
  );
};

export default TopSearchSection;
