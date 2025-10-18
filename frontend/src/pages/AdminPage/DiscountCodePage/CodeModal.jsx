import SelectProductModal from "@/components/SelectProductModal";
import { formatCurrency } from "@/Function/formatCurrency";
import { getAllBrands } from "@/store/brands/action";
import { Icon } from "@iconify/react";
import {
  Autocomplete,
  Button,
  ButtonBase,
  ButtonGroup,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputAdornment,
  InputLabel,
  List,
  ListItemButton,
  ListItemText,
  MenuItem,
  Modal,
  OutlinedInput,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CodeModal = ({
  open,
  handleClose,
  action,
  discountCodeValue = {
    products: [],
    brands: [],
    applyAll: true,
    discount: 12,
    name: "",
    code: "",
  },
}) => {
  const [openProductModal, setOpenProductModal] = React.useState(false);
  const [formCode, setFormCode] = React.useState({
    products: [],
    brands: [],
    applyAll: true,
    discount: 12,
    name: "",
    code: "",
  });
  const dispatch = useDispatch();
  const { brands } = useSelector((store) => store.brands);
  const optionBrands = brands.map((item) => {
    const firstLetter = item.name[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? "0-9" : firstLetter,
      ...item,
    };
  });

  React.useEffect(() => {
    dispatch(getAllBrands());
  }, []);

  React.useEffect(() => {
    if (formCode.applyAll) {
      setFormCode({ ...formCode, products: [], brands: [] });
    }
  }, [formCode.applyAll]);

  React.useEffect(() => {
    setFormCode(discountCodeValue);
  }, [open]);

  return (
    <Modal open={open} onClose={handleClose}>
      <Stack
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 600,
          bgcolor: "background.paper",
          borderRadius: "12px",
          boxShadow: 24,
          p: "20px",
          gap: "20px",
          maxHeight: "600px",
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        <Typography variant="h6">Discount Code</Typography>
        <Stack gap="16px">
          <Stack gap="8px">
            <Typography variant="body2">Name</Typography>
            <OutlinedInput
              size="small"
              placeholder="Enter name of code"
              value={formCode.name}
              onChange={(e) =>
                setFormCode({ ...formCode, name: e.target.value })
              }
            />
          </Stack>
          <Stack gap="8px">
            <Typography variant="body2">Code</Typography>
            <OutlinedInput
              size="small"
              placeholder="Enter code"
              value={formCode.code}
              onChange={(e) =>
                setFormCode({ ...formCode, code: e.target.value })
              }
            />
          </Stack>
          <Stack gap="8px">
            <Typography variant="body2">Discount</Typography>
            <OutlinedInput
              size="small"
              placeholder="Enter value discount for code"
              value={formCode.discount}
              onChange={(e) =>
                setFormCode({ ...formCode, discount: e.target.value })
              }
            />
          </Stack>
          <FormControlLabel
            control={
              <Checkbox
                checked={formCode.applyAll}
                onChange={(e) =>
                  setFormCode({ ...formCode, applyAll: e.target.checked })
                }
              />
            }
            label="Select all products"
          />
          {!formCode.applyAll && (
            <React.Fragment>
              <Stack gap="8px">
                <Typography variant="body2">Product active</Typography>
                <Button
                  variant="outlined"
                  onClick={() => setOpenProductModal(true)}
                >
                  Add Product
                </Button>
                <Grid container spacing="12px">
                  {formCode.products.map((item, index) => (
                    <Grid size={2} key={index}>
                      <ButtonBase
                        sx={{
                          width: "100%",
                          boxShadow: "custom.card",
                          padding: "4px",
                          gap: "4px",
                          borderRadius: "12px",
                          flexDirection: "column",
                          alignItems: "start",
                        }}
                        onClick={() => {
                          const startProducts = formCode.products.slice(
                            0,
                            index
                          );
                          const endProducts = formCode.products.slice(
                            index + 1,
                            formCode.products.length
                          );
                          setFormCode({
                            ...formCode,
                            products: startProducts.concat(endProducts),
                          });
                        }}
                      >
                        <Stack
                          sx={{
                            width: "100%",
                            aspectRatio: "1 / 1",
                          }}
                        >
                          <img src={item.thumbnail} className="size-full" />
                        </Stack>
                        <Typography
                          variant="captiontext"
                          sx={{
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            textAlign: "start",
                          }}
                        >
                          {item.name}
                        </Typography>
                        <Typography
                          variant="captiontext"
                          color="secondary.main"
                        >
                          {formatCurrency(item.price)}
                        </Typography>
                      </ButtonBase>
                    </Grid>
                  ))}
                </Grid>
              </Stack>
              <Stack gap="8px">
                <Typography variant="body2">Brand active</Typography>
                <Autocomplete
                  size="small"
                  value={formCode.brands}
                  options={optionBrands}
                  groupBy={(it) => it.firstLetter}
                  multiple
                  onChange={(e, value) =>
                    setFormCode({ ...formCode, brands: value })
                  }
                  disableCloseOnSelect
                  getOptionLabel={(it) => it.name}
                  renderInput={(params) => <TextField {...params} />}
                  renderOption={(props, option, { selected }) => {
                    const { key, ...optionProps } = props;
                    return (
                      <ListItemButton
                        key={key}
                        {...optionProps}
                        sx={{
                          flexDirection: "row",
                        }}
                      >
                        <Checkbox checked={selected} />
                        <img src={option.logo} className="w-[40px] mr-[12px]" />
                        <ListItemText primary={option.name} />
                      </ListItemButton>
                    );
                  }}
                />
              </Stack>
            </React.Fragment>
          )}
          <Button
            variant="contained"
            onClick={() => {
              action(formCode);
            }}
          >
            Save & Continue
          </Button>
        </Stack>
        <SelectProductModal
          open={openProductModal}
          handleClose={() => setOpenProductModal(false)}
          action={(modalValue) => {
            console.log(modalValue);
            setFormCode({
              ...formCode,
              products: formCode.products.concat(modalValue),
            });
          }}
          excluding={formCode.products.map((it) => it.id)}
        />
      </Stack>
    </Modal>
  );
};

export default CodeModal;
