import Admin from "../models/admin.js";

const fetchAdmins = async (req, res, next) => {
  const admins = await Admin.findAll().then((admins) => {
    const actualData = [];
    admins.map((admin) => {
      actualData.push(admin.dataValues);
    });
    res.status(200).json({ actualData: actualData });
  });
};

export { fetchAdmins };
