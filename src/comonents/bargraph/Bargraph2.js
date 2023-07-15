import React, { useState } from "react";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJs.register(CategoryScale, LinearScale, BarElement, Title, Legend);

const users = [
  { day: "S", completion: 30 },
  { day: "M", completion: 60 },
  { day: "T", completion: 40 },
  { day: "W", completion: 65 },
  { day: "T", completion: 40 },
  { day: "F", completion: 75 },
  { day: "S", completion: 40 },
  { day: "S", completion: 30 },
  { day: "M", completion: 45 },
  { day: "T", completion: 40 },
];

export const Bargraph2 = () => {
  const [data, setData] = useState({
    data: {
      labels: users.map((user) => user.day),
      datasets: [
        {
          label: "day",
          data: users.map((user) => user.completion),
          backgroundColor: "rgba(13, 98, 255, 0.80)",

          borderSkipped: false,
          barPercentage: 0.3,
          hoverBackgroundColor: "#1A4F63",
        },
      ],
    },
    options: {
      scales: {
        x: {
          grid: { display: false },
        },
        y: {
          grid: { display: false },
        },
      },
      maintainAspectRatio: false,
    },
  });
  return (
    <div>
      <Bar
        data={data.data}
        options={data.options}
        style={{
          height: "250px",
          width: "auto",
        }}
      />
    </div>
  );
};
