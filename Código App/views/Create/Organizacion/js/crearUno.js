document.addEventListener("DOMContentLoaded", () => {


  const botonAtras = document.getElementById("back");
  botonAtras.addEventListener("click", function () {
    history.back(-1);
  });

  const tabla = document.getElementById("tableBody");

  const botonCrear = document.getElementById("guardar");
  botonCrear.addEventListener("click", async () => {
    const n_nombre = await document.getElementById("n_nombre").value;
    const n_foto = await document.getElementById("n_foto").value;
    const n_descripcion = await document.getElementById("n_descripcion").value;
    const n_mision = await document.getElementById("n_mision").value;
    const n_vision = await document.getElementById("n_vision").value;
    const n_valores = await document.getElementById("n_valores").value;
    document.getElementById("formulario").reset();

    const n_resultado = await fetch(
      "http://localhost:3000/views/Create/Organizacion/crear",
      {
        method: "POST",
        body: JSON.stringify({
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
                <td>${data.foto}</td>
                <td>${data.descripcion}</td>
                <td>${data.mision}</td>
                <td>${data.vision}</td>
                <td>${data.valores}</td>
            `;
        tabla.appendChild(datosFila);
      });
    } else {
      alert("Error al crear el registro");
    }
  });

  
});
