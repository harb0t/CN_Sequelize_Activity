require("dotenv").config();
// class constructor with Caps
const { Sequelize } = require("sequelize");

exports.sequelize = new Sequelize(process.env.MYSQL_URI);
