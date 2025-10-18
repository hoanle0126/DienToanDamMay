import { formatCurrency } from "@/Function/formatCurrency";
import { getAllProducts } from "@/store/products/action";
import { Icon } from "@iconify/react";
import {
  alpha,
  Button,
  ButtonBase,
  CircularProgress,
  Grid,
  IconButton,
  InputAdornment,
  Modal,
  OutlinedInput,
  Pagination,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SortMenu from "./SortMenu";
import FilterMenu from "./FilterMenu";

const SelectProductModal = ({ open, handleClose, action, excluding }) => {
  const dispatch = useDispatch();
  const { products, loading, meta } = useSelector((store) => store.products);
  const [page, setPage] = React.useState(1);
  const [searchValue, setSearchValue] = React.useState("");
  const [isTyping, setIsTyping] = React.useState(false);
  const [openSort, setOpenSort] = React.useState(null);
  const [openFilter, setOpenFilter] = React.useState(null);
  const [selected, setSelected] = React.useState([]);
  const [filterForm, setFilterForm] = React.useState({
    asc: true,
    sort: {},
  });

  React.useEffect(() => {
    dispatch(
      getAllProducts({
        paginate: 12,
        page: page,
        search: "",
        excluding: excluding,
      })
    );
  }, [page, open]);

  // React.useEffect(() => {
  //   if (searchValue === "") {
  //     setIsTyping(false);
  //     dispatch(
  //       getAllProducts({
  //         paginate: 12,
  //         page: page,
  //         search: "",
  //         excluding: excluding,
  //       })
  //     );
  //     return;
  //   }
  //   setIsTyping(true);
  //   const timeout = setTimeout(() => {
  //     setIsTyping(false);
  //     dispatch(
  //       getAllProducts({
  //         paginate: 12,
  //         page: page,
  //         search: searchValue,
  //         excluding: excluding,
  //       })
  //     );
  //   }, 500);
  //   return () => clearTimeout(timeout);
  // }, [searchValue]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{ backgroundColor: "text.primary" }}
    >
      <Stack
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 1200,
          bgcolor: "background.paper",
          borderRadius: "12px",
          boxShadow: 24,
          p: "20px",
          gap: "12px",
          overflowY: "auto",
          overflowX: "hidden",
          alignItems: "center",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="start"
          width="100%"
        >
          <Typography variant="h6">
            Discount Code (Click product to select)
          </Typography>
          <Icon
            icon="eva:close-outline"
            width="24"
            height="24"
            onClick={handleClose}
            className="cursor-pointer"
          />
        </Stack>
        <Stack
          sx={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <OutlinedInput
            sx={{
              width: 500,
            }}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            startAdornment={
              <InputAdornment>
                {isTyping ? (
                  <CircularProgress size={18} className="mr-[12px]" />
                ) : (
                  <Icon
                    icon="eva:search-fill"
                    width="24"
                    height="24"
                    className="mr-[12px]"
                  />
                )}
              </InputAdornment>
            }
            size="small"
            placeholder="Seach product by name"
          />
          <div className="flex-1"></div>
          <Button
            size="small"
            onClick={(e) => setOpenFilter(e.currentTarget)}
            startIcon={<Icon icon="solar:filter-bold" />}
          >
            Filter
          </Button>
          <IconButton
            size="small"
            color="primary"
            onClick={() =>
              setFilterForm({ ...filterForm, asc: !filterForm.asc })
            }
          >
            <Icon
              icon={
                filterForm.asc
                  ? "solar:sort-from-bottom-to-top-bold"
                  : "solar:sort-from-top-to-bottom-bold"
              }
            />
          </IconButton>
          <Button size="small" onClick={(e) => setOpenSort(e.currentTarget)}>
            {filterForm.sort.name || "Sort"}
          </Button>
        </Stack>
        <Grid container spacing="12px">
          {loading
            ? Array.from({ length: 12 }).map((item) => (
                <Grid size={2} key={item}>
                  <Skeleton
                    variant="rounded"
                    sx={{
                      width: 180,
                      height: 260,
                    }}
                  />
                </Grid>
              ))
            : products.map((item, index) => (
                <Grid size={2} key={index}>
                  <ButtonBase
                    sx={{
                      width: "100%",
                      boxShadow: "custom.card",
                      padding: "8px",
                      gap: "4px",
                      borderRadius: "12px",
                      flexDirection: "column",
                      alignItems: "start",
                      position: "relative",
                      "&::before": selected.includes(item)
                        ? {
                            content: "''",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "primary.light",
                            opacity: 0.3,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "contain",
                            backgroundImage:
                              "url(https://png.pngtree.com/png-clipart/20230404/original/pngtree-tick-icon-vector-symbol-green-checkmark-isolated-transparent-background-png-image_9024769.png)",
                          }
                        : {},
                    }}
                    onClick={() => {
                      setSelected((prev) =>
                        prev.includes(item)
                          ? prev.filter((it) => it !== item)
                          : [...selected, item]
                      );
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
                      variant="body2"
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
                    <Typography variant="subtitle2" color="secondary.main">
                      {formatCurrency(item.price)}
                    </Typography>
                  </ButtonBase>
                </Grid>
              ))}
        </Grid>
        <Stack direction="row" width="100%" gap="12px">
          <Pagination
            count={meta.last_page || 5}
            page={page}
            onChange={(e, value) => setPage(value)}
          />
          <div className="flex-1"></div>
          <Button
            variant="contained"
            onClick={() => {
              action(selected);
              setSelected([]);
              handleClose();
            }}
          >
            Add products
          </Button>
        </Stack>
        <SortMenu
          open={Boolean(openSort)}
          anchorEl={openSort}
          handleClose={() => setOpenSort(null)}
          action={(menuValue) => {
            setFilterForm({ ...filterForm, sort: menuValue });
          }}
        />
        <FilterMenu
          open={Boolean(openFilter)}
          anchorEl={openFilter}
          handleClose={() => setOpenFilter(null)}
        />
      </Stack>
    </Modal>
  );
};

export default SelectProductModal;
