import express from "express";
import {
  signup,
  login,
  updatedPassword,
  isAuth,
} from "../controllers/Authentication.js";
import {
  addAttraction,
  deleteAttraction,
  fetchAttractions,
  updateAttraction,
  fetchAttractionById,
} from "../controllers/Attractions.js";
import {
  addVehicle,
  fetchVehicles,
  updateVehicle,
  deleteVehicle,
  fetchVehicleById,
} from "../controllers/Vehicles.js";
import { fetchAdmins } from "../controllers/Employees.js";
import { fetchCustomers, fetchCustomerById } from "../controllers/Users.js";
import {
  addEvent,
  deleteEvent,
  fetchEvents,
  updateEvent,
} from "../controllers/Events.js";
import {
  fetchOrders,
  changeOrderStatus,
  getEarnings,
  getOrdersStatistics,
  getCountOfNewOrders,
} from "../controllers/Orders.js";

const router = express.Router();

// #region authentication
router.post("/login", login);
router.post("/signup", signup);
router.post("/updatedPassword", updatedPassword);
router.get("/private", isAuth);
// #endregion

// #region attractions
router.post("/fetchAttractions", fetchAttractions);
router.post("/addAttraction", addAttraction);
router.post("/updateAttraction", updateAttraction);
router.post("/deleteAttraction", deleteAttraction);
router.post("/fetchAttractionById", fetchAttractionById);
// #endregion

// #region vehicles
router.post("/fetchVehicles", fetchVehicles);
router.post("/addVehicle", addVehicle);
router.post("/updateVehicle", updateVehicle);
router.post("/deleteVehicle", deleteVehicle);
router.post("/fetchVehicleById", fetchVehicleById);
// #endregion

// #region events
router.post("/fetchEvents", fetchEvents);
router.post("/addEvent", addEvent);
router.post("/updateEvent", updateEvent);
router.post("/deleteEvent", deleteEvent);
// #endregion

// #region orders
router.post("/fetchOrders", fetchOrders);
router.post("/changeOrderStatus", changeOrderStatus);
router.post("/getEarnings", getEarnings);
router.post("/getOrdersStatistics", getOrdersStatistics);
router.post("/getCountOfNewOrders", getCountOfNewOrders);
// #endregion

router.post("/fetchAdmins", fetchAdmins);

// #region customers or users
router.post("/fetchCustomers", fetchCustomers);
router.post("/fetchCustomerById", fetchCustomerById);
// #endregion

router.get("/public", (req, res, next) => {
  res.status(200).json({ message: "here is your public resource" });
});

// will match any other path
router.use("/", (req, res, next) => {
  res.status(404).json({ error: "page not found" });
});

export default router;
