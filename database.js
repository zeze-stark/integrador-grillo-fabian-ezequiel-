const { Sequelize, DataTypes } = require('sequelize');

// Crear una instancia de conexión a BD
const sequelize = new Sequelize('forodb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });




  module.exports = {
    sequelize,
    DataTypes,
    Sequelize,
  }