import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const AreaChartLegend = ({ series, colors }) => {
    return (
        <Stack direction={"row"} gap={"24px"}>
            {series.map((it, index) => (
                <Stack key={index} direction={"column"} gap={"4px"}>
                    <Stack direction={"row"} alignItems={"center"} gap={"4px"}>
                        <Box
                            sx={{
                                width: "12px",
                                height: "12px",
                                backgroundColor: colors[index],
                                borderRadius: "50%",
                            }}
                        />
                        <Typography variant="subtitle2" fontWeight={600}>
                            {it.name}
                        </Typography>
                    </Stack>
                    <Typography variant="h6" fontWeight={600}>
                        {it.data.reduce((a, b) => a + b, 0)}
                    </Typography>
                </Stack>
            ))}
        </Stack>
    );
};

export default AreaChartLegend;
