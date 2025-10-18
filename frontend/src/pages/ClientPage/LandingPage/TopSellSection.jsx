import { MuiTheme } from "@/theme";
import { alpha, Box, Grid, Stack, Typography } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";

const TopSellSection = () => {
  const [listTopSellRef] = useEmblaCarousel();

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
        Bán chạy
      </Typography>
      <div className="embla">
        <div className="embla__viewport" ref={listTopSellRef}>
          <div className="embla__container">
            {[
              {
                src: "https://media.hcdn.vn/catalog/category/hsk-cate-sua-rua-mat-c19-250x250_img_250x250_8e0796_fit_center.jpg",
                name: "Sửa rửa mặt",
                sold: "8.921M",
              },
              {
                src: "https://media.hcdn.vn/catalog/category/48_1_img_250x250_8e0796_fit_center.jpg",
                name: "Tẩy trang Mặt",
                sold: "8.921M",
              },
              {
                src: "https://media.hcdn.vn/catalog/category/chong-nang-da-mat-c11_img_250x250_8e0796_fit_center.jpg",
                name: "Chống nắng da mặt",
                sold: "8.921M",
              },
              {
                src: "https://media.hcdn.vn/catalog/category/9_1_img_250x250_8e0796_fit_center.jpg",
                name: "Kem / Gel / Dầu dưỡng",
                sold: "8.921M",
              },
              {
                src: "https://media.hcdn.vn/catalog/category/cover-image-category-serum-tinh-chat-250x250_img_250x250_8e0796_fit_center.jpg",
                name: "Serum / Tinh chất",
                sold: "8.921M",
              },
              {
                src: "https://media.hcdn.vn/catalog/category/mat-na-giay-c31_img_250x250_8e0796_fit_center.jpg",
                name: "Mặt nạ giấy",
                sold: "8.921M",
              },
              {
                src: "https://media.hcdn.vn/catalog/category/1857_1_img_250x250_8e0796_fit_center.jpg",
                name: "Toner / Nước cân bằng da",
                sold: "8.921M",
              },
            ].map((item, index) => (
              <Box
                sx={{
                  flex: "0 0 calc(100%/6)",
                  paddingLeft: "16px",
                }}
                key={index}
              >
                <Box
                  sx={{
                    border: "1px solid black",
                    borderColor: "divider",
                    borderRadius: "16px",
                    overflow: "hidden",
                    position: "relative",
                    "&:hover": {
                      img: {
                        scale: "120%",
                      },
                    },
                  }}
                >
                  <img src={item.src} alt="" className="duration-300" />
                  <Stack
                    sx={{
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "4px",
                      paddingX: "12px",
                      backgroundColor: alpha(
                        MuiTheme().palette.background.paper,
                        0.7
                      ),
                      position: "absolute",
                      zIndex: "50",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                    }}
                  >
                    <Typography variant="captiontext">
                      {item.sold} đã bán
                    </Typography>
                    <Box
                      sx={{
                        width: "100%",
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                          width: "100%",
                        }}
                        textAlign="center"
                        textTransform="capitalize"
                      >
                        {item.name}
                      </Typography>
                    </Box>
                  </Stack>
                </Box>
              </Box>
            ))}
          </div>
        </div>
      </div>
    </Stack>
  );
};

export default TopSellSection;
