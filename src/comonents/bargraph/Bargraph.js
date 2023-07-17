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
  { date: "3 jun", workers: 100 },
  { date: "4 jun", workers: 150 },
  { date: "5 jun", workers: 150 },
  { date: "6 jun", workers: 230 },
  { date: "7 jun", workers: 280 },
  { date: "8 jun", workers: 200 },
  { date: "9 jun", workers: 230 },
  { date: "10 jun", workers: 100 },
  { date: "11 jun", workers: 280 },
  { date: "12 jun", workers: 330 },
  { date: "13 jun", workers: 380 },
  { date: "14 jun", workers: 400 },
];

export const Bargraph = () => {
  const [data, setData] = useState({
    data: {
      labels: users.map((user) => user.date),
      datasets: [
        {
          label: "workers",
          data: users.map((user) => user.workers),
          backgroundColor: "rgba(13, 98, 255, 0.80)",
          borderRadius: 50,
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
      maintainAspectRatio: false 
    },
  });
  return (
    <div>
      <Bar
        data={data.data}
        options={data.options }
        style={{
          height: "35.0rem",
          width: "auto"
        }}
      />
    </div>
  );
};
