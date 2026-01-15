var mypassword = "password";
var email = "user@gmail.com";

let button = document.getElementById("button");
let email_user = document.getElementById("email");
let password_user = document.getElementById("password");
let selector = document.getElementById("theme");
let html = document.documentElement;

selector.addEventListener("change", function () {
  let theme = selector.value;
  html.setAttribute("data-bs-theme", theme);
  localStorage.setItem("theme", theme);
});

button.addEventListener("click", function () {
  if (mypassword == password_user.value && email_user.value == email) {
    window.location = "./home.html";
    sessionStorage.setItem("sesion", "yes");
  } else {
    /*document.getElementById("alert-danger").innerText =
      "Erro de autenticacion\n Vuelve a intentar";*/
    document.getElementById("alert-danger").innerHTML = `
      <div class=" alert-danger p-1 mt-2 text-center">
        Erro de autenticacion\n Vuelve a intentar
      </div>
    `;
    email_user.classList.add("is-invalid");
    password_user.classList.add("is-invalid");
    password_user.value = "";
  }
});
