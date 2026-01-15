// Entrada de Usuario
let nombre = prompt("Ingrese su nombre", "Pedrito");
let age = prompt("Ingrese su edad", "19");
// Convierto age que es una cadena de texto en numero
let num = Number(age);
// Valido que num sea numero o que sea negativo
if (isNaN(num) || num < 0) {
  console.error("Error: Por favor, ingresa una edad válida en números.");
}
if (num >= 18) {
  console.log(
    `Hola ${nombre}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`
  );
} else {
  console.log(
    `Hola ${nombre}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`
  );
}
