import express from "express";
import sequelize from "./utils/database.js";
import cors from "cors";
import router from "./routes/routes.js";
import fileUpload from "express-fileupload";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());

app.use((_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(router);

sequelize.sync();

app.listen(3001);
