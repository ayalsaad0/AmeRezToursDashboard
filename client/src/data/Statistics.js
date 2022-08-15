import { useState, useEffect } from "react";

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
