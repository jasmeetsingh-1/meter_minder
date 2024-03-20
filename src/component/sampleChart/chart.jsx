import React from "react";
import ChartBar from "./chartBar";
import "./cssFiles/chart.css";

function Chart(props) {
  const datapoints = props.datapoints.map((dataPoints) => dataPoints.value);
  const totalMax = Math.max(...datapoints);

  return (
    <div className="chart">
      {props.datapoints.map((ele) => (
        <ChartBar
          key={ele.label}
          value={ele.value}
          maxValue={totalMax}
          label={ele.label}
        />
      ))}
    </div>
  );
}

export default Chart;
