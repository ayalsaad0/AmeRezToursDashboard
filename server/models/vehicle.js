import { Sequelize } from "Sequelize";
import sequelize from "../utils/database.js";
import Image from "../models/image.js";
import Order from "./order.js";

const Vehicle = sequelize.define(
  "vehicles",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    suitcases: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    places: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    available: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    driver: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export default Vehicle;

Vehicle.hasMany(Image, { as: "images" });

Image.belongsTo(Vehicle, {
  foreignKey: "vehicleId",
  as: "vehicleImages",
});
