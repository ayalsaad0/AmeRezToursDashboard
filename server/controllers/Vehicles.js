import Vehicle from "../models/vehicle.js";
import Image from "../models/image.js";

const fetchVehicles = async (req, res, next) => {
  await Vehicle.findAll({
    include: [{ model: Image, as: "images" }],
  }).then((vehicles) => {
    const actualData = [];
    vehicles.map((vehicle) => {
      actualData.push(vehicle.dataValues);
    });
    res.status(200).json({ actualData: actualData });
  });
};

const addVehicle = async (req, res, next) => {
  await Vehicle.create({
    title: req.body.title,
    places: req.body.places,
    suitcases: req.body.suitcases,
    price: req.body.price,
    available: req.body.available,
    driver: req.body.driver,
    quantity: req.body.quantity,
  })
    .then(async () => {
      const vehicle = await Vehicle.findOne({
        where: { title: req.body.title },
      });
      addImages(req.body.imagesArr, vehicle.dataValues.id);
      res.status(200).json({ message: "Vehicle added successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.status(502).json({ message: "error while adding the vehicle" });
    });
  // const id = dbAttraction.id;
  // updateImages(req.body.images, id);
  // console.log(dbAttraction);
};

const addImages = async (images, vehicleId) => {
  await Image.destroy({
    where: {
      vehicleId: vehicleId,
    },
  });

  images.map(async (image) => {
    if (image !== "")
      await Image.create({
        link: image,
        vehicleId: vehicleId,
        attractionId: null,
      });
  });
};

const updateVehicle = async (req, res, next) => {
  const vehicleToUpdate = await Vehicle.findOne({
    where: { title: req.body.title },
  });

  addImages(req.body.imagesArr, vehicleToUpdate.dataValues.id);

  await Vehicle.update(
    {
      title: req.body.title,
      places: req.body.places,
      suitcases: req.body.suitcases,
      price: req.body.price,
      available: req.body.available,
      driver: req.body.driver,
      quantity: req.body.quantity,
    },
    {
      where: {
        id: vehicleToUpdate.dataValues.id,
      },
    }
  )
    .then(() => {
      res.status(200).json({ message: "Vehicle updated successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.status(502).json({ message: "error while updating the vehicle" });
    });
};

const deleteVehicle = async (req, res, next) => {
  await Image.destroy({
    where: {
      vehicleId: req.body.id,
    },
  });

  await Vehicle.destroy({
    where: {
      id: req.body.id,
    },
  })
    .then(() => {
      res.status(200).json({ message: "Vehicle deleted successfully" });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(502)
        .json({ message: "An error occured while deleting the vehicle" });
    });
};

const fetchVehicleById = async (req, res, next) => {
  await Vehicle.findByPk(req.body.id, {
    include: [{ model: Image, as: "images" }],
  }).then((vehicle) => {
    res.status(200).json({ actualData: vehicle.dataValues });
  });
};

export {
  fetchVehicles,
  addVehicle,
  updateVehicle,
  deleteVehicle,
  fetchVehicleById,
};
