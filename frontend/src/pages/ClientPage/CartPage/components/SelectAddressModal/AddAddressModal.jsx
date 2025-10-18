import { getAllCities } from "@/store/cities/action";
import { addNewAddress } from "@/store/users/action";
import { Icon } from "@iconify/react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  OutlinedInput,
  Radio,
  Select,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const AddAddressModal = ({ open, handleClose }) => {
  const [form, setForm] = React.useState({
    name: "",
    phone: "",
    province: "",
    district: "",
    ward: "",
    street_address: "",
    default: false,
  });
  const dispatch = useDispatch();
  const { cities } = useSelector((store) => store.cities);
  const [districts, setDistricts] = React.useState([]);
  const [wards, setWards] = React.useState([]);

  React.useEffect(() => {
    dispatch(getAllCities());
  }, []);

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
        <Grid
          container
          rowSpacing="12px"
          columnSpacing="24px"
          paddingY="20px"
          sx={{
            borderBottomWidth: 1,
            borderColor: "divider",
          }}
        >
          {/* Tên và số điện thoai */}
          <Grid size={6}>
            <OutlinedInput
              fullWidth
              placeholder="Số điện thoại"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </Grid>
          <Grid size={6}>
            <OutlinedInput
              fullWidth
              placeholder="Tên"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </Grid>
          {/*  */}
          {/* Tỉnh thành */}
          <Grid size={12}>
            <FormControl fullWidth>
              <InputLabel>Tỉnh / Thành</InputLabel>
              <Select
                label="Tỉnh / Thành"
                value={form.province}
                onChange={(e) => {
                  setForm({ ...form, province: e.target.value });
                  setDistricts(
                    cities.filter((it) => it.name === e.target.value)[0]
                      .districts
                  );
                }}
              >
                {cities.map((item, index) => (
                  <MenuItem key={index} value={item.name}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          {/*  */}
          {/* Quận huyện */}
          <Grid size={12}>
            <FormControl fullWidth disabled={districts.length === 0}>
              <InputLabel>Quận / Huyện</InputLabel>
              <Select
                label="Quận / Huyện"
                value={form.district}
                onChange={(e) => {
                  setForm({ ...form, district: e.target.value });
                  setWards(
                    districts.filter((it) => it.name === e.target.value)[0]
                      .wards
                  );
                }}
              >
                {districts?.map((item, index) => (
                  <MenuItem key={index} value={item.name}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          {/*  */}
          {/* Phường xã */}
          <Grid size={12}>
            <FormControl fullWidth disabled={wards.length === 0}>
              <InputLabel>Phường / Xã</InputLabel>
              <Select
                label="Phường / Xã"
                value={form.ward}
                onChange={(e) => {
                  setForm({ ...form, ward: e.target.value });
                }}
              >
                {wards?.map((item, index) => (
                  <MenuItem key={index} value={item.name}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          {/*  */}
          {/* Tên đường */}
          <Grid size={12}>
            <OutlinedInput
              placeholder="Số nhà + Tên đường"
              disabled={form.ward === ""}
              fullWidth
              value={form.street_address}
              onChange={(e) =>
                setForm({ ...form, street_address: e.target.value })
              }
            />
          </Grid>
          {/*  */}
        </Grid>
        <Stack
          direction="row"
          alignItems="center"
          sx={{
            paddingTop: "12px",
            paddingBottom: "20px",
          }}
        >
          <Typography color="text.secondary">
            Đặt làm địa chỉ mặt định
          </Typography>
          <div className="flex-1"></div>
          <Switch
            checked={form.default}
            onChange={(e) => setForm({ ...form, default: e.target.checked })}
          />
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
              await dispatch(addNewAddress(form));
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

export default AddAddressModal;
