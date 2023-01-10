const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/db");
const Buffer = require('buffer').Buffer;

class Mensajes extends Model {}
Mensajes.init(
  {
    correo_rem: {
      type: DataTypes.STRING,
      allowNull: false,
      length: 30
    },
    remitente: {
      type: DataTypes.STRING,
      allowNull: false,
      length: 30
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
      length: 15
    },
    asunto: {
      type: DataTypes.STRING,
      allowNull: false,
      length: 30
    },
    mensaje: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: "Mensajes",
    tableName: "Mensajes",
  }
);

module.exports = Mensajes;