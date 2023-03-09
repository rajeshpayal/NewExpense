import React from "react";

import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = ({ dataPoints }) => {
  const valueArray = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...valueArray);
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
