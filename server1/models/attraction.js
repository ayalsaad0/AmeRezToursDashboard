import { Sequelize } from "Sequelize";

import sequelize from "../utils/database.js";
import Image from "../models/image.js";
const Attraction = sequelize.define(
  "attractions",
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
    availability: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    location: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    guests: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    start_Date: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    end_Date: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export default Attraction;

Attraction.hasMany(Image, { as: "images" });

Image.belongsTo(Attraction, {
  foreignKey: "attractionId",
  as: "attraction",
});
