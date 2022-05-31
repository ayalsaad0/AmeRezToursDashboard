import { Axios } from "axios";
import { useState, useEffect } from "react";

export async function DeleteActivity(id) {
  await Axios.post("http://localhost:3001/delete-activity", {
    id: id,
  }).then((response) => {
    console.log(response);
  });
}

export default function FetchActivities() {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/activities`)
      .then((response) => response.json())
      .then((actualData) => {
        setActivities(actualData);
      })
      .catch();
  }, []);
  return activities;
}
