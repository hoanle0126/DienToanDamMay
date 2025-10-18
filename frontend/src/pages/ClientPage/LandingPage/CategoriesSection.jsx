import EmblaCarousel from "@/components/carousel";
import { getCategoriesChildren } from "@/store/categories/action";
import { MuiTheme } from "@/theme";
import { Icon } from "@iconify/react";
import {
  alpha,
  Avatar,
  Box,
  ButtonBase,
  Stack,
  Typography,
} from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = React.useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = React.useState(true);

  const onPrevButtonClick = React.useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = React.useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = React.useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

const CategoriesSection = () => {
  const [listCategoriesRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });
  const dispatch = useDispatch();
  const { categoriesChildren } = useSelector((store) => store.categories);

  React.useEffect(() => {
    dispatch(getCategoriesChildren());
  }, []);
  const onNextButtonClick = React.useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onPrevButtonClick = React.useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  return (
    <Stack
      sx={{
        backgroundColor: "background.paper",
        padding: "16px",
        borderRadius: "16px",
        gap: "8px",
      }}
    >
      <Typography variant="h6" color="primary.main">
        Danh mục
      </Typography>
      <div className="w-full">
        {
          <EmblaCarousel
            lists={categoriesChildren}
            size={8}
            spacing="16px"
            options={{
              align: "start",
              loop: true,
            }}
          >
            {(item) => (
              <Stack
                sx={{
                  padding: "8px",
                  backgroundColor: "background.neutral",
                  borderRadius: "8px",
                  gap: "8px",
                  paddingBottom: "16px",
                  border: "1px solid black",
                  borderColor: "divider",
                  height:"100%",
                  width:"100%"
                }}
              >
                <div className="w-full aspect-square">
                  <img
                    src={item.thumbnail}
                    alt=""
                    className="size-full aspect-square"
                    variant="rounded"
                  />
                </div>
                <Typography
                  textAlign="center"
                  variant="body1"
                  sx={{
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    width: "120px",
                  }}
                >
                  {item.name}
                </Typography>
              </Stack>
            )}
          </EmblaCarousel>
        }
      </div>
    </Stack>
  );
};

export default CategoriesSection;
