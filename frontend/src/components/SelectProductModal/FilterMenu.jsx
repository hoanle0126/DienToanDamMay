import { Popover, Typography } from "@mui/material";
import React from "react";

const FilterMenu = ({ open, anchorEl, handleClose }) => {
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical:"top",
        horizontal:"right"
      }}
    >
      <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
    </Popover>
  );
};

export default FilterMenu;
