import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export default function Graph() {
  let delayed;
  const options = {
    type: "bar",
    scales: {
      x: {
        grid: {
          display: false, // show/hide grid line in x-axis
        },
      },
      y: {
        grid: {},
      },
      yAxes: [
        {
          ticks: {
            barPercentage: 0.4,

            barThickness: 6, // number (pixels) or 'flex'
            maxBarThickness: 8,
          },
        },
      ],
      xAxes: [
        {
          // Change here
          barThickness: 6, // number (pixels) or 'flex'
          maxBarThickness: 8,
        },
      ],
    },
    legend: {
      display: false,
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "",
      },
    },
    animation: {
      onComplete: () => {
        delayed = true;
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === "data" && context.mode === "default" && !delayed) {
          delay = context.dataIndex * 300 + context.datasetIndex * 100;
        }
        return delay;
      },
    },
  };

  const labels = [
    "8 AM",
    "10 AM",
    "12 AM",
    "14 PM",
    "16 PM",
    "18 PM",
    "20 PM",
    "22 PM",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: [22, 99, 33, 45, 55, 66, 77, 88, 99, 12, 55],
        backgroundColor: "#05AE4B",
        borderRadius: 15,
      },
    ],
  };
  return (
    <>
      <Bar backgroundColor = "yellow" options={options} data={data} />
    </>
  );
}
