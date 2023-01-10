document.addEventListener("DOMContentLoaded", () => {


  const botonAtras = document.getElementById("back");
  botonAtras.addEventListener("click", function () {
    history.back(-1);
  });

  const botonBuscar = document.getElementById("buscar");
  const tabla = document.getElementById("tableBody");

  botonBuscar.addEventListener("click", async () => {
    const input = document.querySelector("input");
    const valorInput = input.value;
    const form = document.getElementById("form");
    form.addEventListener("submit", (event) => {
      localStorage.removeItem("inputId");
      localStorage.setItem("inputId", valorInput);
      event.preventDefault();
    });

    //Vacía la tabla antes de cargar los datos, evitando duplicados
    while (tabla.firstChild) {
      tabla.removeChild(tabla.firstChild);
    }

    const resultado = await fetch(
      "http://localhost:3000/views/Read/Productos/buscarId/" + valorInput
    );
    if (resultado.status == 404) {
      alert("No exíste Producto con el ID: " + valorInput);
    } else {
      const datos = await resultado.json();
      const fila = document.createElement("tr");
      fila.innerHTML = `
          <td>${datos.id}</td>
          <td>${datos.nombre}</td>
          <td>${datos.codigo}</td>
          <td>${datos.descripcion}</td>
          <td>${datos.foto}</td>
          <td><a href="actualizar.html"><button id="editar">Editar</button></a></td>
          <td><button id="delete">Eliminar</button></td>
          `;
      tabla.appendChild(fila);

      const botonEliminar = document.getElementById("delete");
      botonEliminar.addEventListener("click", async () => {
        const id = datos.id;
        console.log(id);

        await fetch(
          "http://localhost:3000/views/Read/Productos/eliminar/" + id,
          {
            method: "DELETE",
          }
        ).then((response) => {
          if (response.status == "200") {
            alert("El registro se ha eliminado correctamente");
            location.reload(true);
          } else {
            alert("No se pudo eliminar el registro");
          }
        });
      });
    }
  });

  
});
