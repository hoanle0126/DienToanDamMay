import { getAllCities } from "@/store/cities/action";
import { addNewAddress } from "@/store/users/action";
import { Icon } from "@iconify/react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import React from "react";

const PaymentTypeModal = ({ open, handleClose, action }) => {
  const [form, setForm] = React.useState({});

  React.useEffect(() => {
    console.log("Form", form);
  }, [form]);

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
        <Stack>
          <FormControl>
            <RadioGroup
              value={JSON.stringify(form)}
              onChange={(e) => setForm(JSON.parse(e.target.value))}
            >
              {[
                {
                  name: "Thanh toán khi nhận hàng",
                  type: "offline",
                },
                {
                  name: "Thanh toán trực tuyến VISA / MASTERCARD",
                  type: "online",
                },
              ].map((item, index) => (
                <FormControlLabel
                  key={index}
                  value={JSON.stringify(item)}
                  control={<Radio />}
                  label={
                    <Stack direction="row" alignItems="center" gap="12px">
                      <Icon
                        icon={
                          item.type === "offline"
                            ? "streamline-ultimate-color:cash-payment-bills-1"
                            : "logos:visaelectron"
                        }
                        width="24"
                        height="24"
                      />
                      <Typography>{item.name}</Typography>
                    </Stack>
                  }
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          gap="20px"
          justifyContent="end"
        >
          <Button
            sx={{
              borderRadius: "40px",
              minWidth: 140,
            }}
            size="large"
            variant="outlined"
            onClick={() => {
              handleClose();
            }}
          >
            Hủy
          </Button>
          <Button
            sx={{
              borderRadius: "40px",
              minWidth: 140,
            }}
            size="large"
            variant="contained"
            onClick={async () => {
              await action(form);
              handleClose();
            }}
          >
            Tiếp tục
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default PaymentTypeModal;
