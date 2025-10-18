import ImageThumbnail from "@/components/ImageThumbnail";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const CategoriesModal = ({ open, handleClose, id, action, category }) => {
  const [categoryModel, setCategoryModel] = React.useState({
    name: "",
    thumbnail: "",
    type: "Heath & Beauty",
    children: [],
  });

  React.useEffect(() => {
    setCategoryModel(category);
  }, [category, open]);

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
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
          gap: "28px",
        }}
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Category
        </Typography>
        <Stack alignItems="start" justifyContent="start" gap="20px">
          <Stack>
            <Typography variant="subtitle1">Thumbnail</Typography>
            <ImageThumbnail
              src={categoryModel?.thumbnail}
              setSrc={(src) =>
                setCategoryModel({
                  ...categoryModel,
                  thumbnail: src,
                })
              }
              id={id}
            />
          </Stack>
          <TextField
            label="Name"
            fullWidth
            value={categoryModel?.name}
            onChange={(e) =>
              setCategoryModel({ ...categoryModel, name: e.target.value })
            }
          />
        </Stack>
        <Button
          variant="contained"
          onClick={() => {
            action(categoryModel);
            setCategoryModel({});
            handleClose();
          }}
        >
          Save
        </Button>
      </Stack>
    </Modal>
  );
};

export default CategoriesModal;
