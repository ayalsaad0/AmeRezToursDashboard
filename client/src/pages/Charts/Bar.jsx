// import React from "react";
// import {
//   ChartComponent,
//   SeriesCollectionDirective,
//   SeriesDirective,
//   Inject,
//   Legend,
//   Category,
//   Tooltip,
//   ColumnSeries,
//   DataLabel,
// } from "@syncfusion/ej2-react-charts";

// import {
//   barCustomSeries,
//   barPrimaryXAxis,
//   barPrimaryYAxis,
// } from "../../data/dummy";
// import { ChartsHeader } from "../../components";
// import { useStateContext } from "../../contexts/ContextProvider";

// const Bar = () => {
//   const { currentMode } = useStateContext();

//   return (
//     <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
//       <ChartsHeader category="Bar" title="Olympic Medal Counts - RIO" />
//       <div className=" w-full">
//         <ChartComponent
//           id="charts"
//           primaryXAxis={barPrimaryXAxis}
//           primaryYAxis={barPrimaryYAxis}
//           chartArea={{ border: { width: 0 } }}
//           tooltip={{ enable: true }}
//           background={currentMode === "Dark" ? "#33373E" : "#fff"}
//           legendSettings={{ background: "white" }}
//         >
//           <Inject
//             services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]}
//           />
//           <SeriesCollectionDirective>
//             {/* eslint-disable-next-line react/jsx-props-no-spreading */}
//             {barCustomSeries.map((item, index) => (
//               <SeriesDirective key={index} {...item} />
//             ))}
//           </SeriesCollectionDirective>
//         </ChartComponent>
//       </div>
//     </div>
//   );
// };

// export default Bar;

import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { VehicleData, ActivityData } from "../../data/dummy";
import { ChartsHeader } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";

function BarChart({ chartData }) {
  const { currentColor } = useStateContext();
  const [orderData, setOrderData] = useState({
    labels: VehicleData.map((data) => data.month),
    datasets: [
      {
        label: "Vehicles",
        data: VehicleData.map((data) => data.orders),
        backgroundColor: currentColor,
      },
      {
        label: "Attractions",
        data: ActivityData.map((data) => data.orders),
        backgroundColor: currentColor,
      },
    ],
  });
  return (
    <div className="w-5/5 m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Bar" title="Orders" />
      <Bar data={orderData} height="100%" />
    </div>
  );
}

export default BarChart;
