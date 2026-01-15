let button = document.getElementById("button");
let nombre = document.getElementById("text-name");
let lastname = document.getElementById("text-lastname");
let listAdd = document.querySelector("#list");
let counter = 0;
const listUsers = [];

button.addEventListener("click", function () {
  if (nombre.value != "" && lastname.value != "") {
    nombre.classList.add("is-valid");
    nombre.classList.remove("is-invalid");
    lastname.classList.add("is-valid");
    lastname.classList.remove("is-invalid");
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
    });
    let newUser = {
      id: 0,
      nombre: "",
      lastname: "",
    };

    newUser.id += counter;
    newUser.nombre = nombre.value;
    newUser.lastname = lastname.value;
    sessionStorage;
    listUsers.push(newUser);
    nombre.value = "";
    lastname.value = "";
    userList = ` 
    <tr>
    <th>${newUser.id}</th>
    <td>${newUser.nombre}</td>
    <td>${newUser.lastname}</td>
    <td><button class="btn btn-danger pop" onClick="this.parentElement.parentElement.remove()">Eliminar</button></td>
    </tr>`;
    counter += 1;
    listAdd.innerHTML += userList;
    // listAdd.addEventListener("click", function (e) {
    //   if (e.target.classList.contains("pop")) {
    //     e.target.closest("tr").remove();
    //   }
    // });
    console.log(listUsers);
  } else {
    nombre.classList.add("is-invalid");
    nombre.classList.remove("is-valid");
    lastname.classList.add("is-invalid");
    lastname.classList.remove("is-valid");
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
    });
    nombre.value = "";
    lastname.value = "";
  }
});
