const Productos = require("../models/productosModel");

class productosController {
  //Create
  static crearNuevo(req, res) {
    Productos.create(req.body)
      .then((productos) => {
        res.json(productos);
      })
      .catch((error) => {
        res.sendStatus(500);
        console.error(error);
      });
  }

  //Read
  // -General
  static obtenerTodo(req, res) {
    Productos.findAll().then((productos) => {
      res.json(productos);
    });
  }
  // -Especifico
  static obtenerUno(req, res) {
    Productos.findOne({
      where: {
        id: req.params.id,
      },
    }).then((productos) => {
      if (productos == null) {
        res.send(`El producto con ID ${req.params.id} no existe.`);
      } else {
        res.json(productos);
      }
    });
  }

  //Update
  static async actualizarUno(req, res) {
    try {
      // Actualiza el registro
      await Productos.update(req.body, {
        where: {
          id: req.params.id,
        },
      });

      // Encuentra el registro actualizado
      const productos = await Productos.findByPk(req.params.id);
      if (productos) {
        res.json(productos);
      } else {
        res.send(`El producto con ID ${req.params.id} no existe.`);
      }
    } catch (error) {}
  }

  //Delete
  static async eliminarUno(req, res) {
    try {
      // Encuentra el registro con el id especificado
      const productos = await Productos.findByPk(req.params.id);

      if (productos) {
        // Elimina el registro
        await Productos.destroy({
          where: {
            id: req.params.id,
          },
        });

        res.send("El producto se ha eliminado correctamente.");
      } else {
        res.send(`El producto con ID ${req.params.id} no existe.`);
      }
    } catch (err) {}
  }
}

module.exports = productosController;
