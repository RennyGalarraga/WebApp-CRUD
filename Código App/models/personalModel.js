const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database/db");

class Personal extends Model {}
Personal.init(
  {
    cedula: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      length: 15
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      length: 30
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
      length: 30
    },
    cumpleaños: {
      type: DataTypes.DATE,
      allowNull: false
    },
    genero: {
      type: DataTypes.ENUM,
      values: ["Masculino", "Femenino", "Otro"],
      allowNull: false
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
      length: 15
    },
    rol: {
      type: DataTypes.STRING,
      allowNull: false,
      length: 30
    }
  },
  {
    sequelize,
    modelName: "Personal",
    tableName: "Personal",
  }
);

module.exports = Personal;
