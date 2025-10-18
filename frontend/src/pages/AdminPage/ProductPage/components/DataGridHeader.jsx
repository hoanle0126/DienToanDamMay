import { formatCurrency } from "@/Function/formatCurrency";
import { formatDate } from "@/Function/formatDate";
import { formatTime } from "@/Function/formatTime";
import { deleteProduct } from "@/store/products/action";
import { MuiTheme } from "@/theme";
import { Icon } from "@iconify/react";
import {
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

function RenderProduct(props) {
  const { row } = props;

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        paddingRight: "12px",
      }}
    >
      <img src={row.thumbnail} className="w-[70px] h-[70px] rounded-[12px]" />
      <Typography
        variant="subtitle2"
        sx={{
          flex: 1,
          wordBreak: "break-word",
          wordWrap: "break-word",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {row.name}
      </Typography>
    </Box>
  );
}

function RenderDateTime(props) {
  const { value } = props;

  return (
    <Stack
      sx={{
        height: "100%",
        justifyContent: "center",
      }}
    >
      <Typography variant="body2">{formatDate(value)}</Typography>
      <Typography variant="captiontext" color={"text.secondary"}>
        {formatTime(value)}
      </Typography>
    </Stack>
  );
}

function RenderStock(props) {
  const { value, row } = props;
  const [status, setStatus] = React.useState({
    title: "",
    color: "primary",
  });

  React.useEffect(() => {
    if (value > 15) {
      setStatus({
        title: `${value} in stock`,
        color: "primary",
      });
    } else if (value > 0) {
      setStatus({
        title: `${value} low stock`,
        color: "warning",
      });
    } else {
      setStatus({
        title: "out of stock",
        color: "error",
      });
    }
  }, []);

  return (
    <Stack
      sx={{
        height: "100%",
        justifyContent: "center",
        gap: "8px",
        "& .MuiLinearProgress-root": {
          width: "72px",
          height: "6px",
          borderRadius: "99px",
          "& .MuiLinearProgress-bar": {
            borderRadius: "99px",
          },
        },
      }}
    >
      <LinearProgress
        variant="determinate"
        value={(row.remain / row.quantity) * 100}
        color={status.color}
      />
      <Typography variant="captiontext" color={"text.secondary"}>
        {status.title}
      </Typography>
    </Stack>
  );
}

function RenderAction(props) {
  const { row } = props;
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const dispatch = useDispatch();

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
          <MenuItem onClick={() => navigate("" + row.id)}>
            <Icon icon="solar:eye-bold" />
            View
          </MenuItem>
          <MenuItem onClick={() => dispatch(deleteProduct(row.id))}>
            <Icon
              icon="solar:trash-bin-trash-bold"
              color={MuiTheme().palette.error.main}
            />
            <Typography variant="body2" color={"error"}>
              Delete
            </Typography>
          </MenuItem>
        </MenuList>
      </Popover>
    </Box>
  );
}

const DataGridHeader = () => {
  return [
    {
      field: "name",
      headerName: "Product",
      flex: 1,
      renderCell: RenderProduct,
    },
    {
      field: "created_at",
      headerName: "Created at",
      width: 200,
      renderCell: RenderDateTime,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      width: 160,
      renderCell: RenderStock,
    },
    {
      field: "price",
      headerName: "Price",
      width: 120,
      valueGetter: (value) => {
        return formatCurrency(value);
      },
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
