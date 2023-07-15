import React from "react";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJs.register({
  Tooltip,
  Title,
  ArcElement,
  Legend,
});

export const DoubleDonut = () => {
  const data = {
    labels: ["Failed", "Passed"],
    datasets: [
      {
        label: "status",
        data: [22, 20, 22, 34, 7],
        backgroundColor: ["#B4CEFF", "#f3f1f1", "#f3f1f1", "#f3f1f1", "#f3f1f1"],
        borderColor: ["#B4CEFF", "#f3f1f1", "#f3f1f1", "#f3f1f1", "#f3f1f1"],
      },
    ],
  };
  const options = {};
  return (
    <div>
      <Doughnut
        data={data}
        optoins={options}
        style={{ width: "238px", height: "238px" }}
      />
    </div>
  );
};
