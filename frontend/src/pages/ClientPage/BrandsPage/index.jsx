import { getAllBrands } from "@/store/brands/action";
import { Icon } from "@iconify/react";
import {
  Box,
  Breadcrumbs,
  Button,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BrandClientPage = () => {
  const dispatch = useDispatch();
  const { brands, loading } = useSelector((store) => store.brands);
  const [brandGroups, setBrandGroups] = React.useState([]);
  const [scrollToUp, setScrollToUp] = React.useState(false);
  const brandRefs = React.useRef([]);

  React.useEffect(() => {
    dispatch(
      getAllBrands({
        onSuccess: (data) => {
          setBrandGroups(
            data.reduce((list, item) => {
              const firstLetter = /^\d$/.test(item.name[0])
                ? "0-9"
                : item.name[0].toUpperCase();

              const existing = list.find(
                (it) => it.firstLetter === firstLetter
              );
              if (existing) {
                existing.items.push(item);
              } else {
                list.push({
                  firstLetter: firstLetter,
                  items: [item],
                });
              }

              return list;
            }, [])
          );
        },
      })
    );
  }, []);

  React.useEffect(() => {
    console.log("Groups", brandGroups);
    brandRefs.current = brandGroups.map(
      (_, i) => brandRefs.current[i] ?? React.createRef()
    );
  }, [brandGroups]);

  React.useState(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setScrollToUp(true);
      } else {
        setScrollToUp(false);
      }
    });
  }, []);

  return (
    <Stack
      sx={{
        paddingX: "120px",
        paddingBottom: "40px",
      }}
    >
      <Breadcrumbs
        separator={
          <Icon
            icon="solar:alt-arrow-right-line-duotone"
            width="16"
            height="16"
          />
        }
        sx={{
          paddingY: "8px",
        }}
      >
        <Typography variant="captiontext">Trang chủ</Typography>
        <Link to={"/danh-muc/"}>
          <Typography variant="captiontext">Thương hiệu</Typography>
        </Link>
      </Breadcrumbs>
      <Stack
        sx={{
          gap: "12px",
        }}
      >
        <Typography variant="h6">Xem {brands?.length} thương hiệu</Typography>
        <Stack
          direction="row"
          gap="28px"
          sx={{
            padding: "12px 20px",
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: "divider",
          }}
        >
          {brandGroups?.map((item, index) => (
            <Typography
              fontSize="h4.fontSize"
              key={item.firstLetter}
              className="cursor-pointer"
              onClick={() => {
                brandRefs.current[index].current.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              {item.firstLetter}
            </Typography>
          ))}
        </Stack>
        {brandGroups?.map((groups, index) => (
          <React.Fragment key={groups.firstLetter}>
            <Stack
              sx={{
                typography: "h6",
                paddingBottom: "8px",
                borderBottomWidth: "1px",
                borderColor: "divider",
              }}
              ref={brandRefs.current[index]}
            >
              {groups.firstLetter}
            </Stack>
            <Grid container columnSpacing="20px" rowSpacing="40px">
              {groups.items.map((item) => (
                <Grid size={2} key={item.id}>
                  <Link to={"/thuong-hieu/" + item.url}>
                    <Stack
                      sx={{
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                        }}
                      >
                        <img
                          src={item.thumbnail}
                          alt=""
                          className="w-full aspect-square"
                        />
                        <img
                          src={item.logo}
                          alt=""
                          className="absolute bottom-[12px] left-[12px] w-[140px] h-[70px]"
                        />
                      </Box>
                      {item.name}
                    </Stack>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </React.Fragment>
        ))}
      </Stack>
      {scrollToUp && (
        <IconButton
          sx={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 1000,
            color: "background.paper",
            backgroundColor: "text.secondary",
            "&:hover": {
              backgroundColor: "text.primary",
            },
          }}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <Icon icon="solar:alt-arrow-up-line-duotone" />
        </IconButton>
      )}
    </Stack>
  );
};

export default BrandClientPage;
