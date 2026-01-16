let button = document.getElementById("button");
let nombre = document.getElementById("text-name");
let lastname = document.getElementById("text-lastname");
let email = document.getElementById("text-email");
let listAdd = document.querySelector("#list");

const mdalNombre = document.getElementById("modal-name");
const mdalLastname = document.getElementById("modal-lastname");
const mdalEmail = document.getElementById("modal-email");
const saveChanges = document.getElementById("modalSave");

// -----------------------------

let listUsers = [
  { id: 100, nombre: "duvan", lastname: "zuluaga", email: "dz@" },
  { id: 99, nombre: "duvanzm", lastname: "zuluagamm", email: "dz@" },
];

// contador correcto
let counter = Math.max(...listUsers.map(u => u.id)) + 1;

let userIdToUpdate = null;


// Mostrar usuarios
function seeUsers() {
  listAdd.innerHTML = "";

  listUsers.forEach((user) => {
    listAdd.innerHTML += `
      <tr>
        <th>${user.id}</th>
        <td>${user.nombre}</td>
        <td>${user.lastname}</td>
        <td>${user.email}</td>
        <td>
          <button class="btn btn-danger pop" data-id="${user.id}">Delete</button>
          <button class="btn btn-warning update" data-id="${user.id}">Update</button>
          <button class="btn btn-info info" data-id="${user.id}">Detail</button>
        </td>
      </tr>
    `;
  });
}

// Crear usuario
button.addEventListener("click", function () {
  if (nombre.value && lastname.value && email.value) {

    let newUser = {
      id: counter++,
      nombre: nombre.value,
      lastname: lastname.value,
      email: email.value,
    };

    listUsers.push(newUser);
    seeUsers();

    nombre.value = "";
    lastname.value = "";
    email.value = "";

    Swal.fire("Correcto", "Usuario agregado", "success");
  } else {
    Swal.fire("Error", "Todos los campos son obligatorios", "error");
  }
});


// Acciones de la tabla
listAdd.addEventListener("click", function (e) {
  const id = Number(e.target.dataset.id);
  const myModal = new bootstrap.Modal(document.getElementById("exampleModal"));

  // Eliminar
  if (e.target.classList.contains("pop")) {
    listUsers = listUsers.filter(user => user.id !== id);
    seeUsers();
  }

  // Update
  if (e.target.classList.contains("update")) {
    const user = listUsers.find(u => u.id === id);

    mdalNombre.value = user.nombre;
    mdalLastname.value = user.lastname;
    mdalEmail.value = user.email;
    userIdToUpdate = id;

    myModal.show();
  }

  // Detail
  if (e.target.classList.contains("info")) {
    const user = listUsers.find(u => u.id === id);

    Swal.fire({
      title: "Detalle del usuario",
      html: `
        <b>Nombre:</b> ${user.nombre}<br>
        <b>Apellido:</b> ${user.lastname}<br>
        <b>Email:</b> ${user.email}
      `,
      icon: "info",
    });
  }
});


// Guardar Update del modal
saveChanges.addEventListener("click", function () {
  const user = listUsers.find(u => u.id === userIdToUpdate);

  if (user) {
    user.nombre = mdalNombre.value;
    user.lastname = mdalLastname.value;
    user.email = mdalEmail.value;

    seeUsers();

    bootstrap.Modal.getInstance(
      document.getElementById("exampleModal")
    ).hide();

    Swal.fire("Actualizado", "Usuario actualizado", "success");
  }
});

// Gargar los usuaios de mi database
seeUsers();
