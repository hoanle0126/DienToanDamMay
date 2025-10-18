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
import CategoriesModal from "./CategoriesModal";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryById, updateCategory } from "@/store/categories/action";
import { useNavigate, useParams } from "react-router-dom";

const HeathyBeautyViewPage = () => {
  const [category, setCategory] = React.useState({
    name: "",
    thumbnail: "",
    children: [
      {
        name: "demo",
        thumbnail: "",
        children: [],
      },
    ],
  });
  const dispatch = useDispatch();
  const categoriesReducer = useSelector((store) => store.categories);
  const [categoryData, setCategoryData] = React.useState({});
  const [openModal, setOpenModal] = React.useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    console.log("id", id);
    dispatch(getCategoryById(id));
  }, []);

  React.useEffect(() => {
    console.log("categories", categoriesReducer.category);
    setCategory(categoriesReducer.category);
  }, [categoriesReducer.loading]);

  return (
    <AdminDefaultLayout title="Add category">
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
                src={category.thumbnail}
                setSrc={(src) =>
                  setCategory({
                    ...category,
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
                  <Typography variant="subtitle2">Tên danh mục</Typography>
                  <TextField
                    fullWidth
                    placeholder="Enter name"
                    value={category.name}
                    onChange={(e) =>
                      setCategory({
                        ...category,
                        name: e.target.value,
                      })
                    }
                  />
                  <Typography variant="captiontext" color={"text.disabled"}>
                    A category name is required and recommended to be unique.
                  </Typography>
                </Stack>
              </Stack>
            </Card>
            <Card>
              <Stack gap={"20px"}>
                <Typography variant="h6">Children</Typography>
                <Stack gap={"8px"}>
                  <List
                    sx={{
                      padding: 0,
                    }}
                  >
                    {category.children?.map((item, index) => (
                      <React.Fragment key={index}>
                        <Stack direction="row" alignItems="center" gap="12px">
                          <ListItemButton>
                            <ListItemIcon>
                              <Avatar
                                src={item?.thumbnail}
                                sx={{
                                  width: "32px",
                                  height: "32px",
                                }}
                              />
                            </ListItemIcon>
                            <ListItemText primary={item.name} />
                          </ListItemButton>
                          <IconButton
                            onClick={() => {
                              setOpenModal(item.id + "update");
                              setCategoryData(item);
                            }}
                          >
                            <Icon
                              icon="solar:pen-2-bold"
                              width="24"
                              height="24"
                            />
                          </IconButton>
                          <IconButton
                            onClick={() => {
                              let startCategory = category.children.slice(
                                0,
                                index
                              );
                              let endCategory = category.children.slice(
                                index + 1,
                                category.children.length
                              );
                              setCategory({
                                ...category,
                                children: startCategory.concat(endCategory),
                              });
                            }}
                          >
                            <Icon
                              icon="solar:trash-bin-minimalistic-bold"
                              width="24"
                              height="24"
                            />
                          </IconButton>
                          <CategoriesModal
                            open={openModal === item.id + "update"}
                            handleClose={() => setOpenModal(false)}
                            id={"categoriesChildren"}
                            category={categoryData}
                            action={(modalValue) => {
                              let startCategory = category.children.slice(
                                0,
                                index
                              );
                              let endCategory = category.children.slice(
                                index + 1,
                                category.children.length
                              );
                              let newCategory = {
                                ...modalValue,
                                children: item.children,
                              };
                              setCategory({
                                ...category,
                                children: startCategory
                                  .concat(newCategory)
                                  .concat(endCategory),
                              });
                            }}
                          />
                        </Stack>
                        <Collapse in={true} timeout="auto" unmountOnExit>
                          <List
                            sx={{
                              pl: "20px",
                            }}
                          >
                            {item?.children?.length > 0 &&
                              item.children.map((itemChild, indexChild) => (
                                <Stack
                                  key={indexChild}
                                  direction="row"
                                  alignItems="center"
                                  gap="12px"
                                >
                                  <ListItemButton key={indexChild}>
                                    <ListItemIcon>
                                      <Avatar
                                        src={itemChild?.thumbnail}
                                        sx={{
                                          width: "32px",
                                          height: "32px",
                                        }}
                                      />
                                    </ListItemIcon>
                                    <ListItemText
                                      primary={
                                        <Typography variant="body2">
                                          {itemChild.name}
                                        </Typography>
                                      }
                                    />
                                  </ListItemButton>
                                  <IconButton
                                    onClick={() => {
                                      setCategoryData(itemChild);
                                      setOpenModal(itemChild.id);
                                    }}
                                  >
                                    <Icon
                                      icon="solar:pen-2-bold"
                                      width="24"
                                      height="24"
                                    />
                                  </IconButton>
                                  <IconButton
                                    onClick={() => {
                                      let startCategory =
                                        category.children.slice(0, index);
                                      let endCategory = category.children.slice(
                                        index + 1,
                                        category.children.length
                                      );
                                      let startChildren = item.children.slice(
                                        0,
                                        indexChild
                                      );
                                      let endChildren = item.children.slice(
                                        indexChild + 1,
                                        item.children.length
                                      );
                                      let newItem = {
                                        ...item,
                                        children:
                                          startChildren.concat(endChildren),
                                      };
                                      let newChildren = startCategory
                                        .concat(newItem)
                                        .concat(endCategory);
                                      setCategory({
                                        ...category,
                                        children: newChildren,
                                      });
                                    }}
                                  >
                                    <Icon
                                      icon="solar:trash-bin-minimalistic-bold"
                                      width="24"
                                      height="24"
                                    />
                                  </IconButton>
                                  <CategoriesModal
                                    open={openModal === itemChild.id}
                                    handleClose={() => setOpenModal(false)}
                                    id={itemChild.id}
                                    category={categoryData}
                                    action={(modalValue) => {
                                      let startCategory =
                                        category.children.slice(0, index);
                                      let endCategory = category.children.slice(
                                        index + 1,
                                        category.children.length
                                      );
                                      let startChildren = item.children.slice(
                                        0,
                                        indexChild
                                      );
                                      let endChildren = item.children.slice(
                                        indexChild + 1,
                                        item.children.length
                                      );
                                      let newItem = {
                                        ...item,
                                        children: startChildren
                                          .concat(modalValue)
                                          .concat(endChildren),
                                      };
                                      let newChildren = startCategory
                                        .concat(newItem)
                                        .concat(endCategory);
                                      setCategory({
                                        ...category,
                                        children: newChildren,
                                      });
                                    }}
                                  />
                                </Stack>
                              ))}
                            <Button
                              fullWidth
                              variant="outlined"
                              onClick={() => {
                                setCategoryData({
                                  name: "",
                                  thumbnail: "",
                                  type: "Category",
                                  children: [],
                                });
                                setOpenModal(item.id + "create");
                              }}
                            >
                              Add Categories
                            </Button>
                            <CategoriesModal
                              open={openModal === item.id + "create"}
                              handleClose={() => setOpenModal(false)}
                              id={item.id + "create"}
                              category={categoryData}
                              action={(modalValue) => {
                                let startCategory = category.children.slice(
                                  0,
                                  index
                                );
                                let endCategory = category.children.slice(
                                  index + 1,
                                  category.children.length
                                );
                                let newCategory = {
                                  ...item,
                                  children: [...item.children, modalValue],
                                };
                                let _category = startCategory
                                  .concat(newCategory)
                                  .concat(endCategory);
                                console.log("Children", _category);
                                setCategory({
                                  ...category,
                                  children: _category,
                                });
                              }}
                            />
                          </List>
                        </Collapse>
                      </React.Fragment>
                    ))}
                    <Button
                      fullWidth
                      variant="outlined"
                      onClick={() => setOpenModal(-2)}
                    >
                      Add Categories
                    </Button>
                    <CategoriesModal
                      open={openModal === -2}
                      handleClose={() => setOpenModal(false)}
                      id={-2}
                      category={{ name: "", thumbnail: "", type: "Category" }}
                      action={(modalValue) => {
                        console.log(modalValue);
                        setCategory({
                          ...category,
                          children: [...category.children, modalValue],
                        });
                      }}
                    />
                  </List>
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
              onClick={async () => {
                await dispatch(updateCategory(id, category));
                // navigate("/admin/categories/heathy-&-beauty");
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

export default HeathyBeautyViewPage;
