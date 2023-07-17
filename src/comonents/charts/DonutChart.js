import React from "react";

import { Chart as ChartJs, Legend, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJs.register({ ArcElement, Tooltip, Legend });

export const DonutChart = () => {
  const data = {
    labels: ["Failed", "Passed"],
    datasets: [
      {
        label: "poll",
        data: [500, 1423],
        backgroundColor: ["red", "green"],
        borderColor: ["red", "green"],
      },
    ],
  };
  const options = {  maintainAspectRatio: false };

  return (
    <div>
      <Doughnut
        data={data}
        options={options}
        style={{ width: "20.6rem", height: "20.6rem" }}
      ></Doughnut>
    </div>
  );
};
