// This is the controller which works with the orders table in the database
import Order from "../models/order.js";
import sequelize from "../utils/database.js";

// A function which fetches all the orders from the table
const fetchOrders = async (req, res, next) => {
  await Order.findAll().then((orders) => {
    const actualData = [];
    orders.map((order) => {
      actualData.push(order.dataValues);
    });
    res.status(200).json({ actualData: actualData });
  });
};

// A function which changes the status of the order
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

// A function which calculates the earnings in the current year grouped by month
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

// A function which calculates how many vehicles orders and attraction orders were at every month of the current year
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

// A function which gets the number of the "pending" orders
const getCountOfNewOrders = async (req, res, next) => {
  await sequelize
    .query("SELECT COUNT(*) orders FROM orders WHERE status='Pending';")
    .then((count) => {
      res.status(200).json({ count: count[0] });
    });
};

// A function which updates the status of the "approved" orders to "completed" at the end date of every order
const completedOrders = async (req, res, next) => {
  await sequelize
    .query(
      "UPDATE orders o, vehicles v SET v.quantity=v.quantity+1 WHERE o.status='Approved' AND o.end_Date=DATE(NOW()) AND v.title=o.item_title;"
    )
    .then(async () => {
      await sequelize.query(
        "UPDATE orders SET status='Completed' WHERE status='Approved' AND end_Date=DATE(NOW())"
      );
      res.status(200).json({ message: "Orders status updated successfully " });
    })
    .catch((err) => {
      console.log(err);
    });
};

export {
  fetchOrders,
  changeOrderStatus,
  getEarnings,
  getOrdersStatistics,
  getCountOfNewOrders,
  completedOrders,
};
