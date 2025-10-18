import AreaChart from "@/Components/Charts/AreaChart";
import AreaChartLegend from "@/Components/Charts/AreaChart/components/legend";
import AreaChartState from "@/Components/Charts/AreaChart/elements/state";
import { Box, Button, Card, MenuItem, Paper, Select, Stack, Typography } from "@mui/material";
import React from "react";

const YearlySalesCard = () => {
    return (
        <Paper
            sx={{
                backgroundColor: "background.paper",
                boxShadow: "custom.card",
                display: "flex",
                flexDirection: "column",
                borderRadius: "12px",
            }}
        >
            <Stack
                className="w-full px-[24px] py-[24px]"
                direction={"row"}
                justifyContent={"space-between"}
            >
                <Stack gap={"4px"}>
                    <Typography variant="h6">Sale by gender</Typography>
                    <Typography variant="body2" color={"text.secondary"}>
                        (+43%) than last year
                    </Typography>
                </Stack>
                <Box>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={10}
                        size="small"
                        color="custom"
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </Box>
            </Stack>
            <Stack sx={{ paddingX: "24px" }}>
                <AreaChartLegend
                    series={AreaChartState().series}
                    colors={AreaChartState().options.colors}
                />
            </Stack>
            <Box
                sx={{
                    paddingX: "8px",
                }}
            >
                <AreaChart />
            </Box>
        </Paper>
    );
};

export default YearlySalesCard;
