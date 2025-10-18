import { Icon } from "@iconify/react";
import {
  Box,
  Button,
  Collapse,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Modal,
  Popover,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

export const ElementModal = ({
  open,
  onClose,
  action,
  elementTitle,
  elementValue,
}) => {
  const [param, setParam] = React.useState({
    title: elementTitle,
    value: elementValue || [""],
  });

  // Đồng bộ hóa state khi props thay đổi
  React.useEffect(() => {
    setParam({ title: elementTitle, value: elementValue });
  }, [elementTitle, elementValue]);

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          borderRadius: "20px",
          bgcolor: "background.paper",
          boxShadow: "custom.card",
          p: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Title"
          value={param.title}
          onChange={(e) => setParam({ ...param, title: e.target.value })}
        />
        {Array.isArray(param.value) &&
          param.value.map((valueItem, valueIndex) => (
            <Stack
              key={valueIndex}
              direction="row"
              alignItems="center"
              gap="8px"
            >
              <TextField
                id={`outlined-basic-${valueIndex}`}
                label="Value"
                value={valueItem}
                onChange={(e) => {
                  const newValue = [...param.value];
                  newValue[valueIndex] = e.target.value; // Cập nhật giá trị
                  setParam({ ...param, value: newValue });
                }}
                sx={{
                  flex: 1,
                }}
              />
            </Stack>
          ))}
        <Button
          color="common"
          variant="contained"
          size="large"
          onClick={() => {
            action(param);
            setParam({
              title: "",
              value: [""],
            });
            onClose();
          }}
        >
          Submit
        </Button>
      </Box>
    </Modal>
  );
};
