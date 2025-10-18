import React from "react";
import ReactApexChart from "react-apexcharts";
import { LineChartState } from "./elements/state";

const LineChart = ({ series, categories, color }) => {
    return (
        <ReactApexChart
            series={series}
            options={LineChartState({ categories, color }).options}
            type="line"
        ></ReactApexChart>
    );
};

export default LineChart;
