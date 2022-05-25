const { Sequelize } = require("sequelize");

const database = new Sequelize("student", "root", "project", {
  host: "localhost",
  port: "3306",
  dialect: "mysql",
});

module.exports = database;
