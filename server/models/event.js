import { Sequelize } from "sequelize";
import sequelize from "../utils/database.js";

// The model of the event
const Event = sequelize.define(
  "events",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    subject: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    start_time: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    end_time: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export default Event;
