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
      EventType: item.status,
      StartTime: item.start_time,
      EndTime: item.end_time,
      Description: item.description,
    };
    eventsAsAnArrayOfObjects.push(eventAsAnObject);
  });

  return eventsAsAnArrayOfObjects;
}

export async function addEvent(data) {
  await Axios.post("http://localhost:3001/add-event", {
    Id: data.data.Id,
    Subject: data.data.Subject,
    EventType: data.data.EventType,
    Description: data.data.Description,
    StartTime: data.data.StartTime,
    EndTime: data.data.EndTime,
  }).then((response) => {
    console.log(response);
  });
}
