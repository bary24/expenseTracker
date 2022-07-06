import "../../styles/Chart.css";
import React from "react";
import ChartBar from "./chartBar";
const Chart = (props: any) => {
  const dataPointValues = props.dataPoints.map(
    (dataPoint: { label: string; value: number }) => dataPoint.value
  );
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint: any) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
