import { uploadToCloudinary } from "@/utils/uploadToCloudinary";
import { Icon } from "@iconify/react";
import { Box, Button, Stack } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";

const ListBanners = ({ banners = [], setBanners }) => {
  const [listBannersRef, emblaApi] = useEmblaCarousel({ loop: true });
  const handleSelectImage = async (e) => {
    const imgUrl = await uploadToCloudinary(e.target.files[0]);
    setBanners([...banners, imgUrl]);
  };
  React.useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
      emblaApi.scrollTo(0);
    }
  }, [banners, emblaApi]);
  return (
    <Stack
      sx={{
        width: "100%",
        backgroundColor: "primary.light",
      }}
    >
      <Stack
        sx={{
          height: 360,
          overflowY: "auto",
        }}
      >
        {banners?.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: "100%",
              height: "360px",
              flex: "0 0 100%",
              position: "relative",
              color: "primary.main",
            }}
          >
            <img src={item} alt="" className="w-full h-[360px]" />
            <Icon
              icon="solar:trash-bin-minimalistic-linear"
              width="24"
              height="24"
              className="absolute top-[8px] right-[8px] cursor-pointer"
              onClick={() => {
                const newBanners = [...banners];
                newBanners.splice(index, 1);
                setBanners(newBanners);
              }}
            />
          </Box>
        ))}
      </Stack>
      <Button
        variant="contained"
        sx={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
        color="common"
        tabIndex={-1}
        component="label"
      >
        Add banner
        <input type="file" className="hidden" onChange={handleSelectImage} />
      </Button>
    </Stack>
  );
};

export default ListBanners;
