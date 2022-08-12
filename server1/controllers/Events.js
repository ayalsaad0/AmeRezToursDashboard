import Event from "../models/event.js";

const fetchEvents = async (req, res, next) => {
  await Event.findAll().then((events) => {
    const actualData = [];
    events.map((event) => {
      actualData.push(event.dataValues);
    });
    res.status(200).json({ actualData: actualData });
  });
};

const addEvent = async (req, res, next) => {
  console.log(req.body);
  await Event.create({
    id: req.body.Id,
    subject: req.body.Subject,
    start_time: req.body.StartTime,
    end_time: req.body.EndTime,
    description: req.body.Description,
    event_type: req.body.EventType,
  })
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

const updateEvent = async (req, res, next) => {
  const eventToUpdate = await Event.findOne({
    where: {
      id: req.body.Id,
    },
  });
  await Event.update(
    {
      subject: req.body.Subject,
      start_time: req.body.StartTime,
      end_time: req.body.EndTime,
      description: req.body.Description,
      event_type: req.body.EventType,
    },
    {
      where: {
        id: eventToUpdate.dataValues.id,
      },
    }
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
