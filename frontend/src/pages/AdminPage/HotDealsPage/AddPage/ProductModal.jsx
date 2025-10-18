import ImageThumbnail from "@/components/ImageThumbnail";
import {
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
import React from "react";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "@/store/products/action";

const ProductModal = ({ open, handleClose, action, deal }) => {
  const [openProductModal, setOpenProductModal] = React.useState(true);
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.products);
  const [searchField, setSearchField] = React.useState("");
  const [dealModel, setDealModel] = React.useState({
    products: [],
  });

  React.useEffect(() => {
    dispatch(getAllProducts());
  }, []);

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
            {dealModel?.products?.map((item, index) => (
              <Stack key={index}>
                <Stack direction="row" gap="20px" alignItems="center">
                  <img
                    src={item.product?.thumbnail}
                    className="size-[80px] outline"
                  />
                  <Stack
                    justifyContent="center"
                    paddingY="8px"
                    alignItems="start"
                    width="100%"
                  >
                    <Typography variant="h6">{item.product?.name}</Typography>
                    <div className="flex-1"></div>
                    <Typography variant="body1">
                      {item.product?.price}
                    </Typography>
                  </Stack>
                  <IconButton
                    onClick={() =>
                      setDealModel({
                        ...dealModel,
                        products: dealModel?.products?.filter(
                          (it) => it != item
                        ),
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
                  sx={{
                    maxHeight: 200,
                    overflowY: "scroll",
                    border: "1px solid black",
                    borderColor: "divider",
                    padding: 0,
                  }}
                >
                  {products
                    ?.filter(
                      (it) =>
                        it.name.includes(searchField) &&
                        !dealModel?.products?.some(
                          (itDeal) => itDeal.product.id === it.id
                        ) &&
                        !deal?.some((itDeal) => itDeal.product.id === it.id)
                    )
                    .map((item, index) => (
                      <ListItemButton
                        key={index}
                        onClick={() => {
                          console.log(dealModel);
                          setDealModel({
                            ...dealModel,
                            products: [
                              ...dealModel.products,
                              { product: item, sales: 0 },
                            ],
                          });
                          setOpenProductModal(!openProductModal);
                        }}
                      >
                        {item.name}
                      </ListItemButton>
                    ))}
                </List>
              </Stack>
            )}
          </Stack>
        </Stack>
        <Button
          variant="contained"
          onClick={() => {
            action(dealModel.products);
            setDealModel({ products: [] });
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
