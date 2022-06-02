import { useState, useEffect } from "react";
import Axios from "axios";

export default function FetchEvents() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/events`)
      .then((response) => response.json())
      .then((actualData) => {
        setEvents(actualData);
      })
      .catch();
  }, []);

  return events;
}

export function getEvents() {
  const events = FetchEvents();
  const eventsAsAnArrayOfObjects = [];
  events.map((item) => {
    const eventAsAnObject = {
      Id: item.id,
      Subject: item.subject,
      Location: item.location,
      StartTime: item.start_time,
      EndTime: item.end_time,
      CategoryColor: item.category_color,
      Description: item.description,
    };
    eventsAsAnArrayOfObjects.push(eventAsAnObject);
  });

  return eventsAsAnArrayOfObjects;
}
