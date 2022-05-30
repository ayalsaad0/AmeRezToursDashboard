import { useState, useEffect } from "react";

export default function FetchVehicles() {
  const [vehicles, setVehicles] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/vehicles`)
      .then((response) => response.json())
      .then((actualData) => {
        setVehicles(actualData);
      })
      .catch();
  }, []);
  return vehicles;
}
