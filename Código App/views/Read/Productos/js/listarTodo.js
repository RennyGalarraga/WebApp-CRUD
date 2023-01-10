document.addEventListener("DOMContentLoaded", () => {


  const botonAtras = document.getElementById("back");
  botonAtras.addEventListener("click", function () {
    history.back(-1);
  });

  const botonListar = document.getElementById("listar");
  const tabla = document.getElementById("tableBody");
  botonListar.addEventListener("click", async () => {
    localStorage.removeItem("inputId");
    //Vacía la tabla antes de cargar los datos, evitando duplicados
    while (tabla.firstChild) {
      tabla.removeChild(tabla.firstChild);
    }

    try {
      const resultado = await fetch(
        "http://localhost:3000/views/Read/Productos/listarTodo"
      );
      const datos = await resultado.json();
      datos.forEach((item) => {
        let row = document.createElement("tr");

        let idCell = document.createElement("td");
        idCell.innerText = item.id;
        row.appendChild(idCell);

        let nameCell = document.createElement("td");
        nameCell.innerText = item.nombre;
        row.appendChild(nameCell);
        
        let genderCell = document.createElement("td");
        genderCell.innerText = item.codigo;
        row.appendChild(genderCell);

        let birthdayCell = document.createElement("td");
        birthdayCell.innerText = item.descripcion;
        row.appendChild(birthdayCell);

        let lnameCell = document.createElement("td");
        lnameCell.innerText = item.foto;
        row.appendChild(lnameCell);

        let editCell = document.createElement("td");
        editCell.innerHTML = `<a href="actualizar.html"><button id="edit">Editar</button></a>`;
        row.appendChild(editCell);

        let deleteCell = document.createElement("td");
        deleteCell.innerHTML = `<button id="delete">Eliminar</button>`;
        row.appendChild(deleteCell);

        tabla.appendChild(row);
      });

      const botonEditar = document.querySelectorAll("#edit");
      botonEditar.forEach((element) => {
        element.addEventListener("click", async (event) => {
          if (event.target.id === "edit") {
            const row = event.target.closest("tr");
            const idCell = row.querySelector("td:first-child");
            id = idCell.innerText;
            console.log(id);
            localStorage.setItem("inputId", id);
          }
        });
      });

      const botonEliminar = document.querySelectorAll("#delete");
      botonEliminar.forEach((element) => {
        element.addEventListener("click", async (event) => {
          if (event.target.id === "delete") {
            const row = event.target.closest("tr");
            const idCell = row.querySelector("td:first-child");
            id = idCell.innerText;
            console.log(id);

            await fetch(
              "http://localhost:3000/views/Read/Productos/eliminar/" + id,
              {
                method: "DELETE",
              }
            ).then((response) => {
              if (response.status == "200") {
                alert("El registro se ha eliminado correctamente");
              } else {
                alert("No se pudo eliminar el registro");
              }

              botonListar.click();
            });
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  });

  
});
