import User from "../models/user.js";

const fetchCustomers = async (req, res, next) => {
  const customers = await User.findAll().then((customers) => {
    const actualData = [];
    customers.map((customer) => {
      actualData.push(customer.dataValues);
    });
    res.status(200).json({ actualData: actualData });
  });
};

const fetchCustomerById = async (req, res, next) => {
  await User.findByPk(req.body.userId).then((user) => {
    res.status(200).json({ actualData: user.dataValues });
  });
};

export { fetchCustomers, fetchCustomerById };
