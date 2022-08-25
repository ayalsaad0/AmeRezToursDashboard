// This is the controller which works with the admins table in the database
import Admin from "../models/admin.js";

// A function which fetches all the admins from the admin table in the database
const fetchAdmins = async (req, res, next) => {
  await Admin.findAll().then((admins) => {
    const actualData = [];
    admins.map((admin) => {
      actualData.push(admin.dataValues);
    });
    res.status(200).json({ actualData: actualData });
  });
};

export { fetchAdmins };
