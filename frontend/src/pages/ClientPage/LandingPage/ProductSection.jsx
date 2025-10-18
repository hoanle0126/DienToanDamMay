import ProductCard from "@/components/productCard";
import { getAllProducts } from "@/store/products/action";
import { MuiTheme } from "@/theme";
import { Icon } from "@iconify/react";
import {
  alpha,
  Box,
  Button,
  Grid,
  LinearProgress,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductSection = () => {
  const [tabValue, setTabValue] = React.useState(0);
  const dispatch = useDispatch();
  const { products, loading } = useSelector((store) => store.products);
  const [paginate, setPaginate] = React.useState(18);

  React.useEffect(() => {
    dispatch(getAllProducts(paginate));
  }, [paginate]);

  return (
    <Stack>
      <Stack
        direction="row"
        gap="12px"
        bgcolor="background.neutral"
        paddingX="120px"
      >
        {[
          {
            icon: "https://media.hcdn.vn/hsk/icon/v4/for_you.png",
            title: "Gợi ý cho bạn",
            value: 0,
          },
          {
            icon: "https://media.hcdn.vn/hsk/icon/v4/nowfree.png",
            title: "Giao 2h",
            value: 1,
          },
        ].map((item, index) => (
          <Stack
            onClick={() => setTabValue(item.value)}
            key={index}
            alignItems="center"
            gap="4px"
            padding="12px 40px"
            bgcolor={tabValue === item.value && "background.paper"}
            sx={{
              borderTopLeftRadius: "20px",
              borderTopRightRadius: "20px",
              border: "1px solid black",
              borderColor: tabValue === item.value ? "divider" : "transparent",
              borderBottomWidth: "2px",
              borderBottomColor:
                tabValue === item.value ? "secondary.main" : "transparent",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "background.paper",
                borderBottomColor: "secondary.main",
              },
            }}
          >
            <img src={item.icon} alt="" className="size-[50px]" />
            <Typography variant="body1">{item.title}</Typography>
          </Stack>
        ))}
      </Stack>
      <Stack
        sx={{
          borderTop: "1px solid black",
          borderTopColor: "divider",
          paddingX: "120px",
          paddingY: "16px",
        }}
      >
        <Grid container spacing="16px">
          {products.map((item, index) => (
            <Grid size={2} key={index}>
              <Stack
                sx={{
                  borderWidth: "1px",
                  borderColor: "divider",
                  borderRadius: "16px",
                  overflow: "hidden",
                }}
              >
                <ProductCard item={item} />
              </Stack>
            </Grid>
          ))}
        </Grid>
        <Stack alignItems="center" marginTop="20px">
          <Button
            variant="outlined"
            size="large"
            sx={{
              textTransform: "capitalize",
              padding: "8px 40px",
              borderRadius: "20px",
              fontWeight: 600,
            }}
            onClick={() => setPaginate((prev) => prev + 6)}
            loading={loading}
          >
            Xem Thêm
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProductSection;
