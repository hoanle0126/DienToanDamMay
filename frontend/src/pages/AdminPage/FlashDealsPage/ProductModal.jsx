import ImageThumbnail from "@/components/ImageThumbnail";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  List,
  ListItem,
  ListItemButton,
  MenuItem,
  Modal,
  OutlinedInput,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import React, { useRef } from "react";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "@/store/products/action";
import { formatCurrency } from "@/Function/formatCurrency";

const ProductModal = ({ open, handleClose, action, deal }) => {
  const [openProductModal, setOpenProductModal] = React.useState(true);
  const dispatch = useDispatch();
  const { products, loading } = useSelector((store) => store.products);
  const [searchField, setSearchField] = React.useState("");
  const [dealModel, setDealModel] = React.useState([]);
  const [paginate, setPaginate] = React.useState(18);
  const listRef = useRef(null);

  React.useEffect(() => {
    dispatch(getAllProducts(paginate));
  }, [paginate]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Stack
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
          gap: "28px",
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Product
        </Typography>
        <Stack
          alignItems="start"
          justifyContent="start"
          gap="20px"
          width="100%"
        >
          <Stack gap="12px" width="100%">
            {dealModel?.map((item, index) => (
              <Stack key={index}>
                <Stack direction="row" gap="20px" alignItems="center">
                  <img src={item?.thumbnail} className="size-[80px] outline" />
                  <Stack
                    justifyContent="center"
                    paddingY="8px"
                    alignItems="start"
                    width="100%"
                  >
                    <Typography variant="h6">{item?.name}</Typography>
                    <div className="flex-1"></div>
                    <Typography variant="body1">
                      {formatCurrency(item?.price)}
                    </Typography>
                  </Stack>
                  <IconButton
                    onClick={() =>
                      setDealModel({
                        ...dealModel,
                        products: dealModel?.filter((it) => it != item),
                      })
                    }
                  >
                    <Icon
                      icon="solar:trash-bin-minimalistic-linear"
                      width="24"
                      height="24"
                    />
                  </IconButton>
                </Stack>
              </Stack>
            ))}
            {openProductModal === true ? (
              <Button onClick={() => setOpenProductModal(!openProductModal)}>
                Add Product
              </Button>
            ) : (
              <Stack>
                <Stack
                  direction="row"
                  sx={{
                    borderTop: "1px solid black",
                    borderLeft: "1px solid black",
                    borderRight: "1px solid black",
                    borderColor: "divider",
                    padding: "8px 8px",
                    color: "text.primary",
                    gap: "8px",
                    alignItems: "center",
                  }}
                >
                  <Icon icon="eva:search-fill" width="24" height="24" />
                  <input
                    type="text"
                    className="w-full focus:outline-none"
                    value={searchField}
                    placeholder="Search by name"
                    onChange={(e) => setSearchField(e.target.value)}
                  />
                </Stack>
                <List
                  ref={listRef}
                  sx={{
                    maxHeight: 200,
                    overflowY: "scroll",
                    border: "1px solid black",
                    borderColor: "divider",
                    padding: 0,
                  }}
                >
                  {products.map((item, index) => (
                    <ListItemButton
                      key={index}
                      onClick={() => {
                        console.log(dealModel);
                        setDealModel([...dealModel, item]);
                        setOpenProductModal(!openProductModal);
                      }}
                      sx={{
                        height: "76px",
                        alignItems: "center",
                        gap: "8px",
                        "&:not(:last-child)": {
                          borderBottom: "1px solid black",
                          borderColor: "divider",
                        },
                      }}
                    >
                      <Avatar
                        sx={{
                          height: "60px",
                          width: "60px",
                        }}
                        src={item.thumbnail}
                        variant="rounded"
                      />
                      <Stack height="100%" paddingY="4px">
                        <Typography variant="body2">{item.name}</Typography>
                        <div className="flex-1"></div>
                        <Typography variant="subtitle1" color="secondary.main">
                          {formatCurrency(item.price)}
                        </Typography>
                      </Stack>
                    </ListItemButton>
                  ))}
                  {loading && <ListItemButton>Đang cập nhật...</ListItemButton>}
                  <ListItemButton
                    onClick={() => setPaginate((prev) => prev + 18)}
                  >
                    More
                  </ListItemButton>
                </List>
              </Stack>
            )}
          </Stack>
        </Stack>
        <Button
          variant="contained"
          onClick={() => {
            action(dealModel);
            setDealModel([]);
            handleClose();
          }}
        >
          Save
        </Button>
      </Stack>
    </Modal>
  );
};

export default ProductModal;
