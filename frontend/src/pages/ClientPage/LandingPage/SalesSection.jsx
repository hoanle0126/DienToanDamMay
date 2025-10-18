import EmblaCarousel from "@/components/carousel";
import ProductCard from "@/components/productCard";
import { getFlashDeals } from "@/store/flashDeals/action";
import { getAllHotDeals } from "@/store/hotDeals/action";
import { Box, Stack, Typography } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const SalesSection = () => {
  const [listSalesRef] = useEmblaCarousel();
  const dispatch = useDispatch();
  const { flashDeal } = useSelector((store) => store.flashDeal);

  React.useEffect(() => {
    dispatch(getFlashDeals());
  }, []);

  return (
    <Stack
      sx={{
        backgroundColor: "secondary.main",
        borderRadius: "12px",
        padding: "16px",
        gap: "12px",
      }}
    >
      <Typography variant="captiontext" color="grey.0" className="px-[8px]">
        Deals đã hết hạn
      </Typography>
      <div className="w-full">
        <EmblaCarousel
          lists={flashDeal.products}
          size={6}
          spacing="16px"
          options={{
            loop: true,
            align: "start",
          }}
        >
          {(item) => <ProductCard item={item} />}
        </EmblaCarousel>
      </div>
    </Stack>
  );
};

export default SalesSection;
