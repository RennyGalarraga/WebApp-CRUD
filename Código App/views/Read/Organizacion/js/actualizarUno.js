document.addEventListener("DOMContentLoaded", () => {


  const botonAtras = document.getElementById("back");
  botonAtras.addEventListener("click", function () {
    history.back(-1);
  });

  const valorInput = localStorage.getItem("inputId");
  const tabla = document.getElementById("tableBody");

  // Do something with the input value
  const resultado = fetch(
    "http://localhost:3000/views/Read/Organizacion/buscarId/" + valorInput
  );
  resultado
    .then((response) => response.json())
    .then((datos) => {
      const edicion = document.createElement("tr");
      edicion.innerHTML = `
                        <form id="formulario">
                            <td><input type="text" id="n_id" class="bloqueado" name="id" value="${datos.id}" readonly /></td>
                            <td><input type="text" id="n_nombre" name="nombre" value="${datos.nombre}" required></td>
                            <td><input type="file" id="n_foto" name="foto" value="${datos.foto}" required></td>
                            <td><input type="text" id="n_descripcion" name="descripcion" value="${datos.descripcion}" required></td>
                            <td><input type="text" id="n_mision" name="mision" value="${datos.mision}" required></td>
                            <td><input type="tel" id="n_vision" name="vision" value="${datos.vision}" required></td>
                            <td><input type="text" id="n_valores" name="valores" value="${datos.valores}" required></td>
                            <td><input type="submit" value="Guardar" id="guardar"></td>
                        </form>
                      `;
      tabla.appendChild(edicion);

      const botonGuardar = document.getElementById("guardar");
      botonGuardar.addEventListener("click", async () => {
        // Primero obtenemos los datos del formulario
        const n_id = await document.getElementById("n_id").value;
        const n_nombre = await document.getElementById("n_nombre").value;
        const n_foto = await document.getElementById("n_foto").value;
        const n_descripcion = await document.getElementById("n_descripcion").value;
        const n_mision = await document.getElementById("n_mision").value;
        const n_vision = await document.getElementById("n_vision").value;
        const n_valores = await document.getElementById("n_valores").value;

        while (tabla.firstChild) {
          tabla.removeChild(tabla.firstChild);
        }

        // Luego, enviamos los datos del formulario utilizando fetch y el método PUT
        const n_resultado = await fetch(
          "http://localhost:3000/views/Read/Organizacion/actualizar/" + valorInput,
          {
            method: "PUT",
            body: JSON.stringify({
              id: n_id,
              nombre: n_nombre,
              foto: n_foto,
              descripcion: n_descripcion,
              mision: n_mision,
              vision: n_vision,
              valores: n_valores
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const actualizado = await fetch(
          "http://localhost:3000/views/Read/Organizacion/buscarId/" + valorInput
        );
        const data = await actualizado.json();
        const datosFila = document.createElement("tr");
        datosFila.innerHTML = `
          <td>${data.id}</td>
          <td>${data.nombre}</td>
          <td>${data.foto}</td>
          <td>${data.descripcion}</td>
          <td>${data.mision}</td>
          <td>${data.vision}</td>
          <td>${data.valores}</td>
          <td><a href="actualizar.html"><button id="editar">Editar</button></a></td>
        `;
        tabla.appendChild(datosFila);
        console.log(data);
      });
    });
    

});
