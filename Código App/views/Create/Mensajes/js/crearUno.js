document.addEventListener("DOMContentLoaded", () => {


  const botonAtras = document.getElementById("back");
  botonAtras.addEventListener("click", function () {
    history.back(-1);
  });

  const tabla = document.getElementById("tableBody");

  const botonCrear = document.getElementById("guardar");
  botonCrear.addEventListener("click", async () => {
    const n_correo = await document.getElementById("n_correo").value;
    const n_remitente = await document.getElementById("n_remitente").value;
    const n_telefono = await document.getElementById("n_telefono").value;
    const n_asunto = await document.getElementById("n_asunto").value;
    const n_mensaje = await document.getElementById("n_mensaje").value;
    document.getElementById("formulario").reset();

    const n_resultado = await fetch(
      "http://localhost:3000/views/Create/Mensajes/crear",
      {
        method: "POST",
        body: JSON.stringify({
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
    console.log(n_resultado.status);
    if (n_resultado.status == 500) {
      alert("Ya exíste un regístro");
    } else if (n_resultado.status == 200) {
      alert("Registro creado correctamente");
      const respuesta = n_resultado.json().then((data) => {
        const datosFila = document.createElement("tr");
        datosFila.innerHTML = `
                <td>${data.id}</td>
                <td>${data.correo}</td>
                <td>${data.remitente}</td>
                <td>${data.telefono}</td>
                <td>${data.asunto}</td>
                <td>${data.mensaje}</td>
            `;
        tabla.appendChild(datosFila);
      });
    } else {
      alert("Error al crear el registro");
    }
  });

  
});
