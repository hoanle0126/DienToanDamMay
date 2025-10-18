import React from "react";
import { usePrevNextButtons } from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import "./style.css";
import { alpha, Box, ButtonBase, Stack } from "@mui/material";
import { Icon } from "@iconify/react";
import { MuiTheme } from "@/theme";

const EmblaCarousel = ({ lists, options, children, size, spacing }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <Box
      sx={{
        "&:hover": {
          ".controller": {
            display: "flex",
          },
        },
      }}
      className="embla"
    >
      <div className="embla__viewport" ref={emblaRef}>
        <Box
          className={`embla__container`}
          sx={{
            marginLeft: `calc(${spacing || "0px"} * -1)`,
          }}
        >
          {lists.map((item, index) => (
            <Stack
              sx={{
                flex: `0 0 calc(100%/${size || 1})`,
                paddingLeft: spacing || "0px",
              }}
              className="embla__slide  "
              key={index}
            >
              {children(item)}
            </Stack>
          ))}
        </Box>
      </div>
      <Stack
        sx={{
          flexDirection: "row",
          position: "absolute",
          top: 0,
          height: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          display: "none",
        }}
        className="controller"
      >
        <ButtonBase
          sx={{
            backgroundColor: alpha(MuiTheme().palette.text.primary, 0.4),
            padding: "6px 2px",
            borderTopRightRadius: "8px",
            borderBottomRightRadius: "8px",
            color: "background.paper",
          }}
        >
          <Icon
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
            icon="solar:alt-arrow-left-linear"
            width="28"
            height="28"
          />
        </ButtonBase>
      </Stack>
      <Stack
        sx={{
          flexDirection: "row",
          position: "absolute",
          top: 0,
          right: 0,
          height: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          display: "none",
        }}
        className="controller"
      >
        <ButtonBase
          sx={{
            backgroundColor: alpha(MuiTheme().palette.text.primary, 0.4),
            padding: "6px 2px",
            borderTopLeftRadius: "8px",
            borderBottomLeftRadius: "8px",
            color: "background.paper",
          }}
        >
          <Icon
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            icon="solar:alt-arrow-right-linear"
            width="28"
            height="28"
          />
        </ButtonBase>
      </Stack>
    </Box>
  );
};

export default EmblaCarousel;
