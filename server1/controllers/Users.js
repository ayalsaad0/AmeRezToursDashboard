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

export { fetchCustomers };
