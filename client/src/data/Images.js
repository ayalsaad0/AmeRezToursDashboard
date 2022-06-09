import { useState, useEffect } from "react";
import Axios from "axios";

export async function FetchVehiclesImages(service_id) {
  console.log(service_id);
  const [images, setImages] = useState([]);
  await Axios.post(`http://localhost:3001/images-by-id`, {
    service_id: service_id,
  })
    .then((response) => console.log(response.data))
    // .then((actualData) => {
    //   console.log(actualData);
    //   setImages(actualData);
    // })
    .catch();
  return images;
}
