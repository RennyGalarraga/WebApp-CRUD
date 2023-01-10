const Organizacion = require("../models/organizacionModel");

class organizacionController {
  //Create
  static crearNuevo(req, res) {
    Organizacion.create(req.body)
      .then((organizacion) => {
        res.json(organizacion);
      })
      .catch((error) => {
        res.sendStatus(500);
        console.error(error);
      });
  }

  //Read
  // -General
  static obtenerTodo(req, res) {
    Organizacion.findAll().then((organizacion) => {
      res.json(organizacion);
    });
  }
  // -Especifico
  static obtenerUno(req, res) {
    Organizacion.findOne({
      where: {
        id: req.params.id,
      },
    }).then((organizacion) => {
      if (organizacion == null) {
        res.sendStatus(404);
      } else {
        res.json(organizacion);
      }
    });
  }

  //Update
  static async actualizarUno(req, res) {
    const editando = await Organizacion.findByPk(req.params.id)
          // Actualiza el registro
          await Organizacion.update({
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
          }).then((organizacion) => {
            if (organizacion == null) {
              res.send(`La Organización con ID ${req.params.id} no existe.`);
            } else {
              const actualizado = Organizacion.findByPk(req.params.id);
              res.json(actualizado);
            }
          });
  }

  //Delete
  static async eliminarUno(req, res) {
    try {
      // Encuentra el registro con el id especificado
      const organizacion = await Organizacion.findByPk(req.params.id);

      if (organizacion) {
        // Elimina el registro
        await Organizacion.destroy({
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

module.exports = organizacionController;
