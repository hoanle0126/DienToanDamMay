import { typography } from "@/Theme/elements/typography";
import { GridToolbarContainer } from "@mui/x-data-grid";
import React from "react";
import { useStateContext } from "../../../../../Context";

const DataGridToolbar = () => {
  const { cart, setCart } = useStateContext();
    return (
        <GridToolbarContainer
            sx={{
                padding: "24px",
                fontStyle: typography.h6,
                fontWeight: 400,
            }}
        >
            <strong>Cart</strong> ({cart.products?.length} item)
        </GridToolbarContainer>
    );
};

export default DataGridToolbar;
