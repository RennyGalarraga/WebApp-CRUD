document.addEventListener("DOMContentLoaded", () => {


  const botonAtras = document.getElementById("back");
  botonAtras.addEventListener("click", function () {
    history.back(-1);
  });

  const tabla = document.getElementById("tableBody");

  const botonCrear = document.getElementById("guardar");
  botonCrear.addEventListener("click", async () => {
    const n_nombre = await document.getElementById("n_nombre").value;
    const n_codigo = await document.getElementById("n_codigo").value;
    const n_descripcion = await document.getElementById("n_descripcion").value;
    const n_foto = await document.getElementById("n_foto").value;
    document.getElementById("formulario").reset();

    const n_resultado = await fetch(
      "http://localhost:3000/views/Create/Productos/crear",
      {
        method: "POST",
        body: JSON.stringify({
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
    console.log(n_resultado.status);
    if (n_resultado.status == 500) {
      alert("Ya exíste un regístro");
    } else if (n_resultado.status == 200) {
      alert("Registro creado correctamente");
      const respuesta = n_resultado.json().then((data) => {
        const datosFila = document.createElement("tr");
        datosFila.innerHTML = `
                <td>${data.id}</td>
                <td>${data.nombre}</td>
                <td>${data.codigo}</td>
                <td>${data.descripcion}</td>
                <td>${data.foto}</td>
            `;
        tabla.appendChild(datosFila);
      });
    } else {
      alert("Error al crear el registro");
    }
  });

  
});
