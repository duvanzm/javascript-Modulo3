let sesion = sessionStorage.getItem("sesion");

if (sesion != "yes") {
  window.location = "./index.html";
}
