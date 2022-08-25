// This file will use the controllers to handle the events data
import { useState, useEffect } from "react";

// A function which fetches all the events data and returns them as an array
function FetchEvents() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/fetchEvents`, { method: "POST" })
      .then(async (response) => {
        const res = await response.json();
        if (response.status === 200) {
          setEvents(res.actualData);
        }
      })

      .catch();
  }, []);

  return events;
}

// A function which returns all the events data as an array of objects, to fit the calendar component
function getEvents() {
  const events = FetchEvents();
  const eventsAsAnArrayOfObjects = [];
  events.map((item) => {
    const eventAsAnObject = {
      Id: item.id,
      Subject: item.subject,
      StartTime: item.start_time,
      EndTime: item.end_time,
      Description: item.description,
      EventType: item.event_type,
    };
    eventsAsAnArrayOfObjects.push(eventAsAnObject);
  });

  return eventsAsAnArrayOfObjects;
}

// A function which add a new event to the database
function addEvent(data) {
  console.log(data.data);
  const payload = {
    Id: data.data.Id,
    Subject: data.data.Subject,
    Description: data.data.Description,
    StartTime: data.data.StartTime,
    EndTime: data.data.EndTime,
    EventType: data.data.EventType,
  };

  fetch("http://localhost:3001/addEvent", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then(async (res) => {
      try {
        const jsonRes = await res.json();
        if (res.status !== 200) {
          alert(jsonRes.message);
        } else {
          alert(jsonRes.message);
        }
      } catch (err) {
        console.log(err.message);
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
}

// A function which updated the info of an event
function updateEvent(data, id) {
  const payload = {
    Id: id,
    Subject: data.data.Subject,
    Description: data.data.Description,
    StartTime: data.data.StartTime,
    EndTime: data.data.EndTime,
    EventType: data.data.EventType,
  };

  fetch("http://localhost:3001/updateEvent", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then(async (res) => {
      try {
        const jsonRes = await res.json();
        if (res.status !== 200) {
          alert(jsonRes.message);
        } else {
          alert(jsonRes.message);
        }
      } catch (err) {
        console.log(err.message);
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
}

// A function which deletes and event by it's id
function deleteEvent(event_id) {
  const payload = {
    event_id,
  };
  fetch(`http://localhost:3001/deleteEvent`, {
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

export { deleteEvent, updateEvent, addEvent, getEvents };
