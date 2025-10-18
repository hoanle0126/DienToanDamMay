import { Box } from "@mui/material";
import React from "react";

const CustomTabPanel = (props) => {
  const { tab, index, children } = props;

  return <div>{tab == index && <Box>{children}</Box>}</div>;
};

export default CustomTabPanel;
