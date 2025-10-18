import { Box, Button, Stack } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useRef } from "react";
import DataGridHeader from "./DataGridHeader";
import DataGridToolbar from "./DataGridToolbar";
import { MuiTheme } from "@/Theme";
import { useSelector } from "react-redux";

const CardDataGrid = () => {
  const { user } = useSelector((store) => store.user);
  // const navigate = useNavigate();
  const [products, setProducts] = React.useState(user?.cart);

  React.useEffect(() => console.log(user.cart));

  return (
    <>
      <Box>
        <DataGrid
          rows={user?.cart || []}
          columns={DataGridHeader(products, setProducts)}
          hideFooter
          rowHeight={120}
          disableColumnSorting
          disableColumnMenu
          disableColumnResize
          slots={{
            toolbar: DataGridToolbar,
          }}
          sx={{
            border: "none",
            outline: "none",
            backgroundColor: "background.paper",
            "--unstable_DataGrid-headWeight": 500,
            "--DataGrid-containerBackground":
              MuiTheme().palette.background.neutral,
            "& .MuiDataGrid-row": {
              "&:hover": {
                backgroundColor: "transparent",
              },
              "&.Mui-selected": {
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              },
            },
            "& .MuiDataGrid-columnHeader": {
              cursor: "default",
              color: "text.secondary",
              backgroundColor: "background.neutral",
              "&:focus": {
                outline: "none",
              },
            },
            "&  .MuiDataGrid-cell:focus": {
              outline: "none",
            },
          }}
        />
      </Box>
    </>
  );
};

export default CardDataGrid;
