const express = require("express");
const { database } = require("./database/config");
const app = express();
const sequelize = require("./database/db");
const organizacionController = require("./controllers/organizacionController");
const personalController = require("./controllers/personalController");
const productosController = require("./controllers/productosController");
const mensajesController = require("./controllers/mensajesController");
const bodyParser = require("body-parser");
const Buffer = require("buffer").Buffer;


// Configura el Access-Control-Allow para permitir las distintas peticiones de distintos dominios
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

//SETTING
const port = 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//RUTAS
app.get("/", (req, res) => {
  console.log("Respuesta de Express");
});

//Organización
app.get(
  "/views/Read/Organizacion/listarTodo",
  organizacionController.obtenerTodo
);
app.post("/views/Create/Organizacion/crear", organizacionController.crearNuevo);
app.get("/views/Read/Organizacion/buscarId/:id", organizacionController.obtenerUno);
app.put("/views/Read/Organizacion/actualizar/:id", organizacionController.actualizarUno);
app.delete("/views/Read/Organizacion/eliminar/:id", organizacionController.eliminarUno);

//Personal
app.get("/views/Read/Personal/listarTodo", personalController.obtenerTodo);
app.post("/views/Create/Personal/crear", personalController.crearNuevo);
app.get("/views/Read/Personal/buscarId/:id", personalController.obtenerUno);
app.put(
  "/views/Read/Personal/actualizar/:id",
  personalController.actualizarUno
);
app.delete("/views/Read/Personal/eliminar/:id", personalController.eliminarUno);

//Productos
app.get("/views/Read/Productos/listarTodo", productosController.obtenerTodo);
app.post("/views/Create/Productos/crear", productosController.crearNuevo);
app.get("/views/Read/Productos/buscarId/:id", productosController.obtenerUno);
app.put("/views/Read/Productos/actualizar/:id", productosController.actualizarUno);
app.delete("/views/Read/Productos/eliminar/:id", productosController.eliminarUno);

//Mensajes Recibidos
app.get("/views/Read/Mensajes/listarTodo", mensajesController.obtenerTodo);
app.post("/views/Create/Mensajes/crear", mensajesController.crearNuevo);
app.get("/views/Read/Mensajes/buscarId/:id", mensajesController.obtenerUno);
app.put("/views/Read/Mensajes/actualizar/:id", mensajesController.actualizarUno);
app.delete("/views/Read/Mensajes/eliminar/:id", mensajesController.eliminarUno);


//INICIA EL SERVIDOR
app.listen(port, () => {
  console.log(`Escuchando en el puerto: ${port}`);

  // CONECTA A LA BD
  sequelize
    .sync({ force: false })
    .then(() => {
      console.log(
        `Se conectó a la BD: ${database.database}, con el usuario: ${database.username}`
      );
    })
    .catch((error) => {
      console.log(`Se encontró un error: ${error}`);
    });
});
