document.addEventListener("DOMContentLoaded", () => {


  const botonAtras = document.getElementById("back");
  botonAtras.addEventListener("click", function () {
    history.back(-1);
  });

  const valorInput = localStorage.getItem("inputId");
  const tabla = document.getElementById("tableBody");

  // Do something with the input value
  const resultado = fetch(
    "http://localhost:3000/views/Read/Personal/buscarId/" + valorInput
  );
  resultado
    .then((response) => response.json())
    .then((datos) => {
      const edicion = document.createElement("tr");
      edicion.innerHTML = `
                        <form id="formulario">
                            <td><input type="text" id="n_id" class="bloqueado" name="id" value="${datos.id}" readonly /></td>
                            <td><input type="text" id="n_cedula" name="cedula" value="${datos.cedula}" required></td>
                            <td><input type="text" id="n_nombre" name="nombre" value="${datos.nombre}" required></td>
                            <td><input type="text" id="n_apellido" name="apellido" value="${datos.apellido}" required></td>
                            <td><input type="date" id="n_cumpleaños" name="cumpleaños" min="1922-01-01" max="2022-12-31" value="${datos.cumpleaños}"></td>
                            <td>
                                <select id="n_genero" name="genero" required>
                                    <option selected="selected" value="${datos.genero}">${datos.genero}</option>
                                    <option value="Masculino">Masculino</option>
                                    <option value="Femenino">Femenino</option>
                                    <option value="Otro">Otro</option>
                                </select>
                            </td>
                            <td><input type="tel" id="n_telefono" name="telefono" value="${datos.telefono}" required></td>
                            <td><input type="text" id="n_rol" name="rol" value="${datos.rol}" required></td>
                            <td><input type="submit" value="Guardar" id="guardar"></td>
                        </form>
                      `;
      tabla.appendChild(edicion);

      const botonGuardar = document.getElementById("guardar");
      botonGuardar.addEventListener("click", async () => {
        // Primero obtenemos los datos del formulario
        const n_id = document.getElementById("n_id").value;
        const n_cedula = document.getElementById("n_cedula").value;
        const n_nombre = document.getElementById("n_nombre").value;
        const n_apellido = document.getElementById("n_apellido").value;
        const n_cumpleaños = document.getElementById("n_cumpleaños").value;
        const n_genero = document.getElementById("n_genero").value;
        const n_telefono = document.getElementById("n_telefono").value;
        const n_rol = document.getElementById("n_rol").value;

        while (tabla.firstChild) {
          tabla.removeChild(tabla.firstChild);
        }

        // Luego, enviamos los datos del formulario utilizando fetch y el método PUT
        const n_resultado = await fetch(
          "http://localhost:3000/views/Read/Personal/actualizar/" + valorInput,
          {
            method: "PUT",
            body: JSON.stringify({
              id: n_id,
              cedula: n_cedula,
              nombre: n_nombre,
              apellido: n_apellido,
              cumpleaños: n_cumpleaños,
              genero: n_genero,
              telefono: n_telefono,
              rol: n_rol,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const actualizado = await fetch(
          "http://localhost:3000/views/Read/Personal/buscarId/" + valorInput
        );
        const data = await actualizado.json();
        const datosFila = document.createElement("tr");
        datosFila.innerHTML = `
          <td>${data.id}</td>
          <td>${data.cedula}</td>
          <td>${data.nombre}</td>
          <td>${data.apellido}</td>
          <td>${data.cumpleaños}</td>
          <td>${data.genero}</td>
          <td>${data.telefono}</td>
          <td>${data.rol}</td>
          <td><a href="actualizar.html"><button id="editar">Editar</button></a></td>
        `;
        tabla.appendChild(datosFila);
        console.log(data);
      });
    });
    

});
