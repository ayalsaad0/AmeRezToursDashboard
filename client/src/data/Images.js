import { useState, useEffect } from "react";
import Axios from "axios";

export function FetchServiceImages(service_id) {
  console.log(service_id);
  const [images, setImages] = useState([]);
  useEffect(() => {
    let isMounted = true;
    Axios.post(`http://localhost:3001/images-by-id`, {
      service_id: service_id,
    })
      .then((response) => {
        if (isMounted) setImages(response.data);
      })
      .catch();
    return () => {
      isMounted = false;
    };
  }, []);
  return images;
}
