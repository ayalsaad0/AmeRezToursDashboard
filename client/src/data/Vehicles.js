// This file will use the controllers to handle the vehicles data
import { useState, useEffect } from "react";

// A function to delete a vehicle by it's id
function DeleteVehicle(id) {
  const payload = {
    id,
  };
  fetch(`http://localhost:3001/deleteVehicle`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then(async (response) => {
      const res = await response.json();
      alert(res.message);
    })
    .catch((err) => {
      console.log(err);
    });
}

// A function to fetch all the vehicles from the db and returns them as an array
function FetchVehicles() {
  const [vehicles, setVehicles] = useState([]);
  useEffect(() => {
    let isMounted = true;
    fetch(`http://localhost:3001/fetchVehicles`, {
      method: "POST",
    })
      .then(async (response) => {
        const res = await response.json();
        if (response.status === 200) {
          if (isMounted) setVehicles(res.actualData);
        }
      })
      .catch();
    return () => {
      isMounted = false;
    };
  }, []);
  return vehicles;
}

export { DeleteVehicle, FetchVehicles };
