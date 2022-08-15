// import jwt from 'jsonwebtoken';
import Attraction from "../models/attraction.js";
import Image from "../models/image.js";

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
    .then(() => {
      const attraction = Attraction.findOne({
        where: { title: req.body.title },
      });
      console.log("id: ");
      console.log(attraction.id);
      req.body.imagesArr.map((img) => {
        console.log(img);
      });
      // updateImages(req.body.images, attraction.id);
      res.status(200).json({ message: "Attraction added successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.status(502).json({ message: "error while adding the attraction" });
    });
  // const id = dbAttraction.id;
  // updateImages(req.body.images, id);
  // console.log(dbAttraction);
};

const updateAttraction = async (req, res, next) => {
  const attToUpdate = await Attraction.findOne({
    where: { title: req.body.title },
  });
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
      // const attraction = Attraction.findOne({
      //   where: { title: req.body.title },
      // });
      // console.log("id: ");
      // console.log(attraction.id);
      // req.body.imagesArr.map((img) => {
      //   console.log(img);
      // });
      // updateImages(req.body.images, attraction.id);
      res.status(200).json({ message: "Attraction updated successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.status(502).json({ message: "error while updating the attraction" });
    });
};

const deleteAttraction = async (req, res, next) => {
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
      res
        .status(502)
        .json({ message: "An error occured while deleting the attraction" });
    });
};

const updateImages = (images, id) => {
  const imagesArr = Array.from(images);
  imagesArr.map((image) => {
    const img = Image.create({
      link: image.name,
      attractionId: id,
    })
      .then(() => {
        res.status(200).json({ message: "Images added successfully" });
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

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
