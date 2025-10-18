import { MuiTheme } from "@/theme";
import React from "react";

const embla = () => {
    return {
        "&__viewport": {
            overflow: "hidden",
            borderRadius: "16px",
            position: "relative",
        },
        "&__container": {
            display: "flex",
        },
        "&__slide": {
            flex: "0 0 100%",
        },
        "&-thumbs": {
            "&__viewport": {
                overflow: "hidden",
                width: "56%",
                marginTop: "24px",
            },
            "&__container": {
                display: "flex",
                gap: "12px",
            },
            "&__slide": {
                width: "66px",
                cursor: "pointer",
                aspectRatio: "1/1",
                borderRadius: "12px",
                transitionDuration: "300ms",
                opacity: 0.5,
                border: "2px solid transparent",
                "&.selected": {
                    opacity: 1,
                    border: "2px solid black",
                    borderColor: MuiTheme().palette.primary.main,
                },
            },
        },
    };
};

export default embla;
