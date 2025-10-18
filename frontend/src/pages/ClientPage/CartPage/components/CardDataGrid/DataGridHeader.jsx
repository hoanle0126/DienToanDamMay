import { formatCurrency } from "@/Function/formatCurrency";
import { addCart } from "@/store/users/action";
import { Icon } from "@iconify/react";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function RenderProduct({ row }) {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        gap: "12px",
        paddingY: "8px",
      }}
    >
      <img src={row.thumbnail} className="h-full object-cover aspect-square" />
      <Stack
        sx={{
          justifyContent: "flex-start",
          alignItems: "flex-start",
          width: "100%",
        }}
      >
        <Typography variant="subtitle2">{row.brand.name}</Typography>
        <Typography
          variant="body2"
          sx={{
            flex: 1,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "normal",
            wordBreak: "break-word",
            width: "100%",
          }}
        >
          {row.name}
        </Typography>
        <Button
          size="small"
          startIcon={<Icon icon="solar:trash-bin-minimalistic-linear" />}
        >
          Xóa
        </Button>
      </Stack>
    </Box>
  );
}

function RenderQuantity(props) {
  const { row } = props;
  const productRef = React.useRef(row);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = React.useState(row.quantity_cart);

  const addQuantity = async () => {
    await dispatch(
      addCart({
        product: row.id,
        quantity: 1,
      })
    );
    setQuantity((prev) => prev + 1);
  };

  const decQuantity = async () => {
    await dispatch(
      addCart({
        product: row.id,
        quantity: -1,
      })
    );
    setQuantity((prev) => prev - 1);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        gap: "4px",
      }}
    >
      <Stack
        sx={{
          border: "1px solid black",
          flexDirection: "row",
          alignItems: "center",
          gap: "8px",
          padding: "4px",
          borderColor: "divider",
          borderRadius: "8px",
        }}
      >
        <IconButton
          size="small"
          sx={{ borderRadius: "8px" }}
          onClick={() => decQuantity()}
          disabled={quantity == 1}
        >
          <Icon icon="eva:minus-fill" width={16} height={16} />
        </IconButton>
        <Typography>{quantity}</Typography>
        <IconButton
          size="small"
          sx={{ borderRadius: "8px" }}
          onClick={() => addQuantity()}
          disabled={quantity == row.remain}
        >
          <Icon icon="eva:plus-fill" width={16} height={16} />
        </IconButton>
      </Stack>
      <Typography variant="captiontext" color={"text.secondary"}>
        available: {row.remain}
      </Typography>
    </Box>
  );
}

function RenderPrice(props) {
  const { row } = props;

  return (
    <Stack
      sx={{
        gap: "4px",
        height: "100%",
        justifyContent: "center",
        alignItems: "end",
      }}
    >
      <Typography variant="subtitle1">
        {formatCurrency(row.total_price)}
      </Typography>
      <Typography
        variant="body2"
        color="text.disabled"
        sx={{
          textDecoration: "line-through",
        }}
      >
        {formatCurrency(row.price)}
      </Typography>
    </Stack>
  );
}

function RenderTotal(props) {
  const { row } = props;

  return (
    <Stack
      sx={{
        gap: "4px",
        height: "100%",
        justifyContent: "center",
        alignItems: "end",
      }}
    >
      <Typography variant="subtitle1">
        {formatCurrency(row.total_price * row.quantity_cart)}
      </Typography>
      <Typography
        variant="body2"
        color="text.disabled"
        sx={{
          textDecoration: "line-through",
        }}
      >
        {formatCurrency(row.price * row.quantity_cart)}
      </Typography>
    </Stack>
  );
}

const DataGridHeader = (rows, setRows) => {
  return [
    {
      field: "name",
      headerName: "Product",
      flex: 1,
      renderCell: (params) => <RenderProduct row={params.row} />,
    },
    {
      field: "price",
      headerName: "Price",
      width: 90,
      renderCell: (params) => <RenderPrice {...params} />,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      width: 130,
      renderCell: (params) => (
        <RenderQuantity {...params} rows={rows} setRows={setRows} />
      ),
    },
    {
      field: "total",
      headerName: "Total Price",
      width: 130,
      headerAlign: "right",
      align: "right",
      renderCell: (params) => <RenderTotal {...params} />,
    },
  ];
};

export default DataGridHeader;
