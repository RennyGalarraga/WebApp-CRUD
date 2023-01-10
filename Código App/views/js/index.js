document.addEventListener("DOMContentLoaded", function () {

const botonAtras = document.getElementById('back');
    botonAtras.addEventListener('click', function() {
        history.back(-1);
    });

});



/* document.addEventListener("DOMContentLoaded", function () {
  // Create
  const createForm = document.querySelector("form");
  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const entriesTable = document.querySelector("#entries");

  createForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameInput.value;
    const email = emailInput.value;

    if (name.trim() && email.trim()) {
      const newEntry = document.createElement("tr");

      newEntry.innerHTML = `
          <td>${name}</td>
          <td>${email}</td>
          <td>
            <button type="button" id="edit">Editar</button>
            <button type="button" id="delete">Eliminar</button>
          </td>
        `;

      entriesTable.appendChild(newEntry);

      nameInput.value = "";
      emailInput.value = "";
    }
  });

  // Edit
  entriesTable.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
      const buttonType = event.target.id;
      const entryRow = event.target.parentElement.parentElement;
      const nameCell = entryRow.querySelector("td:first-child");
      const emailCell = entryRow.querySelector("td:nth-child(2)");

      if (buttonType === "edit") {
        nameInput.value = nameCell.innerText;
        emailInput.value = emailCell.innerText;

        entriesTable.removeChild(entryRow);
      } else if (buttonType === "delete") {
        entriesTable.removeChild(entryRow);
      }
    }
  });
}); */
