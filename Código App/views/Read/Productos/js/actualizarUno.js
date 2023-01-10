document.addEventListener("DOMContentLoaded", () => {


  const botonAtras = document.getElementById("back");
  botonAtras.addEventListener("click", function () {
    history.back(-1);
  });

  const valorInput = localStorage.getItem("inputId");
  const tabla = document.getElementById("tableBody");

  // Do something with the input value
  const resultado = fetch(
    "http://localhost:3000/views/Read/Productos/buscarId/" + valorInput
  );
  resultado
    .then((response) => response.json())
    .then((datos) => {
      const edicion = document.createElement("tr");
      edicion.innerHTML = `
                        <form id="formulario">
                            <td><input type="text" id="n_id" class="bloqueado" name="id" value="${datos.id}" readonly /></td>
                            <td><input type="text" id="n_nombre" name="nombre" value="${datos.nombre}" required></td>
                            <td><input type="text" id="n_codigo" name="mision" value="${datos.codigo}" required></td>
                            <td><input type="text" id="n_descripcion" name="descripcion" value="${datos.descripcion}" required></td>
                            <td><input type="file" id="n_foto" name="foto" value="${datos.foto}" required></td>
                            <td><input type="submit" value="Guardar" id="guardar"></td>
                        </form>
                      `;
      tabla.appendChild(edicion);

      const botonGuardar = document.getElementById("guardar");
      botonGuardar.addEventListener("click", async () => {
        // Primero obtenemos los datos del formulario
        const n_id = await document.getElementById("n_id").value;
        const n_nombre = await document.getElementById("n_nombre").value;
        const n_codigo = await document.getElementById("n_codigo").value;
        const n_descripcion = await document.getElementById("n_descripcion").value;
        const n_foto = await document.getElementById("n_foto").value;

        while (tabla.firstChild) {
          tabla.removeChild(tabla.firstChild);
        }

        // Luego, enviamos los datos del formulario utilizando fetch y el método PUT
        const n_resultado = await fetch(
          "http://localhost:3000/views/Read/Productos/actualizar/" + valorInput,
          {
            method: "PUT",
            body: JSON.stringify({
              id: n_id,
              nombre: n_nombre,
              codigo: n_codigo,
              descripcion: n_descripcion,
              foto: n_foto
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const actualizado = await fetch(
          "http://localhost:3000/views/Read/Productos/buscarId/" + valorInput
        );
        const data = await actualizado.json();
        const datosFila = document.createElement("tr");
        datosFila.innerHTML = `
          <td>${data.id}</td>
          <td>${data.nombre}</td>
          <td>${data.codigo}</td>
          <td>${data.descripcion}</td>
          <td>${data.foto}</td>
          <td><a href="actualizar.html"><button id="editar">Editar</button></a></td>
        `;
        tabla.appendChild(datosFila);
        console.log(data);
      });
    });
    

});
