import Attraction from "../models/attraction.js";
import Order from "../models/order.js";
import User from "../models/user.js";
import Vehicle from "../models/vehicle.js";
import sequelize from "../utils/database.js";

const fetchOrders = async (req, res, next) => {
  await Order.findAll().then((orders) => {
    const actualData = [];
    orders.map((order) => {
      actualData.push(order.dataValues);
    });
    res.status(200).json({ actualData: actualData });
  });
};

const changeOrderStatus = async (req, res, next) => {
  await Order.update(
    {
      status: req.body.status,
    },
    {
      where: {
        id: req.body.order_id,
      },
    }
  )
    .then(() => {
      res.status(200).json({ message: "Status updated successfully " });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(502)
        .json({ message: "An error occured while updating the order status" });
    });
};

const getEarnings = async (req, res, next) => {
  await sequelize
    .query(
      "SELECT MONTH(createdAt) month, SUM(order_price) earnings FROM orders WHERE status='Completed' AND YEAR(createdAt)=YEAR(NOW()) GROUP BY MONTH(createdAt)"
    )
    .then((earnings) => {
      const total = earnings[0];
      const IncomeData = [];
      let index = 0;
      for (let month = 1; month <= 12; month++) {
        const IncomeObj = {};
        IncomeObj["id"] = month;
        IncomeObj["month"] = month;
        if (index < total.length && total[index].month === month) {
          IncomeObj["total"] = total[index].earnings;
          index++;
        } else IncomeObj["total"] = 0;
        IncomeData.push(IncomeObj);
      }
      res.status(200).json({ earnings: IncomeData });
    });
};

const getOrdersStatistics = async (req, res, next) => {
  await sequelize
    .query(
      "SELECT MONTH(createdAt) month, COUNT(attractionId) attractions, COUNT(vehicleId) vehicles FROM orders WHERE status='Completed' AND YEAR(createdAt)=YEAR(NOW()) GROUP BY attractionId OR vehicleId, month(createdAt);"
    )
    .then((orders) => {
      const stats = orders[0];
      const ordersData = [];
      let index = 0;
      for (let month = 1; month <= 12; month++) {
        const orderObj = {};
        orderObj["month"] = month;
        if (index < stats.length && stats[index].month === month) {
          orderObj["attractions"] = stats[index].attractions;
          orderObj["vehicles"] = stats[index].vehicles;
          index++;
        } else {
          orderObj["attractions"] = 0;
          orderObj["vehicles"] = 0;
        }
        ordersData.push(orderObj);
      }
      res.status(200).json({ statistics: ordersData });
    });
};

const getCountOfNewOrders = async (req, res, next) => {
  await sequelize
    .query("SELECT COUNT(*) orders FROM orders WHERE status='New';")
    .then((count) => {
      res.status(200).json({ count: count[0] });
    });
};

export {
  fetchOrders,
  changeOrderStatus,
  getEarnings,
  getOrdersStatistics,
  getCountOfNewOrders,
};
