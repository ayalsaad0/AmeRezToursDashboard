import { Sequelize } from "Sequelize";
import sequelize from "../utils/database.js";

// The model of the order
const Order = sequelize.define("orders", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  start_Date: {
    type: Sequelize.DATEONLY,
    allowNull: false,
  },
  end_Date: {
    type: Sequelize.DATEONLY,
    allowNull: true,
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  attractionId: {
    allowNull: true,
    type: Sequelize.INTEGER,
  },
  vehicleId: {
    allowNull: true,
    type: Sequelize.INTEGER,
  },
  quantity: {
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  item_title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone_num: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  order_price: {
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  img_link: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

export default Order;
