import LineChart from "@/Components/Charts/LineChart";
import { MuiTheme } from "@/Theme";
import { Icon } from "@iconify/react";
import { Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";

const TotalBalanceCard = () => {
    return (
        <Paper
            sx={{
                backgroundColor: "background.paper",
                boxShadow: "custom.card",
                display: "flex",
                flexDirection: "column",
                padding: "20px 24px",
                borderRadius: "12px",
            }}
        >
            <Typography variant="subtitle2">Total balance</Typography>
            <Stack
                direction={"row"}
                alignItems={"center"}
                paddingY={"12px"}
                justifyContent={"space-between"}
            >
                <Typography variant="h3">18,765</Typography>

                <Box sx={{ width: 120 }}>
                    <LineChart
                        series={[
                            {
                                name: "Desktops",
                                data: [10, 41, 35, 51, 62, 69, 91, 148, 49, 10],
                            },
                        ]}
                        categories={[
                            "Jan",
                            "Feb",
                            "Mar",
                            "Apr",
                            "May",
                            "Jun",
                            "Jul",
                            "Aug",
                            "Sep",
                            "Oct",
                            "Nov",
                            "Dec",
                        ]}
                        color={MuiTheme().palette.secondary}
                    />
                </Box>
            </Stack>
            <Stack direction={"row"} alignItems={"center"} gap={"4px"}>
                <Box
                    sx={{
                        width: 24,
                        height: 24,
                        backgroundColor: "primary.lighter",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 99,
                        "& svg": {
                            stroke: MuiTheme().palette.primary.darker,
                            strokeWidth: "0.5px",
                        },
                    }}
                >
                    <Icon
                        icon="solar:course-up-bold"
                        width={14}
                        height={14}
                        color={MuiTheme().palette.primary.darker}
                    />
                </Box>
                <Typography variant="subtitle2">+2.6%</Typography>
                <Typography variant="body2" color={"text.secondary"}>
                    last week
                </Typography>
            </Stack>
        </Paper>
    );
};

export default TotalBalanceCard;
