const Sequelize = require("sequelize");
require("dotenv").config();
var session = require("express-session");

// initalize sequelize with session store
var SequelizeStore = require("connect-session-sequelize")(session.Store);

const CONFIG = {
  DB_name: process.env.DB_name,
  DB_username: process.env.DB_username,
  DB_password: process.env.DB_password,
  DB_dialect: process.env.DB_dialect,
  DB_host: process.env.DB_host,
};

// Database connection

const db = new Sequelize(
  CONFIG.DB_name,
  CONFIG.DB_username,
  CONFIG.DB_password,
  {
    host: CONFIG.DB_host,
    dialect: CONFIG.DB_dialect,
  }
);

try {
  db.authenticate();
  db.sync({ force: false });
  console.log("Database Connected and sync successfull ...");
} catch (error) {
  throw error;
}

module.exports = db;
