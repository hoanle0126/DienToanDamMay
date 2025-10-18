import { Grid } from "@mui/material";
import React from "react";

const SubBannerSection = () => {
  return (
    <Grid container spacing="20px">
      <Grid size={4}>
        <img
          src="https://media.hcdn.vn/hsk/174954999017488536451742288136unilever-x-hasaki-sub-banner-home-test-beta-427x140.jpg"
          alt=""
          className="rounded-[16px]"
        />
      </Grid>
      <Grid size={4}>
        <img
          src="https://media.hcdn.vn/hsk/17495261231734061201sunplay-sub-banner-desktop-427x140-v1-beta-test.jpg"
          alt=""
          className="rounded-[16px]"
        />
      </Grid>
      <Grid size={4}>
        <img
          src="https://media.hcdn.vn/hsk/1747235303z6602055854904-a79aee04f0296c215d5497dc5158b1b1.jpg"
          alt=""
          className="rounded-[16px]"
        />
      </Grid>
    </Grid>
  );
};

export default SubBannerSection;
