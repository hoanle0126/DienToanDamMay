import { formatCurrency } from "@/Function/formatCurrency";
import { deleteCategory } from "@/store/categories/action";
import { MuiTheme } from "@/theme";
import { Icon } from "@iconify/react";
import {
  Avatar,
  Box,
  IconButton,
  LinearProgress,
  MenuItem,
  MenuList,
  Popover,
  Popper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CodeModal from "../CodeModal";
import {
  deleteDiscountCode,
  updateDiscountCode,
} from "@/store/discountCodes/action";

function RenderProduct(props) {
  const { row } = props;

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <Avatar
        src={row.thumbnail}
        sx={{
          bgcolor: "primary.light",
          width: "70px",
          height: "70px",
          borderRadius: "16px",
        }}
        variant="rounded"
      >
        C
      </Avatar>
      <Stack>
        <Typography variant="subtitle2">{row.name}</Typography>
      </Stack>
    </Box>
  );
}

function RenderAction(props) {
  const { row, rows } = props;
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
        height: "100%",
      }}
    >
      <IconButton onClick={handleClick}>
        <Icon
          icon="eva:more-vertical-fill"
          color={MuiTheme().palette.text.primary}
        />
      </IconButton>
      <Popover
        id={id}
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
        <MenuList>
          <MenuItem onClick={() => setOpenModal(row.id)}>
            <Icon icon="solar:eye-bold" />
            View {row.products.length}
          </MenuItem>
          <MenuItem>
            <Icon
              icon="solar:trash-bin-trash-bold"
              color={MuiTheme().palette.error.main}
            />
            <Typography
              variant="body2"
              color={"error"}
              onClick={() => {
                dispatch(deleteDiscountCode({id:row.id}));
              }}
            >
              Delete
            </Typography>
          </MenuItem>
        </MenuList>
      </Popover>

      <CodeModal
        open={openModal === row.id}
        handleClose={async () => setOpenModal(-1)}
        discountCodeValue={row}
        action={async (modalValue) => {
          console.log("Form ", modalValue);
          await dispatch(
            updateDiscountCode({
              code: modalValue,
              id: row.id,
            })
          );
          setOpenModal(false);
        }}
      />
    </Box>
  );
}

const DataGridHeader = () => {
  return [
    {
      field: "name",
      headerName: "Name code",
      flex: 1,
    },
    {
      field: "code",
      headerName: "Code",
      width: 120,
    },
    {
      field: "discount",
      headerName: "Discount Value",
      width: 120,
      valueGetter: (row) => row + "%",
    },
    {
      field: "action",
      headerName: "",
      sortable: false, // Disable sorting
      disableColumnMenu: true,
      renderCell: RenderAction,
    },
  ];
};

export default DataGridHeader;
