import { Icon } from "@iconify/react";

const ComponentsCustom = (shadows, palette, typography) => {
  return {
    MuiButton: {
      defaultProps: {
        style: {
          fontWeight: 600,
          textTransform: "none",
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "inherit" },
          style: {
            backgroundColor: palette.grey[900],
            color: palette.background.paper,
            "&:hover": {
              backgroundColor: palette.grey[700],
              boxShadow: shadows.color.custom,
            },
          },
        },
        {
          props: { variant: "contained", color: "secondary" },
          style: {
            color: palette.background.paper,
            "&:hover": {
              boxShadow: shadows.color.secondary,
            },
          },
        },
        {
          props: { variant: "outlined", color: "inherit" },
          style: {
            color: palette.background.onPaper,
            borderColor: palette.grey[400],
          },
        },
        {
          props: { size: "small" },
          style: {
            borderRadius: "0px",
            padding: "2px 8px",
            fontSize: typography.captiontext.fontSize,
          },
        },
        {
          props: { size: "medium" },
          style: {
            borderRadius: "0px",
            padding: "4px 12px",
            fontSize: typography.body2.fontSize,
          },
        },
        {
          props: { size: "large" },
          style: {
            borderRadius: "0px",
            padding: "8px 16px",
            fontSize: typography.h6.fontSize,
          },
        },
        {
          props: { size: "heading" },
          style: {
            borderRadius: "99px",
            padding: "12px 32px",
            fontSize: typography.h5.fontSize,
            "&:hover": {
              transform: "scale(1.02)",
            },
          },
        },
      ],
    },
    MuiPopper: {
      defaultProps: {
        sx: {
          "& .MuiPaper-root": {
            borderRadius: "8px",
            boxShadow: "custom.card",
            border: "1px solid",
            borderColor: "divider",
            "& .MuiList-root": {
              paddingX: "4px",
              paddingY: "4px",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              "& .MuiButtonBase-root.MuiMenuItem-root": {
                borderRadius: "8px",
                paddingX: "8px",
                gap: "12px",
                fontSize: "14px",
                lineHeight: "22px",
                fontWeight: "400",
                letterSpacing: 0,
              },
            },
          },
        },
      },
    },
    MuiPopover: {
      defaultProps: {
        sx: {
          "& .MuiPaper-root": {
            borderRadius: "8px",
            boxShadow: "custom.card",
            border: "1px solid",
            borderColor: "divider",
            "& .MuiList-root": {
              paddingX: "4px",
              paddingY: "4px",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              "& .MuiButtonBase-root.MuiMenuItem-root": {
                borderRadius: "8px",
                paddingX: "8px",
                gap: "12px",
                fontSize: "14px",
                lineHeight: "22px",
                fontWeight: "400",
                letterSpacing: 0,
              },
              "& svg": {
                width: "14px",
                height: "14px",
              },
            },
          },
        },
      },
    },
    MuiCard: {
      defaultProps: {
        sx: {
          boxShadow: "custom.card",
          padding: "20px",
          borderRadius: "12px",
        },
      },
    },
  };
};

export default ComponentsCustom;
