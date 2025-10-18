import React from "react";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  Tab,
  Tabs,
  Typography,
  Card,
  OutlinedInput,
  Grid,
  ButtonBase,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Avatar,
  TextField,
} from "@mui/material";
import { Icon } from "@iconify/react";
import ImageThumbnail from "@/components/ImageThumbnail";
import AdminDefaultLayout from "@/layouts/AdminLayout/DefaultLayout";
import { useDispatch } from "react-redux";
import { addNewBrand } from "@/store/brands/action";
import { useNavigate } from "react-router-dom";

const BrandAddPage = () => {
  const [brand, setBrand] = React.useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <AdminDefaultLayout title="Add brand">
      <Grid container spacing={"28px"} sx={{ paddingBottom: "12px" }}>
        <Grid size={3}>
          <Stack gap={"28px"}>
            <Paper
              sx={{
                boxShadow: "custom.card",
                borderRadius: "12px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                paddingBottom: "40px",
              }}
            >
              <Typography variant="h6">Thumbnail</Typography>
              <ImageThumbnail
                src={brand.thumbnail}
                setSrc={(src) =>
                  setBrand({
                    ...brand,
                    thumbnail: src,
                  })
                }
                id={"thumbnail"}
              />
              <Typography
                variant="captiontext"
                color={"text.disabled"}
                width={"90%"}
              >
                Set the category thumbnail image. Only *.png, *.jpg and *.jpeg
                image files are accepted
              </Typography>
            </Paper>
            <Paper
              sx={{
                boxShadow: "custom.card",
                borderRadius: "12px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                paddingBottom: "40px",
              }}
            >
              <Typography variant="h6">Logo</Typography>
              <ImageThumbnail
                height="100%"
                src={brand.logo}
                setSrc={(src) =>
                  setBrand({
                    ...brand,
                    logo: src,
                  })
                }
                id={"logo"}
              />
              <Typography
                variant="captiontext"
                color={"text.disabled"}
                width={"90%"}
              >
                Set the category thumbnail image. Only *.png, *.jpg and *.jpeg
                image files are accepted
              </Typography>
            </Paper>
          </Stack>
        </Grid>
        <Grid size={9}>
          <Stack
            sx={{
              paddingTop: "20px",
              gap: "28px",
              "& .MuiInputBase-input.MuiOutlinedInput-input": {
                fontSize: 14,
              },
            }}
          >
            <Card>
              <Stack gap={"20px"}>
                <Typography variant="h6">General</Typography>
                <Stack gap={"8px"}>
                  <Typography variant="subtitle2">Banner</Typography>
                  <ImageThumbnail
                    height="100%"
                    width="100%"
                    src={brand.banner}
                    setSrc={(src) =>
                      setBrand({
                        ...brand,
                        banner: src,
                      })
                    }
                    id={"banner"}
                  />
                  <Typography variant="captiontext" color={"text.disabled"}>
                    A category name is required and recommended to be unique.
                  </Typography>
                </Stack>
                <Stack gap={"8px"}>
                  <Typography variant="subtitle2">Tên danh mục</Typography>
                  <TextField
                    fullWidth
                    placeholder="Enter name"
                    value={brand.name}
                    onChange={(e) =>
                      setBrand({
                        ...brand,
                        name: e.target.value,
                      })
                    }
                  />
                  <Typography variant="captiontext" color={"text.disabled"}>
                    A category name is required and recommended to be unique.
                  </Typography>
                </Stack>
                <Stack gap={"8px"}>
                  <Typography variant="subtitle2">Description</Typography>
                  <TextField
                    fullWidth
                    placeholder="Enter description"
                    multiline
                    minRows={6}
                    value={brand.description}
                    onChange={(e) =>
                      setBrand({
                        ...brand,
                        description: e.target.value,
                      })
                    }
                  />
                  <Typography variant="captiontext" color={"text.disabled"}>
                    A category name is required and recommended to be unique.
                  </Typography>
                </Stack>
              </Stack>
            </Card>
          </Stack>
          <Stack
            sx={{
              flexFlow: "row",
              flexDirection: "row",
              justifyContent: "right",
              position: "sticky",
              bottom: 24,
              marginTop: "24px",
            }}
          >
            <Button
              variant="contained"
              color="common"
              sx={{ boxShadow: "main.z1" }}
              endIcon={<Icon icon="eva:save-fill" />}
              onClick={() => {
                dispatch(addNewBrand(brand));
                navigate("/admin/brands")
              }}
            >
              Save
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </AdminDefaultLayout>
  );
};

export default BrandAddPage;
