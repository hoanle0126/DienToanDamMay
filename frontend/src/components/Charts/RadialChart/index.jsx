import React from "react";
import RadialChartState from "./elements/state";
import ReactApexChart from "react-apexcharts";

const RadialChart = () => {
    return (
        <ReactApexChart
            series={RadialChartState().series}
            options={RadialChartState().options}
            type="radialBar"
            width={450}
        ></ReactApexChart>
    );
};

export default RadialChart;
