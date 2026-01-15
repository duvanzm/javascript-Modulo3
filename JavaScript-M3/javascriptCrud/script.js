let button = document.getElementById("button");
let nombre = document.getElementById("text-name");
let lastname = document.getElementById("text-lastname");
let email = document.getElementById("text-email");
let listAdd = document.querySelector("#list");
// Modal
const modalSave = document.getElementById("modalSave");
const mdalNombre = document.getElementById("modal-name");
const mdalLastname = document.getElementById("modal-lastname");
const mdalEmail = document.getElementById("modal-email");
//---------------------------------
let counter = 0;
const listUsers = [
  {
    id: 100,
    nombre: "duvan",
    lastname: "zuluaga",
    email: "dz@",
  },
  {
    id: 99,
    nombre: "duvanzm",
    lastname: "zuluagamm",
    email: "dz@",
  },
];

// Funciones de los Botones

listAdd.addEventListener("click", function (e) {
  const myModal = new bootstrap.Modal(document.getElementById("exampleModal"));

  // Elimina
  if (e.target.classList.contains("pop")) {
    e.target.closest("tr").remove();
  }

  // Update
  if (e.target.classList.contains("update")) {
    const dadButtonFull = e.target.closest("tr");
    const idNum = Number(dadButtonFull.querySelector("th").innerText);

    const user = listUsers.find((u) => u.id === idNum);
    console.log(user, idNum);
    mdalNombre.value = user.nombre;
    mdalLastname.value = user.lastname;
    mdalEmail.value = user.email;
    myModal.show();
  }

  // Detail
  if (e.target.classList.contains("info")) {
    alert("info");
  }
});
// Guardar cambios desde modal
modalSave.addEventListener("click", function () {
  const user = listUsers.find((u) => u.id === currentUserId);
  user.nombre = mdalNombre.value;
  user.lastname = mdalLastname.value;
  user.email = mdalEmail.value;
});

button.addEventListener("click", function () {
  if (nombre.value != "" && lastname.value != "" && email.value != "") {
    nombre.classList.add("is-valid");
    nombre.classList.remove("is-invalid");
    lastname.classList.add("is-valid");
    lastname.classList.remove("is-invalid");
    email.classList.add("is-valid");
    email.classList.remove("is-invalid");
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
    });
    let newUser = {
      id: "",
      nombre: "",
      lastname: "",
      email: "",
    };
    // this.parentElement.parentElement.remove();
    newUser.id = counter;
    newUser.nombre = nombre.value;
    newUser.lastname = lastname.value;
    newUser.email = email.value;
    sessionStorage;
    listUsers.push(newUser);
    nombre.value = "";
    lastname.value = "";
    email.value = "";

    listUsers.forEach(function () {
      userList = `
    <tr>
    <th>${newUser.id}</th>
    <td>${newUser.nombre}</td>
    <td>${newUser.lastname}</td>
    <td>${newUser.email}</td>
    <td><button class="btn btn-danger pop">Delete</button><button class="btn btn-warning update">Update</button><button class="btn btn-info info">Detail</button></td>
    </tr>`;

      listAdd.innerHTML += userList;
    });
    counter++;
    // console.log(listUsers);
  } else {
    nombre.classList.add("is-invalid");
    nombre.classList.remove("is-valid");
    lastname.classList.add("is-invalid");
    lastname.classList.remove("is-valid");
    email.classList.add("is-invalid");
    email.classList.remove("is-valid");
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
    });
    nombre.value = "";
    lastname.value = "";
  }
});
