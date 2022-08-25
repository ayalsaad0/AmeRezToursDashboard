// This is the controller which works with the attractions table in the database
import Attraction from "../models/attraction.js";
import Image from "../models/image.js";
import Order from "../models/order.js";

// A function which fetches all the attractions
const fetchAttractions = async (req, res, next) => {
  await Attraction.findAll({
    include: [{ model: Image, as: "images" }],
  }).then((attractions) => {
    const actualData = [];
    attractions.map((attraction) => {
      actualData.push(attraction.dataValues);
    });
    res.status(200).json({ actualData: actualData });
  });
};

// A function which adds a new attraction to the table
const addAttraction = async (req, res, next) => {
  await Attraction.create({
    availability: req.body.availability,
    description: req.body.description,
    location: req.body.location,
    price: req.body.price,
    title: req.body.title,
    guests: 0,
    start_Date: Date.now(),
    end_Date: Date.now(),
  })
    .then(async () => {
      const attraction = await Attraction.findOne({
        where: { title: req.body.title },
      });
      addImages(req.body.imagesArr, attraction.dataValues.id);
      res.status(200).json({ message: "Attraction added successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.status(502).json({ message: "error while adding the attraction" });
    });
};

// A function which adds or updates the images of the attraction
const addImages = async (images, attractionId) => {
  await Image.destroy({
    where: {
      attractionId: attractionId,
    },
  });

  images.map(async (image) => {
    if (image !== "")
      await Image.create({
        link: image,
        attractionId: attractionId,
        vehicleId: null,
      });
  });
};

// A function which updates the attraction info
const updateAttraction = async (req, res, next) => {
  const attToUpdate = await Attraction.findOne({
    where: { title: req.body.title },
  });

  addImages(req.body.imagesArr, attToUpdate.dataValues.id);

  await Attraction.update(
    {
      availability: req.body.availability,
      description: req.body.description,
      location: req.body.location,
      price: req.body.price,
      title: req.body.title,
      guests: 0,
      start_Date: Date.now(),
      end_Date: Date.now(),
    },
    {
      where: {
        id: attToUpdate.dataValues.id,
      },
    }
  )
    .then(() => {
      res.status(200).json({ message: "Attraction updated successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.status(502).json({ message: "error while updating the attraction" });
    });
};

// A function which deletes an attraction by it's id
const deleteAttraction = async (req, res, next) => {
  // if there is a "pending" order of this attraction, then we cannot delete it
  await Order.findOne({
    where: {
      attractionId: req.body.id,
      status: "Pending",
    },
  }).then(async (attractionOrder) => {
    if (attractionOrder) {
      return res.status(409).json({
        message:
          "This attraction cannot be deleted at this moment, there is an open reservation for this attraction.",
      });
    } else {
      await Image.destroy({
        where: {
          attractionId: req.body.id,
        },
      });

      await Attraction.destroy({
        where: {
          id: req.body.id,
        },
      })
        .then(() => {
          res.status(200).json({ message: "Attraction deleted successfully" });
        })
        .catch((err) => {
          console.log(err);
          res.status(502).json({
            message: "An error occured while deleting the attraction",
          });
        });
    }
  });
};

// A function which fetches an attraction by it's id
const fetchAttractionById = async (req, res, next) => {
  await Attraction.findByPk(req.body.id, {
    include: [{ model: Image, as: "images" }],
  }).then((attraction) => {
    res.status(200).json({ actualData: attraction.dataValues });
  });
};

export {
  addAttraction,
  updateAttraction,
  deleteAttraction,
  fetchAttractions,
  fetchAttractionById,
};
