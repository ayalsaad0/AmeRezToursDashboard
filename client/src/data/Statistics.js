// This file will use the controllers to handle the statistics data
import { useState, useEffect } from "react";

// A function which gets the count of vehicles orders at every month at the current year
function GetVehiclesStatistics() {
  const [statistics, setStatistics] = useState([]);
  const data = [];
  useEffect(() => {
    let isMounted = true;
    fetch(`http://localhost:3001/getOrdersStatistics`, {
      method: "POST",
    })
      .then(async (response) => {
        const res = await response.json();
        if (response.status === 200) {
          res.statistics.map((total) => {
            data.push(total.vehicles);
          });
          if (isMounted) setStatistics(data);
        }
      })
      .catch();
    return () => {
      isMounted = false;
    };
  }, []);
  return statistics;
}

// A function which gets the count of attractions orders at every month at the current year
function GetAttractionsStatistics() {
  const [statistics, setStatistics] = useState([]);
  const data = [];
  useEffect(() => {
    let isMounted = true;
    fetch(`http://localhost:3001/getOrdersStatistics`, {
      method: "POST",
    })
      .then(async (response) => {
        const res = await response.json();
        if (response.status === 200) {
          res.statistics.map((total) => {
            data.push(total.attractions);
          });
          if (isMounted) setStatistics(data);
        }
      })
      .catch();
    return () => {
      isMounted = false;
    };
  }, []);
  return statistics;
}

export { GetVehiclesStatistics, GetAttractionsStatistics };
