// This is the controller which works with the events table in the database
import Event from "../models/event.js";
import sequelize from "../utils/database.js";

// A function which fetches all the events from the database
const fetchEvents = async (req, res, next) => {
  await Event.findAll().then((events) => {
    const actualData = [];
    events.map((event) => {
      actualData.push(event.dataValues);
    });
    res.status(200).json({ actualData: actualData });
  });
};

// A function which adds a new event to the events table
const addEvent = async (req, res, next) => {
  console.log(req.body);
  await sequelize
    .query(
      `INSERT INTO events (id,subject,start_time,end_time,description,status) VALUES (DEFAULT,'${req.body.Subject}','${req.body.StartTime}','${req.body.EndTime}','${req.body.Description}','${req.body.EventType}');`
    )
    .then(() => {
      res.status(200).json({ message: "Event added successfully" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(502)
        .json({ message: "An error occured while adding the event" });
    });
};

// A function which updates an event
const updateEvent = async (req, res, next) => {
  const eventToUpdate = await Event.findOne({
    where: {
      id: req.body.Id,
    },
  });
  await sequelize
    .query(
      `UPDATE events SET subject='${req.body.Subject}',start_time='${req.body.StartTime}',end_time='${req.body.EndTime}',description='${req.body.Description}',status='${req.body.EventType}' WHERE id='${eventToUpdate.dataValues.id}';`
    )
    .then(() => {
      res.status(200).json({ message: "Event updated successfully" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(502)
        .json({ message: "An error occured while updating the event" });
    });
};

// A function which deletes an event from the events table
const deleteEvent = async (req, res, next) => {
  await Event.destroy({
    where: {
      id: req.body.event_id,
    },
  })
    .then(() => {
      res.status(200).json({ message: "Event deleted successfully" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(502)
        .json({ message: "An error occured while deleting the event" });
    });
};

export { addEvent, updateEvent, deleteEvent, fetchEvents };
