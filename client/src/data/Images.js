import { useState, useEffect } from "react";
import Axios from "axios";

export function FetchVehiclesImages(service_id) {
  const [images, setImages] = useState([]);
  Axios.get(`http://localhost:3001/images-by-id`, {
    data: service_id,
  })
    .then((response) => response.json())
    .then((actualData) => {
      console.log(actualData);
      setImages(actualData);
    })
    .catch();
  return images;
}
