import React from "react";
import BannerSection from "./BannerSection";
import SalesSection from "./SalesSection";
import { Box, Stack } from "@mui/material";
import SubBannerSection from "./SubBannerSection";
import CategoriesSection from "./CategoriesSection";
import BrandSection from "./BrandSection";
import TopSellSection from "./TopSellSection";
import ServiceSection from "./ServiceSection";
import TopSearchSection from "./TopSearchSection";
import ProductSection from "./ProductSection";

const LandingPage = () => {
  return (
    <div>
      <BannerSection />
      <Stack
        sx={{
          paddingX: "120px",
          paddingY: "20px",
          gap: "20px",
          backgroundColor: "background.neutral",
        }}
      >
        {/* <SalesSection /> */}
        <SubBannerSection />
        <CategoriesSection />
        <BrandSection />
        <TopSellSection />
        {/* <TopSearchSection /> */}
        {/* <ServiceSection /> */}
      </Stack>
      <ProductSection />
    </div>
  );
};

export default LandingPage;