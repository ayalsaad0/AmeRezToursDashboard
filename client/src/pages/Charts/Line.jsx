// import React from "react";

// import { ChartsHeader, LineChart } from "../../components";

// const Line = () => (
//   <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
//     <ChartsHeader category="Line" title="Inflation Rate" />
//     <div className="w-full">
//       <LineChart />
//     </div>
//   </div>
// );

// export default Line;
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { GetIncomeData, IncomeData } from "../../data/Earnings";
import { ChartsHeader } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";
import GetEarnings from "../../data/Earnings";

const LineChart = ({ chartData }) => {
  const totals = GetIncomeData();

  const { currentColor } = useStateContext();
  console.log("Totals: ", totals);
  const [totalIncomings, setTotalIncomings] = useState({
    labels: IncomeData.map((data) => data.month),
    datasets: [
      {
        label: "Incomes",
        data: IncomeData.map((data) => data.total),
        color: currentColor,
        backgroundColor: currentColor,
        borderColor: currentColor,
      },
    ],
  });
  return (
    <div className="w-5/5 m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Line" title="Earnings" />
      <Line data={totalIncomings} height="100%" />
    </div>
  );
};

export default LineChart;
