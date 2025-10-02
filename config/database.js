const { Sequelize } = require("sequelize");

// Conexão com SQLite (arquivo local db.sqlite)
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "db.sqlite"
});

module.exports = sequelize;
