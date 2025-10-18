import { Icon } from "@iconify/react";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  Modal,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import AddAddressModal from "./AddAddressModal";
import { useSelector } from "react-redux";
import { useStateContext } from "@/Context";
import { useNavigate } from "react-router-dom";
import PaymentTypeModal from "@/pages/ClientPage/CheckoutPage/PaymentTypeModal";

const SelectAddressModal = ({ open, handleClose }) => {
  const navigate = useNavigate();
  const [openChild, setOpenChild] = React.useState(false);
  const { user } = useSelector((store) => store.user);
  const { addressCheckout, setAddressCheckout } = useStateContext();
  const [addressSelected, setAddressSelected] = React.useState(JSON.stringify(addressCheckout));

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 680,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: "20px",
          borderRadius: "20px",
        }}
      >
        <Stack direction="row" alignItems="start">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Địa chỉ nhận hàng
          </Typography>
          <div className="flex-1"></div>
          <Icon
            onClick={handleClose}
            icon="eva:close-fill"
            width="24"
            height="24"
            className="cursor-pointer"
          />
        </Stack>
        <FormControl fullWidth>
          <RadioGroup
            value={addressSelected}
            onChange={(e) => {
              setAddressSelected(e.target.value);
            }}
          >
            {user.address?.map((item, index) => (
              <Stack
                key={index}
                direction="row"
                alignItems="center"
                gap="12px"
                sx={{
                  paddingY: "12px",
                  borderBottom: "1px solid black",
                  borderBottomColor: "divider",
                }}
              >
                <Radio
                  size="small"
                  sx={{
                    padding: 0,
                  }}
                  value={JSON.stringify(item)}
                />
                <Stack alignItems="start" gap="4px" width="100%">
                  <Stack direction="row" width="100%" alignItems="center">
                    <Typography variant="subtitle1">
                      {item.name} - {item.phone}
                    </Typography>
                    <div className="flex-1"></div>
                    <IconButton>
                      <Icon icon="solar:pen-2-bold" />
                    </IconButton>
                    <IconButton>
                      <Icon icon="solar:trash-bin-minimalistic-bold" />
                    </IconButton>
                  </Stack>
                  <Typography variant="body2">
                    {item.street_address}, {item.ward}, {item.district},
                    {item.province}
                  </Typography>
                  {item.default === 1 && (
                    <Stack
                      sx={{
                        borderColor: "secondary.main",
                        borderWidth: 1,
                        typography: "captiontext",
                        paddingX: "12px",
                        borderRadius: "20px",
                        color: "secondary.main",
                      }}
                    >
                      Địa chỉ mặc định
                    </Stack>
                  )}
                </Stack>
                <div className="flex-1"></div>
              </Stack>
            ))}
          </RadioGroup>
        </FormControl>
        <Stack direction="row" paddingTop="20px" gap="12px" alignItems="end">
          <Button
            endIcon={<Icon icon="solar:add-square-linear" />}
            sx={{
              borderRadius: "40px",
            }}
            size="large"
            onClick={() => setOpenChild(true)}
          >
            Thêm địa chỉ mới
          </Button>
          <div className="flex-1"></div>
          <Button
            variant="outlined"
            size="large"
            sx={{
              borderRadius: "40px",
            }}
            onClick={handleClose}
          >
            Hủy
          </Button>
          <Button
            variant="contained"
            size="large"
            sx={{
              borderRadius: "40px",
            }}
            onClick={async () => {
              await setAddressCheckout(JSON.parse(addressSelected));
              await handleClose();
              navigate("/checkout");
            }}
          >
            Tiếp tục
          </Button>
        </Stack>
        <AddAddressModal
          open={openChild}
          handleClose={() => setOpenChild(false)}
        />
      </Box>
    </Modal>
  );
};

export default SelectAddressModal;
