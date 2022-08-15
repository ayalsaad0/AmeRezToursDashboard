import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { ChartsHeader } from "../../components";
import {
  GetVehiclesStatistics,
  GetAttractionsStatistics,
} from "../../data/Statistics";

function BarChart({ chartData }) {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const vehicles = GetVehiclesStatistics();
  const attractions = GetAttractionsStatistics();
  const orderData = {
    labels: labels,
    datasets: [
      {
        label: "Vehicles",
        data: vehicles,
        backgroundColor: "#1A97F5",
      },
      {
        label: "Attractions",
        data: attractions,
        backgroundColor: "#03C9D7",
      },
    ],
  };
  return (
    <div className="w-5/5 m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Bar" title="Orders" />
      <Bar data={orderData} height="100%" />
    </div>
  );
}

export default BarChart;
