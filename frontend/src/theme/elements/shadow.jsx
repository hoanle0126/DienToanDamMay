import { alpha } from "@mui/material";

// ----------------------------------------------------------------------

export function Shadows(palette) {
    const color = "#000";
    const transparent1 = alpha(color, 0.2);
    const transparent2 = alpha(color, 0.14);
    const transparent3 = alpha(color, 0.12);
    const transparent4 = alpha(color, 0.16);
    const transparent5 = alpha(color, 0.24);
    const colorCard =
        palette.mode === "dark" ? transparent1 : "rgba(145, 158, 171, 0.2)";
    const colorCard2 =
        palette.mode === "dark" ? transparent3 : "rgba(145, 158, 171, 0.12)";

    return {
        main: [
            "none",
            `0px 2px 1px -1px ${transparent1},0px 1px 1px 0px ${transparent2},0px 1px 3px 0px ${transparent3}`,
            `0px 3px 1px -2px ${transparent1},0px 2px 2px 0px ${transparent2},0px 1px 5px 0px ${transparent3}`,
            `0px 3px 3px -2px ${transparent1},0px 3px 4px 0px ${transparent2},0px 1px 8px 0px ${transparent3}`,
            `0px 2px 4px -1px ${transparent1},0px 4px 5px 0px ${transparent2},0px 1px 10px 0px ${transparent3}`,
            `0px 3px 5px -1px ${transparent1},0px 5px 8px 0px ${transparent2},0px 1px 14px 0px ${transparent3}`,
            `0px 3px 5px -1px ${transparent1},0px 6px 10px 0px ${transparent2},0px 1px 18px 0px ${transparent3}`,
            `0px 4px 5px -2px ${transparent1},0px 7px 10px 1px ${transparent2},0px 2px 16px 1px ${transparent3}`,
            `0px 5px 5px -3px ${transparent1},0px 8px 10px 1px ${transparent2},0px 3px 14px 2px ${transparent3}`,
            `0px 5px 6px -3px ${transparent1},0px 9px 12px 1px ${transparent2},0px 3px 16px 2px ${transparent3}`,
            `0px 6px 6px -3px ${transparent1},0px 10px 14px 1px ${transparent2},0px 4px 18px 3px ${transparent3}`,
            `0px 6px 7px -4px ${transparent1},0px 11px 15px 1px ${transparent2},0px 4px 20px 3px ${transparent3}`,
            `0px 7px 8px -4px ${transparent1},0px 12px 17px 2px ${transparent2},0px 5px 22px 4px ${transparent3}`,
            `0px 7px 8px -4px ${transparent1},0px 13px 19px 2px ${transparent2},0px 5px 24px 4px ${transparent3}`,
            `0px 7px 9px -4px ${transparent1},0px 14px 21px 2px ${transparent2},0px 5px 26px 4px ${transparent3}`,
            `0px 8px 9px -5px ${transparent1},0px 15px 22px 2px ${transparent2},0px 6px 28px 5px ${transparent3}`,
            `0px 8px 10px -5px ${transparent1},0px 16px 24px 2px ${transparent2},0px 6px 30px 5px ${transparent3}`,
            `0px 8px 11px -5px ${transparent1},0px 17px 26px 2px ${transparent2},0px 6px 32px 5px ${transparent3}`,
            `0px 9px 11px -5px ${transparent1},0px 18px 28px 2px ${transparent2},0px 7px 34px 6px ${transparent3}`,
            `0px 9px 12px -6px ${transparent1},0px 19px 29px 2px ${transparent2},0px 7px 36px 6px ${transparent3}`,
            `0px 10px 13px -6px ${transparent1},0px 20px 31px 3px ${transparent2},0px 8px 38px 7px ${transparent3}`,
            `0px 10px 13px -6px ${transparent1},0px 21px 33px 3px ${transparent2},0px 8px 40px 7px ${transparent3}`,
            `0px 10px 14px -6px ${transparent1},0px 22px 35px 3px ${transparent2},0px 8px 42px 7px ${transparent3}`,
            `0px 11px 14px -7px ${transparent1},0px 23px 36px 3px ${transparent2},0px 9px 44px 8px ${transparent3}`,
            `0px 11px 15px -7px ${transparent1},0px 24px 38px 3px ${transparent2},0px 9px 46px 8px ${transparent3}`,
        ],
        header: `${transparent3} 0px 1px 2px 0px`,
        custom: {
            z1: `${transparent3} 0px 1px 2px 0px`,
            z4: `${transparent4} 0px 4px 8px 0px`,
            z8: `${transparent4} 0px 8px 16px 0px`,
            z12: `${transparent4} 0px 12px 24px -4px`,
            z16: `${transparent4} 0px 16px 32px -4px`,
            z20: `${transparent4} 0px 20px 40px -4px`,
            z24: `${transparent4} 0px 24px 48px -4px`,
            card: `${colorCard} 0px 0px 2px 0px, ${colorCard2} 0px 12px 24px -4px`,
            dropdown: `${transparent5} 0px 0px 2px 0px, ${transparent5} -20px 20px 40px -4px`,
            dialog: `${transparent5} -40px 40px 80px -8px`,
        },
        color: {
            primary: `${alpha(palette.primary.main, 0.24)} 0px 8px 16px 0px`,
            secondary: `${alpha(
                palette.secondary.main,
                0.24
            )} 0px 8px 16px 0px`,
            info: `${alpha(palette.info.main, 0.24)} 0px 8px 16px 0px`,
            success: `${alpha(palette.success.main, 0.24)} 0px 8px 16px 0px`,
            warning: `${alpha(palette.warning.main, 0.24)} 0px 8px 16px 0px`,
            error: `${alpha(palette.error.main, 0.24)} 0px 8px 16px 0px`,
            custom: `${alpha(palette.grey[700], 0.24)} 0px 8px 16px 0px`,
        },
    };
}
