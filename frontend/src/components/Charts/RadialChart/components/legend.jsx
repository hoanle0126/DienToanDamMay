import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const RadialChartLegend = ({ labels, colors }) => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                justifyContent: "center",
                gap: "20px",
            }}
        >
            {labels.map((label, index) => (
                <Stack direction={"row"} alignItems={"center"} gap={"4px"}>
                    <Box
                        sx={{
                            width: "12px",
                            height: "12px",
                            backgroundColor: colors[index][0].color,
                            borderRadius: "99%",
                        }}
                    ></Box>
                    <Typography variant="subtitle2" fontWeight={600}>
                        {label}
                    </Typography>
                </Stack>
            ))}
        </Box>
    );
};

export default RadialChartLegend;
