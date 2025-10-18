import React from "react";
import ReactApexChart from "react-apexcharts";
import AreaChartState from "./elements/state";

const AreaChart = () => {
    return (
        <ReactApexChart
            options={AreaChartState().options}
            series={AreaChartState().series}
            type="area"
            height={350}
        />
    );
};

export default AreaChart;
