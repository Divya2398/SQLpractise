const { Sequelize } = require("sequelize");
const db = require("../middleware/dbconnection");

const recordschema = db.define(
  "records",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: { type: Sequelize.STRING, allowNull: false },
    rollno: { type: Sequelize.INTEGER, allowNull: false },
    DOB: { type: Sequelize.STRING, allowNull: false },
    gender: { type: Sequelize.STRING, allowNull: false },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

module.exports = recordschema;
