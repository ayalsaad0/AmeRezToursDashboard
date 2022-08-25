// This file will use the controllers to handle the attractions data
import { useState, useEffect } from "react";

// A function to delete an attraction by it's id
function DeleteAttraction(id) {
  const payload = {
    id,
  };
  fetch(`http://localhost:3001/deleteAttraction`, {
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

// A function which fetches all the attractions, and returns them as an array
function FetchAttractions() {
  const [attractions, setAttractions] = useState([]);
  useEffect(() => {
    let isMounted = true;
    fetch(`http://localhost:3001/fetchAttractions`, {
      method: "POST",
    })
      .then(async (response) => {
        const res = await response.json();
        if (response.status === 200) {
          if (isMounted) setAttractions(res.actualData);
        }
      })
      .catch();
    return () => {
      isMounted = false;
    };
  }, []);
  return attractions;
}

export { DeleteAttraction, FetchAttractions };
