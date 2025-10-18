import { Icon } from "@iconify/react";
import { Box, Button, Stack, Tab, Tabs, Typography } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";

const ServiceSection = () => {
  const [tabValue, setTabValue] = React.useState(0);
  const [listClinicRef] = useEmblaCarousel();
  const [listImageRef] = useEmblaCarousel();

  return (
    <Stack
      sx={{
        padding: "16px",
        backgroundColor: "background.paper",
        borderRadius: "16px",
        gap: "8px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          borderBottom: "1px solid black",
          borderColor: "divider",
        }}
      >
        <Tabs
          value={tabValue}
          onChange={(e, value) => setTabValue(value)}
          aria-label="basic tabs example"
          indicatorColor="secondary"
          textColor="secondary"
        >
          <Tab
            label={
              <Typography textTransform="none" variant="h6">
                Hasaki Clinic
              </Typography>
            }
          />
          <Tab
            label={
              <Typography textTransform="none" variant="h6">
                Bảng giá
              </Typography>
            }
          />
        </Tabs>
      </Box>
      <div className="embla">
        <div className="embla__viewport" ref={listClinicRef}>
          <div className="embla__container">
            {[
              {
                thumbnail:
                  "https://media.hcdn.vn/catalog/product/1/8/18-1742269926_img_220x220_0dff4c_fit_center.jpg",
                name: "Triệt Lông bikini nữ diode Laser (8 buổi) (bảo hành 5 năm)",
                price: "3.000.000",
                rating: "4.9",
                reviews: "64",
                service: "Trọn Gói 8 Lần - 30 Ngày/Lần | 30 phút",
              },
              {
                thumbnail:
                  "https://media.hcdn.vn/catalog/product/1/8/18-1742269926_img_220x220_0dff4c_fit_center.jpg",
                name: "Triệt Lông bikini nữ diode Laser (8 buổi) (bảo hành 5 năm)",
                price: "3.000.000",
                rating: "4.9",
                reviews: "64",
                service: "Trọn Gói 8 Lần - 30 Ngày/Lần | 30 phút",
              },
              {
                thumbnail:
                  "https://media.hcdn.vn/catalog/product/1/8/18-1742269926_img_220x220_0dff4c_fit_center.jpg",
                name: "Triệt Lông bikini nữ diode Laser (8 buổi) (bảo hành 5 năm)",
                price: "3.000.000",
                rating: "4.9",
                reviews: "64",
                service: "Trọn Gói 8 Lần - 30 Ngày/Lần | 30 phút",
              },
              {
                thumbnail:
                  "https://media.hcdn.vn/catalog/product/1/8/18-1742269926_img_220x220_0dff4c_fit_center.jpg",
                name: "Triệt Lông bikini nữ diode Laser (8 buổi) (bảo hành 5 năm)",
                price: "3.000.000",
                rating: "4.9",
                reviews: "64",
                service: "Trọn Gói 8 Lần - 30 Ngày/Lần | 30 phút",
              },
              {
                thumbnail:
                  "https://media.hcdn.vn/catalog/product/1/8/18-1742269926_img_220x220_0dff4c_fit_center.jpg",
                name: "Triệt Lông bikini nữ diode Laser (8 buổi) (bảo hành 5 năm)",
                price: "3.000.000",
                rating: "4.9",
                reviews: "64",
                service: "Trọn Gói 8 Lần - 30 Ngày/Lần | 30 phút",
              },
              {
                thumbnail:
                  "https://media.hcdn.vn/catalog/product/1/8/18-1742269926_img_220x220_0dff4c_fit_center.jpg",
                name: "Triệt Lông bikini nữ diode Laser (8 buổi) (bảo hành 5 năm)",
                price: "3.000.000",
                rating: "4.9",
                reviews: "64",
                service: "Trọn Gói 8 Lần - 30 Ngày/Lần | 30 phút",
              },
            ].map((item, index) => (
              <Stack
                key={index}
                sx={{
                  flex: "0 0 calc(100%/6)",
                  paddingLeft: "16px",
                }}
              >
                <Stack
                  sx={{
                    border: "1px solid black",
                    borderColor: "divider",
                    borderRadius: "16px",
                    overflow: "hidden",
                    gap: "4px",
                  }}
                >
                  <img src={item.thumbnail} alt="" />
                  <Stack
                    sx={{
                      padding: "8px",
                      gap: "4px",
                    }}
                  >
                    <Typography variant="subtitle1" color="secondary.main">
                      {item.price}đ
                    </Typography>
                    <Typography variant="captiontext">{item.name}</Typography>
                    <Stack direction="row" alignItems="center" gap="4px">
                      <Stack
                        direction="row"
                        color="grey.0"
                        alignItems="center"
                        gap="4px"
                        bgcolor="secondary.main"
                        justifyContent="start"
                        padding="2px 4px"
                        borderRadius="4px"
                      >
                        <Typography variant="captiontext">
                          {" "}
                          {item.rating}
                        </Typography>
                        <Icon icon="solar:star-bold" width="10" height="10" />
                      </Stack>
                      <Typography variant="captiontext" color="text.secondary">
                        ({item.reviews})
                      </Typography>
                    </Stack>
                    <Stack
                      direction="row"
                      alignItems="start"
                      gap="4px"
                      color="text.secondary"
                    >
                      <Icon
                        icon="solar:clock-circle-linear"
                        width="12"
                        height="20"
                      />
                      <Typography variant="captiontext">
                        {item.service}
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            ))}
          </div>
        </div>
      </div>
      <Box marginTop="12px">
        <div className="embla">
          <div className="embla__viewport" ref={listImageRef}>
            <div className="embla__container">
              {[
                {
                  src: "https://media.hcdn.vn/hsk/1707966169kham-da-cum-bac-si-1300-140.jpg",
                },
                {
                  src: "https://media.hcdn.vn/hsk/1707966169kham-da-cum-bac-si-1300-140.jpg",
                },
              ].map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    width: "100%",
                    height: "140px",
                    flex: "0 0 calc(100%)",
                    borderRadius: "16px",
                    paddingLeft: "16px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={item.src}
                    alt=""
                    className="size-full rounded-[16px]"
                  />
                </Box>
              ))}
            </div>
          </div>
        </div>
      </Box>
      <Stack alignItems="center">
        <Button
          size="large"
          sx={{
            textTransform: "none",
            fontWeight: 600,
            borderRadius: "20px",
            paddingX: "60px",
          }}
          variant="outlined"
        >
          Xem tất cả
        </Button>
      </Stack>
    </Stack>
  );
};

export default ServiceSection;
