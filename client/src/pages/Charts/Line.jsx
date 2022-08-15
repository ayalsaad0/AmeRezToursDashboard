import React from "react";
import { Line } from "react-chartjs-2";
import { GetEarnings } from "../../data/Earnings";
import { ChartsHeader } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";

const LineChart = ({ chartData }) => {
  const { currentColor } = useStateContext();
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
  const totals = GetEarnings();
  const totalIncomings = {
    labels: labels,
    datasets: [
      {
        label: "Earnings",
        data: totals,
        color: currentColor,
        backgroundColor: currentColor,
        borderColor: currentColor,
      },
    ],
  };
  return (
    <div className="w-5/5 m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Line" title="Earnings" />
      <Line data={totalIncomings} height="100%" />
    </div>
  );
};

export default LineChart;
