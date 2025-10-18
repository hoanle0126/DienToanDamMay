import EmblaCarousel from "@/components/carousel";
import { getAllHotDeals } from "@/store/hotDeals/action";
import { Box, Grid, Stack, Typography } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const OPTIONS = { align: "start" };
const SLIDE_COUNT = 6;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const listImage = [
  { src: "https://media.hcdn.vn/hsk/1738980194846x250.jpg" },
  { src: "https://media.hcdn.vn/hsk/1732069393web.jpg" },
  { src: "https://media.hcdn.vn/hsk/1749880034homechongnang1406.jpg" },
  { src: "https://media.hcdn.vn/hsk/1749876609homehaircamp146.jpg" },
  { src: "https://media.hcdn.vn/hsk/1749790994homemk1306.jpg" },
  { src: "https://media.hcdn.vn/hsk/1749880235homesunplay1406.jpg" },
  { src: "https://media.hcdn.vn/hsk/1749880420homeemmie1406.jpg" },
];

const BannerSection = () => {
  const [emblaRef] = useEmblaCarousel();
  const dispatch = useDispatch();
  const { hot_deals, loading } = useSelector((store) => store.hotDeals);

  React.useEffect(() => {
    dispatch(getAllHotDeals());
  }, []);

  return (
    <Box
      sx={{
        paddingX: "120px",
        backgroundColor: "background.paper",
        boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.1)",
        zIndex: "100",
        position: "relative",
      }}
    >
      <Grid container className="w-full" spacing="8px">
        <Grid size={8}>
          <EmblaCarousel
            lists={hot_deals}
            options={{ loop: true, align: "start" }}
          >
            {(item) => (
              <img src={item.banners[0]} className="w-full h-[260px]" />
            )}
          </EmblaCarousel>
        </Grid>
        <Grid size={4}>
          <Stack gap="8px" height="260px">
            <img
              src="https://media.hcdn.vn/hsk/1739420045nowfree-4-846x250-13022025.jpg"
              alt=""
              className="flex-1"
            />
            <img
              src="https://media.hcdn.vn/hsk/1653555653banner-check-gia-web-v2-435x128.jpg"
              alt=""
              className="flex-1"
            />
          </Stack>
        </Grid>
        <Grid size={12}>
          <Stack direction={"row"} paddingTop="8px" paddingBottom="20px">
            {[
              {
                src: "https://media.hcdn.vn/hsk/icon/hsk-icon-2025-06-15.png",
                title: "Sale Giữa Tháng",
              },
              {
                src: "https://media.hcdn.vn/hsk/icon/hsk-icon-nowfree-v2.png",
                title: "Giao 2H",
              },
              {
                src: "https://media.hcdn.vn/hsk/icon/hsk-icon-perfume-v2.png",
                title: "Nước Hoa Chính Hãng",
              },
              {
                src: "https://media.hcdn.vn/hsk/icon/hasaki-clinic.png",
                title: "Clinic & S.P.A",
              },
              {
                src: "https://media.hcdn.vn/hsk/icon/hsk-icon-clinic-deals-12-12-2024.png",
                title: "Clinic Deals",
              },
              {
                src: "https://media.hcdn.vn/hsk/icon/hsk-icon-mua-la-co-qua.png",
                title: "Mua Là Có Quà",
              },
              {
                src: "https://media.hcdn.vn/hsk/icon/hasaki-dat-hen.png",
                title: "Đặt Hẹn",
              },
              {
                src: "https://media.hcdn.vn/hsk/icon/hasaki-cam-nang.png",
                title: "Cẩm Nang",
              },
            ].map((item, index) => (
              <Stack
                key={index}
                alignItems="center"
                gap="4px"
                sx={{
                  width: "100%",
                  flex: 1,
                  cursor: "pointer",
                  "&:hover": {
                    color: "text.secondary",
                    img: {
                      transform: "scale(110%)",
                    },
                  },
                }}
              >
                <img
                  src={item.src}
                  alt=""
                  className="size-[50px] duration-300"
                />
                <Typography variant="body2">{item.title}</Typography>
              </Stack>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BannerSection;
