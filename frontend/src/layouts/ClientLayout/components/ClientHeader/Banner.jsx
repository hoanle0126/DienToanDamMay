import { Stack } from "@mui/material";
import React from "react";

const Banner = () => {
  return (
    <Stack
      sx={{
        paddingX: "120px",
        backgroundColor: "#084322",
      }}
    >
      <img
        src="https://media.hcdn.vn/hsk/1749726223top14156.jpg"
        width="100%"
        height="50px"
      />
    </Stack>
  );
};

export default Banner;
