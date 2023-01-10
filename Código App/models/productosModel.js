const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/db");
const Buffer = require('buffer').Buffer;

class Productos extends Model {}
Productos.init(
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      length: 30
    },
    codigo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    foto: {
      type: DataTypes.BLOB,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: "Productos",
    tableName: "Productos",
  }
);

module.exports = Productos;