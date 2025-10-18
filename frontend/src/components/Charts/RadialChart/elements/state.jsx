import { MuiTheme } from "@/Theme";
import React from "react";

const RadialChartState = () => {
    return {
        series: [44, 55, 67],
        options: {
            chart: {
                type: "radialBar",
                offsetY: -10, // dịch biểu đồ lên trên (giá trị âm)
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        size: "32%", // điều chỉnh kích thước của phần hollow
                    },
                    track: {
                        strokeWidth: "50%", // độ dày của track (đường viền bên ngoài)
                        margin: 10, // điều chỉnh khoảng cách giữa các vòng
                    },
                    dataLabels: {
                        name: {
                            fontSize: "22px",
                            offsetY: -10, // điều chỉnh khoảng cách của nhãn tên
                        },
                        value: {
                            fontSize: "16px",
                            offsetY: 5, // điều chỉnh khoảng cách của giá trị
                        },
                        total: {
                            show: true,
                            label: "Total",
                            formatter: function (w) {
                                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                                return 900;
                            },
                        },
                    },
                },
            },
            stroke: {
                lineCap: "round", // 'round', 'butt', 'square'
                width: 5, // độ dày của stroke
            },
            fill: {
                type: "gradient",
                gradient: {
                    shade: "light",
                    type: "vertical",
                    shadeIntensity: 0.4,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100],
                    colorStops: [
                        [
                            {
                                offset: 0,
                                color: MuiTheme().palette.primary.main,
                                opacity: 1,
                            },
                            {
                                offset: 100,
                                color: MuiTheme().palette.primary.dark,
                                opacity: 1,
                            },
                        ],
                        [
                            {
                                offset: 0,
                                color: MuiTheme().palette.secondary.main,
                                opacity: 1,
                            },
                            {
                                offset: 100,
                                color: MuiTheme().palette.secondary.dark,
                                opacity: 1,
                            },
                        ],
                        [
                            {
                                offset: 0,
                                color: MuiTheme().palette.error.main,
                                opacity: 1,
                            },
                            {
                                offset: 100,
                                color: MuiTheme().palette.error.dark,
                                opacity: 1,
                            },
                        ],
                    ],
                },
            },
            labels: ["Apples", "Oranges", "Bananas"],
            colors: [
                MuiTheme().palette.primary.main,
                MuiTheme().palette.secondary.main,
                MuiTheme().palette.error.main,
            ],
        },
    };
};

export default RadialChartState;
