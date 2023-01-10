const Mensajes = require("../models/mensajesModel");

class mensajesController {
  //Create
  static crearNuevo(req, res) {
    Mensajes.create(req.body)
      .then((mensajes) => {
        res.json(mensajes);
      })
      .catch((error) => {
        res.sendStatus(500);
        console.error(error);
      });
  }

  //Read
  // -General
  static obtenerTodo(req, res) {
    Mensajes.findAll().then((mensajes) => {
      res.json(mensajes);
    });
  }
  // -Especifico
  static obtenerUno(req, res) {
    Mensajes.findOne({
      where: {
        id: req.params.id,
      },
    }).then((mensajes) => {
      if (mensajes == null) {
        res.send(`El mensaje con ID ${req.params.id} no existe.`);
      } else {
        res.json(mensajes);
      }
    });
  }

  //Update
  static async actualizarUno(req, res) {
    try {
      // Actualiza el registro
      await Mensajes.update(req.body, {
        where: {
          id: req.params.id,
        },
      });

      // Encuentra el registro actualizado
      const mensajes = await Mensajes.findByPk(req.params.id);
      if (mensajes) {
        res.json(mensajes);
      } else {
        res.send(`El mensaje con ID ${req.params.id} no existe.`);
      }
    } catch (error) {}
  }

  //Delete
  static async eliminarUno(req, res) {
    try {
      // Encuentra el registro con el id especificado
      const mensajes = await Mensajes.findByPk(req.params.id);

      if (mensajes) {
        // Elimina el registro
        await Mensajes.destroy({
          where: {
            id: req.params.id,
          },
        });

        res.send("El mensaje se ha eliminado correctamente.");
      } else {
        res.send(`El mensaje con ID ${req.params.id} no existe.`);
      }
    } catch (err) {}
  }
}

module.exports = mensajesController;
