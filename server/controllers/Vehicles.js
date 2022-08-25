// This is the controller which works with the vehicles table in the database
import Vehicle from "../models/vehicle.js";
import Image from "../models/image.js";
import Order from "../models/order.js";
import sequelize from "../utils/database.js";

// A function which fethces all the vehicles from the database
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

// A function which adds a new vehicle to the vehicles tablee
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
};

// A function which adds or updates the images of the vehicle
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

// A function which updates the vehicle info
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

// A function which deletes a vehicle from the database
const deleteVehicle = async (req, res, next) => {
  // The vehicle cannot be deleted if it does exist in a "pending" order
  await Order.findOne({
    where: {
      vehicleId: req.body.id,
      status: "Pending",
    },
  }).then(async (vehicleOrder) => {
    if (vehicleOrder) {
      return res.status(409).json({
        message:
          "This vehicle cannot be deleted at this moment, there is an open reservation for this vehicle.",
      });
    } else {
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
    }
  });
};

// A function which fetches a vehicle from the database by it's id
const fetchVehicleById = async (req, res, next) => {
  await Vehicle.findByPk(req.body.id, {
    include: [{ model: Image, as: "images" }],
  }).then((vehicle) => {
    res.status(200).json({ actualData: vehicle.dataValues });
  });
};

// A function which increments the quantity of a vehicle, after completing the same vehicle's orders
const incrementQuantity = async (req, res, next) => {
  const vehicleToUpdate = await Vehicle.findOne({
    where: {
      title: req.body.title,
    },
  });
  if (vehicleToUpdate) {
    await Vehicle.update(
      {
        quantity: vehicleToUpdate.dataValues.quantity + 1,
      },
      {
        where: {
          id: vehicleToUpdate.dataValues.id,
        },
      }
    )
      .then(() => {
        res
          .status(200)
          .json({ message: "Vehicle quantity successfully updated" });
      })
      .catch((err) => {
        console.log(err);
        res
          .status(502)
          .json({ message: "An error updating the vehicle quantity" });
      });
  }
};

// A function which updates the status of a vehicle to "unavailable" when the available quantity is down to zero
const unavailableVehicles = async (req, res, next) => {
  await sequelize
    .query(
      "UPDATE vehicles SET available=CASE WHEN quantity=0 THEN 0 WHEN quantity>0 THEN 1 END;"
    )
    .then(() => {
      res.status.json({
        message: "Vehicles availability updated successfully ",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export {
  fetchVehicles,
  addVehicle,
  updateVehicle,
  deleteVehicle,
  fetchVehicleById,
  incrementQuantity,
  unavailableVehicles,
};
