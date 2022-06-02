import { useState, useEffect } from "react";
import Axios from "axios";

export async function DeleteVehicle(id) {
  await Axios.post("http://localhost:3001/delete-vehicle", {
    id: id,
  }).then((response) => {
    console.log(response);
  });
}

// export async function AddVehicleFunc({ title, places, suitcases, price }) {
//   await Axios.post("http://localhost:3001/add-vehicle", {
//     title,
//     places,
//     suitcases,
//     price,
//   }).then((response) => {
//     console.log(response);
//   });
// }

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
