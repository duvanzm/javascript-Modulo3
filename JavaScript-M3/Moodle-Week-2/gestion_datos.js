// Historia de usuario - Semana 2
//--------------------------------
// Gestión de datos con objetos, Sets y Maps en JavaScript

// TASKS

// 1. Creación del objeto de productos:
const products = {
  id: 1,
  name: "book",
  price: 20000,
};

// 2. Uso de Set en JavaScript:

// Crea un Set con una lista de números que incluya valores repetidos.
let repeatedNum = [1, 2, 3, 4, 1, 3, 5, 6, 2];
const numSet = new Set(repeatedNum);
// Imprime en consola el contenido del Set para mostrar cómo elimina los duplicados automáticamente.
console.log(`"Numeros ingresados en el set: ${repeatedNum}"`);
console.log(numSet);
// Agrega un nuevo número al Set utilizando el método .add().
numSet.add(7);
// Verifica si un número específico existe dentro del Set con .has().
numSet.has(7);
// Elimina un número del Set con .delete().
numSet.delete(1);
// Recorre el Set utilizando un for…of para mostrar cada valor.
for (const num of numSet) {
  console.log(num);
}

// 3. Creación de un Map:

// Crea un Map que relacione la categoría del producto (clave) con el nombre del producto (valor).
const categoryProducts = new Map();
categoryProducts.set("hoga", {
  name: "cama",
  price: 25000,
  stock: 10,
});
// Asegúrate de que el Map refleje correctamente la información adicional de cada producto.
categoryProducts.set("hoga", [
  {
    name: "cama",
    price: 25000,
    stock: 10,
  },
  {
    name: "mueble",
    price: 30000,
    stock: 15,
  },
]);

// 4. Iteración sobre las estructuras de datos:
// Recorre e imprime los datos en la consola:

// Usa for…in para listar propiedades y valores del objeto.
const object = {
  name: "mueble",
  price: 30000,
  stock: 15,
};

for (let clave in object) {
  console.log(`${clave}: ${object[clave]}`);
}
// Usa for…of para recorrer el Set.

const set = new Set(["lapiz", "borrador", "zapato", "lapiz"]);
for (const product of set) {
  console.log(product);
}
// Usa forEach() para recorrer el Map y mostrar claves y valores de forma descriptiva.
const motos = new Map();
motos.set("susuki", "gs500");
motos.set("akt", "nkd");
motos.set("yamaha", "mt15");

motos.forEach(function (moto, marca) {
  console.log(`${marca} => ${moto}`);
});

// 5. Validación y pruebas:

// Implementa validaciones para asegurar que cada producto tenga id, nombre y precio válidos.
const list = [
  {
    id: 1,
    name: "cama",
    price: 25000,
    stock: 10,
  },
  {
    id: 2,
    name: "mueble",
    price: 30000,
    stock: 15,
  },
];

function validar(list) {
  if (!list.id) return false;
  if (!list.name) return false;
  if (!list.price) return false;
  return true;
}

// Realiza pruebas mostrando:
// Listar completa de productos (objeto)

const productsValidados = list.filter(validar);
console.log(productsValidados);

// Lista de productos únicos (Set)

const productosUnicos = new Set(productsValidados);
for (const producto of productsValidados) {
  console.log(producto);
}
// Categorías y nombres de productos (Map)

const productosPorCategoria = new Map();

productosUnicos.forEach((producto) => {
  productosPorCategoria.set(producto.category, producto.name);
});

productosPorCategoria.forEach((nombre, categoria) => {
  console.log(categoria, nombre);
});
