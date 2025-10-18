import { MuiTheme } from "@/theme";
import React from "react";

const scrollbar = () => {
    return {
        width: "8px",
        height: "8px",
        "&-track": {
            borderRadius: "4px",
        },
        "&-thumb": {
            borderRadius: "4px",
            backgroundImage: `linear-gradient(to bottom, ${
                MuiTheme().palette.primary.main
            } , ${MuiTheme().palette.primary.dark})`,
            "&:hover": {
                background: MuiTheme().palette.primary.dark,
            },
        },
    };
};

export default scrollbar;
