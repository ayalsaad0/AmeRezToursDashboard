import { useState, useEffect } from "react";

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

function FetchAttractions() {
  const [attractions, setAttractions] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/fetchAttractions`, {
      method: "POST",
    })
      .then(async (response) => {
        const res = await response.json();
        if (response.status === 200) {
          setAttractions(res.actualData);
        }
      })
      .catch();
  }, []);
  return attractions;
}

export { DeleteAttraction, FetchAttractions };
