document.addEventListener("DOMContentLoaded", () => {


  const botonAtras = document.getElementById("back");
  botonAtras.addEventListener("click", function () {
    history.back(-1);
  });

  const valorInput = localStorage.getItem("inputId");
  const tabla = document.getElementById("tableBody");

  // Do something with the input value
  const resultado = fetch(
    "http://localhost:3000/views/Read/Mensajes/buscarId/" + valorInput
  );
  resultado
    .then((response) => response.json())
    .then((datos) => {
      const edicion = document.createElement("tr");
      edicion.innerHTML = `
                        <form id="formulario">
                            <td><input type="text" id="n_id" class="bloqueado" name="id" value="${datos.id}" readonly /></td>
                            <td><input type="text" id="n_correo" name="correo" value="${datos.correo}" required></td>
                            <td><input type="text" id="n_remitente" name="remitente" value="${datos.remitente}" required></td>
                            <td><input type="tel" id="n_telefono" name="telefono" value="${datos.telefono}" required></td>
                            <td><input type="text" id="n_asunto" name="asunto" value="${datos.asunto}" required></td>
                            <td><input type="text" id="n_mensaje" name="mensaje" value="${datos.mensaje}" required></td>
                            <td><input type="submit" value="Guardar" id="guardar"></td>
                        </form>
                      `;
      tabla.appendChild(edicion);

      const botonGuardar = document.getElementById("guardar");
      botonGuardar.addEventListener("click", async () => {
        // Primero obtenemos los datos del formulario
        const n_id = document.getElementById("n_id").value;
        const n_correo = document.getElementById("n_correo").value;
        const n_remitente = document.getElementById("n_remitente").value;
        const n_telefono = document.getElementById("n_telefono").value;
        const n_asunto = document.getElementById("n_asunto").value;
        const n_mensaje = document.getElementById("n_mensaje").value;

        while (tabla.firstChild) {
          tabla.removeChild(tabla.firstChild);
        }

        // Luego, enviamos los datos del formulario utilizando fetch y el método PUT
        const n_resultado = await fetch(
          "http://localhost:3000/views/Read/Mensajes/actualizar/" + valorInput,
          {
            method: "PUT",
            body: JSON.stringify({
              id: n_id,
              correo: n_correo,
              remitente: n_remitente,
              telefono: n_telefono,
              asunto: n_asunto,
              mensaje: n_mensaje
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const actualizado = await fetch(
          "http://localhost:3000/views/Read/Mensajes/buscarId/" + valorInput
        );
        const data = await actualizado.json();
        const datosFila = document.createElement("tr");
        datosFila.innerHTML = `
          <td>${data.id}</td>
          <td>${data.correo}</td>
          <td>${data.remitente}</td>
          <td>${data.telefono}</td>
          <td>${data.asunto}</td>
          <td>${data.mensaje}</td>
          <td><a href="actualizar.html"><button id="editar">Editar</button></a></td>
        `;
        tabla.appendChild(datosFila);
        console.log(data);
      });
    });
    

});
