
export const LineChartState = ({ categories, color }) => {
    return {
        options: {
            colors: [color.main],
            chart: {
                type: "line",
                sparkline: {
                    enabled: true,
                },
                toolbar: {
                    show: false,
                    autoSelected: "pan",
                },
            },
            stroke: {
                curve: "smooth",
            },
            grid: {
                show: false,
                borderColor: "transparent",
            },
            xaxis: {
                categories: categories,
                labels: {
                    show: false,
                },
                lines: {
                    show: false, // Hide y-axis lines
                },
            },
            yaxis: {
                labels: {
                    show: false,
                },
                lines: {
                    show: false, // Hide y-axis lines
                },
            },
            fill: {
                type: "gradient",
                gradient: {
                    shade: "light",
                    type: "horizontal", // 'vertical', 'horizontal', 'diagonal1', 'diagonal2'
                    shadeIntensity: 0.4,
                    gradientToColors: [color.main, color.dark], // màu sắc kết thúc gradient
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100],
                },
            },
        },
    };
};
