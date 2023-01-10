const { Model } = require("sequelize");
const sequelize = require("../database/db");
const Personal = require("../models/personalModel");

class personalController {
  //Create
  static crearNuevo(req, res) {
    Personal.create(req.body)
      .then((personal) => {
        res.json(personal);
      })
      .catch((error) => {
        res.sendStatus(500);
        console.log(error);
        console.error(error);
      });
  }

  //Read
  // -General
  static obtenerTodo(req, res) {
    Personal.findAll().then((personal) => {
      res.json(personal);
    });
  }
  // -Especifico
  static obtenerUno(req, res) {
    Personal.findOne({
      where: {
        id: req.params.id
      },
    }).then((personal) => {
      if (personal == null) {
        res.sendStatus(404);
      } else {
        res.json(personal);
      }
    });
  }

  //Update
  static async actualizarUno(req, res) {
    const editando = await Personal.findByPk(req.params.id)
          // Actualiza el registro
          await Personal.update({
            cedula: req.body.cedula,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            cumpleaños: req.body.cumpleaños,
            genero: req.body.genero,
            telefono: req.body.telefono,
            rol: req.body.rol
          },{
            where: {
              id: req.params.id
            },
          }).then((personal) => {
            if (personal == null) {
              res.send(`El personal con ID ${req.params.id} no existe.`);
            } else {
              const actualizado = Personal.findByPk(req.params.id);
              res.json(actualizado);
            }
          });
  }

  //Delete
  static async eliminarUno(req, res) {
    try {
      // Encuentra el registro con el id especificado
      const personal = await Personal.findByPk(req.params.id);

      if (personal) {
        // Elimina el registro
        await Personal.destroy({
          where: {
            id: req.params.id,
          },
        }).then(eliminado => {
          if (eliminado == 1) {
            res.sendStatus(200);
          } else {
            res.sendStatus(400);
          }
        })
      }

    } catch (err) {}
  }
}


module.exports = personalController;
