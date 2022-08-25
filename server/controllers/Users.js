// This is the controller which works with the users table in the database
import User from "../models/user.js";

// A function which fetches all the customers/users from the database (from the users table)
const fetchCustomers = async (req, res, next) => {
  await User.findAll().then((customers) => {
    const actualData = [];
    customers.map((customer) => {
      actualData.push(customer.dataValues);
    });
    res.status(200).json({ actualData: actualData });
  });
};

// A function which fetches the info of a customer by his id
const fetchCustomerById = async (req, res, next) => {
  await User.findByPk(req.body.userId).then((user) => {
    res.status(200).json({ actualData: user.dataValues });
  });
};

export { fetchCustomers, fetchCustomerById };
