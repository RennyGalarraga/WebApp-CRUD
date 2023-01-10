const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/db");
const Buffer = require('buffer').Buffer;

class Organizacion extends Model {}
Organizacion.init(
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      length: 30
    },
    foto: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    mision: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    vision: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    valores: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: "Organizacion",
    tableName: "Organizacion",
  }
);

module.exports = Organizacion;