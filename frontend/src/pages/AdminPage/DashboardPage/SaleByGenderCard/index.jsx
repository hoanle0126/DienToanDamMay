import RadialChart from "@/Components/Charts/RadialChart";
import RadialChartLegend from "@/Components/Charts/RadialChart/components/legend";
import RadialChartState from "@/Components/Charts/RadialChart/elements/state";
import { Box, Paper, Typography } from "@mui/material";
import React from "react";

const SaleByGenderCard = () => {
    return (
        <Paper
            sx={{
                backgroundColor: "background.paper",
                boxShadow: "custom.card",
                display: "flex",
                flexDirection: "column",
                borderRadius: "12px",
                alignItems: "center",
            }}
        >
            <div className="w-full px-[24px] py-[24px]">
                <Typography variant="h6">Sale by gender</Typography>
            </div>
            <RadialChart />
            <Box
                sx={{
                    width: "100%",
                    paddingY: "24px",
                    borderTopWidth: "1px",
                    borderStyle: "dashed",
                    borderColor: "divider",
                }}
            >
                <RadialChartLegend
                    labels={RadialChartState().options.labels}
                    colors={RadialChartState().options.fill.gradient.colorStops}
                />
            </Box>
        </Paper>
    );
};

export default SaleByGenderCard;
