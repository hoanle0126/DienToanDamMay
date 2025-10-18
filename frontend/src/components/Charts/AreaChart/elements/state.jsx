import { MuiTheme } from "@/Theme";
import React from "react";

const AreaChartState = () => {
    return {
        series: [
            {
                name: "series1",
                data: [31, 40, 28, 51, 42, 109, 250],
            },
            {
                name: "series2",
                data: [11, 32, 45, 32, 34, 52, 41],
            },
        ],
        options: {
            chart: {
                height: 350,
                type: "area",
                toolbar: {
                    show: false,
                    autoSelected: "pan",
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
            },
            grid: {
                borderColor: "#e7e7e7",
                strokeDashArray: 4, // Thay đổi đường kẻ thành nét đứt
            },
            xaxis: {
                type: "datetime",
                categories: [
                    "2018-09-19T00:00:00.000Z",
                    "2018-09-19T01:30:00.000Z",
                    "2018-09-19T02:30:00.000Z",
                    "2018-09-19T03:30:00.000Z",
                    "2018-09-19T04:30:00.000Z",
                    "2018-09-19T05:30:00.000Z",
                    "2018-09-19T06:30:00.000Z",
                ],
                axisBorder: {
                    show: true,
                    color: "#e7e7e7",
                    height: 0,
                    dashArray: 4, // Đường trục dưới cùng thành nét đứt
                },
            },
            tooltip: {
                x: {
                    format: "dd/MM/yy HH:mm",
                },
            },
            legend: {
                show: false, // Tắt phần legend
            },
            fill: {
                type: "gradient",
                gradient: {
                    shade: "light",
                    type: "vertical", // Loại gradient: 'vertical' hoặc 'horizontal'
                    shadeIntensity: 0.5,
                    gradientToColors: [
                        MuiTheme().palette.primary.main,
                        MuiTheme().palette.secondary.main,
                    ], // Màu gradient từ sáng đến tối
                    inverseColors: false,
                    opacityFrom: 0.5, // Độ trong suốt của màu đầu
                    opacityTo: 0.1, // Độ trong suốt của màu cuối
                    stops: [0, 100], // Tỉ lệ gradient
                },
            },
            colors: [MuiTheme().palette.primary.main, MuiTheme().palette.secondary.main],
        },
    };
};

export default AreaChartState;
