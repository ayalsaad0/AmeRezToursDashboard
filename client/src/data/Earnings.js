import { useState, useEffect } from "react";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "Septemper",
  "October",
  "November",
  "December",
];

export function GetIncomeData() {
  const earnings = GetEarnings();
  const totals = [];
  if (earnings.length > 0) {
    let index = 0;
    for (let i = 0; i < 12; i++) {
      const month = earnings[index].month;
      const earnings1 = earnings[index].earnings;
      console.log(
        "earnings = ",
        earnings1,
        " month = ",
        month,
        " index = ",
        i + 1
      );
      //   let totalEarnings = i + 1 === earnings[index] ? earnings[index++] : 0;
      let totalEarnings = 1100;
      //   if (month === i + 1) {
      //     totalEarnings = earnings;
      //     index++;
      //   }
      const earningObj = {
        id: i + 1,
        month: months[i],
        total: totalEarnings,
      };
      //   console.log("obj = ", earningObj);
      totals.push(earningObj);
    }
  }
  return totals;
}

export const IncomeData = [
  {
    id: 1,
    month: "January",
    total: 1000,
  },
  {
    id: 2,
    month: "February",
    total: 2500,
  },
  {
    id: 3,
    month: "March",
    total: 2900,
  },
  {
    id: 4,
    month: "April",
    total: 1700,
  },
  {
    id: 5,
    month: "May",
    total: 3000,
  },
  {
    id: 6,
    month: "June",
    total: 3200,
  },
  {
    id: 7,
    month: "July",
    total: 4500,
  },
  {
    id: 8,
    month: "August",
    total: 2200,
  },
  {
    id: 9,
    month: "Septemper",
    total: 3000,
  },
  {
    id: 10,
    month: "October",
    total: 1000,
  },
  {
    id: 11,
    month: "November",
    total: 1400,
  },
  {
    id: 12,
    month: "December",
    total: 1600,
  },
];

export default function GetEarnings() {
  const [earnings, setEarnings] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/earnings`)
      .then((response) => response.json())
      .then((actualData) => {
        setEarnings(actualData);
      })
      .catch();
  }, []);
  return earnings;
}
