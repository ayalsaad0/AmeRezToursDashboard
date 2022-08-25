import { Sequelize } from "sequelize";

// The connection details to the database
const sequelize = new Sequelize("amereztours", "root", "", {
  dialect: "mariadb",
  host: "localhost",
});

export default sequelize;
