import ProductCard from "@/components/productCard";
import getParamToObject from "@/Function/getParamToObject";
import { getCategoryById } from "@/store/categories/action";
import { Icon } from "@iconify/react";
import {
  Breadcrumbs,
  Button,
  ButtonBase,
  Checkbox,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  List,
  MenuItem,
  OutlinedInput,
  Pagination,
  Popover,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";

const CategoryProductsPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { id } = useParams();
  const { category, meta } = useSelector((store) => store.categories);
  const [openShowPopover, setOpenShowPopover] = React.useState(null);
  const objectParam = getParamToObject(location.search);
  const [searchParams, setSearchParams] = useSearchParams();

  React.useEffect(() => {
    dispatch(getCategoryById(id));
  }, [id]);

  React.useEffect(() => {
    console.log(category);
    console.log(meta);
  }, [category]);

  return (
    <Stack
      sx={{
        paddingX: "120px",
        backgroundColor: "background.neutral",
        paddingBottom: "40px",
        gap: "20px",
      }}
    >
      <Stack>
        <Breadcrumbs
          separator={
            <Icon
              icon="solar:alt-arrow-right-line-duotone"
              width="16"
              height="16"
            />
          }
          sx={{
            paddingY: "4px",
          }}
        >
          <Typography variant="captiontext">Trang chủ</Typography>
          {category.ancestors?.map((item) => (
            <Link to={"/danh-muc/" + item.url}>
              <Typography variant="captiontext">{item.name}</Typography>
            </Link>
          ))}
        </Breadcrumbs>
        <Stack
          sx={{
            backgroundColor: "background.paper",
            boxShadow: "custom.shadow",
            padding: "12px 20px",
            gap: "20px",
            flexDirection: "row",
          }}
        >
          {category.brands?.slice(0, 7).map((item, index) => (
            <img
              key={index}
              src={item.logo}
              className="w-[150px] h-[70px] cursor-pointer"
              onClick={() => {
                searchParams.set("brand", item.url);
                setSearchParams(searchParams);
              }}
            />
          ))}
        </Stack>
      </Stack>
      <Grid
        container
        sx={{
          backgroundColor: "background.paper",
          boxShadow: "custom.card",
          "& .grid__section": {
            padding: "12px",
            "&:first-child": {
              borderRightWidth: "2px",
              borderColor: "divider",
            },
          },
        }}
      >
        <Grid size={2} className="grid__section">
          <Stack
            sx={{
              gap: "12px",
            }}
          >
            <Typography variant="subtitle1" textTransform="uppercase">
              {category.families?.parent?.name}
            </Typography>
            <Stack
              sx={{
                gap: "4px",
                paddingRight: "20px",
              }}
            >
              {category.families?.brother.map((item) => (
                <Stack>
                  <Link
                    key={item.id}
                    to={item.product_count !== 0 && "/danh-muc/" + item.url}
                    style={{
                      cursor: item.product_count === 0 && "default",
                    }}
                  >
                    <Typography
                      variant={item.id === category.id ? "subtitle2" : "body2"}
                      color={item.id === category.id && "primary.main"}
                    >
                      {item.name}
                    </Typography>
                  </Link>
                  <Stack
                    sx={{
                      gap: "4px",
                      paddingLeft: "12px",
                    }}
                  >
                    {item.id === category.id &&
                      category.families?.children.map((item) => (
                        <Link
                          key={item.id}
                          to={
                            item.product_count !== 0 && "/danh-muc/" + item.url
                          }
                          style={{
                            cursor: item.product_count === 0 && "default",
                          }}
                        >
                          <Typography
                            variant={
                              item.id === category.id ? "subtitle2" : "body2"
                            }
                            color={item.id === category.id && "primary.main"}
                          >
                            {item.name}
                          </Typography>
                        </Link>
                      ))}
                  </Stack>
                </Stack>
              ))}
            </Stack>
            <Typography variant="subtitle1" textTransform="uppercase">
              Khoảng giá
            </Typography>
            <Stack gap="8px">
              <Stack direction="row" gap="12px" alignItems="center">
                <OutlinedInput
                  sx={{
                    flex: 1,
                  }}
                  size="small"
                  placeholder="Từ"
                />
                -
                <OutlinedInput
                  sx={{
                    flex: 1,
                  }}
                  size="small"
                  placeholder="Đến"
                />
              </Stack>
              <Button variant="contained" color="secondary">
                Áp dụng
              </Button>
            </Stack>
            <Divider />
            <Typography variant="subtitle1" textTransform="uppercase">
              Thương hiệu
            </Typography>
            <Stack
              sx={{
                gap: "8px",
                maxHeight: 280,
                overflowY: "auto",
              }}
            >
              {category.brands?.map((item) => (
                <Stack
                  key={item.id}
                  direction="row"
                  justifyContent="start"
                  alignItems="center"
                  gap="8px"
                >
                  <Checkbox size="small" sx={{ padding: 0 }} />
                  <Typography variant="body2">{item.name}</Typography>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Grid>
        <Grid size={10} className="grid__section">
          <Stack
            sx={{
              gap: "8px",
            }}
          >
            <Stack direction="row" alignItems="center" gap="8px">
              <Typography variant="h6">{category.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                ({category.product_count} sản phẩm)
              </Typography>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              gap="8px"
              sx={{
                backgroundColor: "background.neutral",
                padding: "4px 12px",
              }}
            >
              <Typography variant="body2">Sắp xếp</Typography>
              {[
                { name: "Mới nhất", to: "new" },
                { name: "Bán chạy", to: "top_sale" },
                { name: "Giá thấp đến cao", to: "price_asc" },
                { name: "Giá cao đến thấp", to: "price_desc" },
              ].map((item, index) => (
                <Typography
                  variant="body2"
                  key={index}
                  sx={{
                    padding: "2px 6px",
                    bgcolor:
                      searchParams.get("sort") === item.to
                        ? "primary.main"
                        : "background.paper",
                    color:
                      searchParams.get("sort") === item.to
                        ? "background.paper"
                        : "text.primary",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    searchParams.set("sort", item.to);
                    setSearchParams(searchParams);
                  }}
                >
                  {item.name}
                </Typography>
              ))}
              <div className="flex-1"></div>
              <ButtonBase
                direction="row"
                sx={{
                  padding: "2px 6px",
                  bgcolor: "background.paper",
                  alignItems: "center",
                  gap: "4px",
                }}
                onClick={(e) => setOpenShowPopover(e.currentTarget)}
              >
                <Typography variant="body2">
                  Hiển thị: {searchParams.get("limit") || 40}
                </Typography>
                <Icon icon="solar:alt-arrow-down-bold" width="18" height="18" />
              </ButtonBase>
            </Stack>
            <Grid container spacing="29px">
              {category?.products?.map((item) => (
                <Grid size={3} key={item.id}>
                  <Stack
                    sx={{
                      "&:hover": {
                        outlineWidth: 1,
                        outlineColor: "secondary.main",
                        outlineStyle: "solid",
                      },
                    }}
                  >
                    <ProductCard item={item} />
                  </Stack>
                </Grid>
              ))}
              <Grid size={12}>
                <Stack alignItems="center">
                  <Pagination count={meta?.last_page} />
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Grid>
      </Grid>
      <Popover
        open={Boolean(openShowPopover)}
        anchorEl={openShowPopover}
        onClose={() => setOpenShowPopover(null)}
        anchorOrigin={{
          horizontal: "right",
          vertical: "bottom",
        }}
        transformOrigin={{
          horizontal: "right",
        }}
      >
        <List>
          <MenuItem
            onClick={() => {
              searchParams.set("limit", 40);
              setSearchParams(searchParams);
              setOpenShowPopover(null);
            }}
          >
            Hiển thị: 40
          </MenuItem>
          <MenuItem
            onClick={() => {
              searchParams.set("limit", 60);
              setSearchParams(searchParams);
              setOpenShowPopover(null);
            }}
          >
            Hiển thị: 60
          </MenuItem>
        </List>
      </Popover>
    </Stack>
  );
};

export default CategoryProductsPage;
