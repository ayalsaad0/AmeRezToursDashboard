import { useState, useEffect } from "react";

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
