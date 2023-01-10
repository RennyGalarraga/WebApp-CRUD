document.addEventListener("DOMContentLoaded", () => {


  const botonAtras = document.getElementById("back");
  botonAtras.addEventListener("click", function () {
    history.back(-1);
  });

  const tabla = document.getElementById("tableBody");

  const botonCrear = document.getElementById("guardar");
  botonCrear.addEventListener("click", async () => {
    const n_cedula = await document.getElementById("n_cedula").value;
    const n_nombre = await document.getElementById("n_nombre").value;
    const n_apellido = await document.getElementById("n_apellido").value;
    const n_cumpleaños = await document.getElementById("n_cumpleaños").value;
    const n_genero = await document.getElementById("n_genero").value;
    const n_telefono = await document.getElementById("n_telefono").value;
    const n_rol = await document.getElementById("n_rol").value;
    document.getElementById("formulario").reset();

    const n_resultado = await fetch(
      "http://localhost:3000/views/Read/Personal/crear",
      {
        method: "POST",
        body: JSON.stringify({
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
    console.log(n_resultado.status);
    if (n_resultado.status == 500) {
      alert("Ya exíste un regístro con ese número de cédula");
    } else if (n_resultado.status == 200) {
      alert("Usuario creado correctamente");
      const respuesta = n_resultado.json().then((data) => {
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
            `;
        tabla.appendChild(datosFila);
      });
    } else {
      alert("Error al crear el usuario");
    }
  });

  
});
