import ProductCard from "@/components/productCard";
import getParamToObject from "@/Function/getParamToObject";
import { getBrandById } from "@/store/brands/action";
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

const BrandProductPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { id } = useParams();
  const { brand, meta, loading } = useSelector((store) => store.brands);
  const [searchParams, setSearchParams] = useSearchParams();
  const [openShowPopover, setOpenShowPopover] = React.useState(null);
  const [priceRange, setPriceRange] = React.useState({
    from: searchParams.get("price")?.split("-")[0],
    to: searchParams.get("price")?.split("-")[1],
  });

  React.useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(
      getBrandById({
        id: id,
        search: location.search,
      })
    );
  }, [location.search]);

  return (
    <Stack
      sx={{
        backgroundColor: "background.neutral",
        paddingBottom: "40px",
        gap: "12px",
      }}
    >
      <Stack
        sx={{
          backgroundColor: "background.paper",
          paddingX: "120px",
          boxShadow: "custom.card",
        }}
      >
        <Stack
          sx={{
            flexDirection: "row",
            paddingY: "20px",
            gap: "16px",
            img: {
              borderWidth: 1,
              borderColor: "divider",
            },
          }}
        >
          <img src={brand.logo} alt="" className="w-[124px] h-[60px]" />
          <Stack
            sx={{
              justifyContent: "space-between",
            }}
          >
            <Typography variant="subtitle2" color="primary.main">
              {brand.name}
            </Typography>
            <Typography variant="body2" lineHeight={1.3}>
              16plain là thương hiệu chăm sóc da từ Hàn Quốc, nổi bật với các
              dòng mặt nạ giấy phục hồi, dưỡng sáng và ngừa lão hóa, phù hợp mọi
              loại da. Với cam kết chất lượng và hiệu quả, thương 16plain đang
              trở thành lựa chọn số một của nhiều khách hàng yêu thích dưỡng da
              tại Việt Nam và trên thế giới.
            </Typography>
          </Stack>
        </Stack>
        <Stack justifyContent="start" direction="row">
          <Stack
            sx={{
              padding: "4px 20px",
              borderBottomWidth: "3px",
              typography: "subtitle2",
              color: "secondary.main",
              borderColor: "secondary.main",
            }}
          >
            Tất cả sản phẩm
          </Stack>
        </Stack>
      </Stack>
      <Stack
        sx={{
          paddingX: "120px",
        }}
      >
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
                    type="number"
                    value={priceRange.from}
                    onChange={(e) =>
                      setPriceRange({
                        ...priceRange,
                        from: e.target.value,
                      })
                    }
                  />
                  -
                  <OutlinedInput
                    sx={{
                      flex: 1,
                    }}
                    size="small"
                    placeholder="Đến"
                    value={priceRange.to}
                    onChange={(e) =>
                      setPriceRange({
                        ...priceRange,
                        to: e.target.value,
                      })
                    }
                  />
                </Stack>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    if (priceRange.to !== "" && priceRange.from !== "") {
                      searchParams.set(
                        "price",
                        [priceRange.from, priceRange.to].join("-")
                      );
                      setSearchParams(searchParams);
                    }
                  }}
                >
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
                {brand.brands?.map((item) => (
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
          {loading ? (
            "loading"
          ) : (
            <Grid size={10} className="grid__section">
              <Stack
                sx={{
                  gap: "8px",
                }}
              >
                <Stack
                  sx={{
                    backgroundColor: "background.neutral",
                    padding: "4px 12px",
                    gap: "8px",
                  }}
                >
                  {searchParams.get("price") && (
                    <Stack direction="row" alignItems="center" gap="8px">
                      <Typography variant="body2">Khoảng giá</Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          padding: "2px 6px",
                          bgcolor: "primary.main",
                          color: "background.paper",
                          cursor: "default",
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                        Giá: {searchParams.get("price")}{" "}
                        <Icon
                          icon="eva:close-fill"
                          width="16"
                          height="16"
                          className="cursor-pointer"
                          onClick={() => {
                            searchParams.delete("price");
                            setSearchParams(searchParams);
                            setPriceRange({
                              from: "",
                              to: "",
                            });
                          }}
                        />
                      </Typography>
                    </Stack>
                  )}
                  <Stack direction="row" alignItems="center" gap="8px">
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
                      <Icon
                        icon="solar:alt-arrow-down-bold"
                        width="18"
                        height="18"
                      />
                    </ButtonBase>
                  </Stack>
                </Stack>
                <Grid container spacing="29px">
                  {brand?.products?.map((item) => (
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
                      <Pagination
                        count={meta?.last_page}
                        page={Number(searchParams.get("page")) || 1}
                        onChange={(e, value) => {
                          searchParams.set("page", value);
                          setSearchParams(searchParams);
                        }}
                      />
                    </Stack>
                  </Grid>
                </Grid>
              </Stack>
            </Grid>
          )}
        </Grid>
      </Stack>
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

export default BrandProductPage;
