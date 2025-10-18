import { List, ListItemButton, Popover, Typography } from "@mui/material";
import React from "react";

const SortMenu = ({ open, anchorEl, handleClose, action }) => {
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
        vertical: "top",
        horizontal: "right",
      }}
    >
      <List>
        {[
          { name: "Sort by name", key: "name" },
          { name: "Sort by price", key: "price" },
          { name: "Sort by date", key: "created_at" },
        ].map((item) => (
          <ListItemButton
            key={item.key}
            onClick={() => {
              action(item);
              handleClose();
            }}
          >
            {item.name}
          </ListItemButton>
        ))}
      </List>
    </Popover>
  );
};

export default SortMenu;
