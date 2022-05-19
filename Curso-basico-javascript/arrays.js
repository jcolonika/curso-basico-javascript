// Un array es una estructura de datos, es un objeto tipo lista de alto nivel.

// Los arrays son objetos de tipo lista cuyo prototipo tiene métodos para realizar operaciones de recorrido y mutación

var fruits = []; // Array Literal Syntax
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
console.log(fruits.length); // length es una propiedad del array

// Acceder (por índice) a un elemento del Array
console.log(fruits[0]); // Los arrays inician en "0"

// === Métodos para mutar arrays ===

// .push();

var moreFruit = fruits.push("Grapes"); // Esté método añadirá "Grapes" añ final del array
console.log(fruits);

// .pop();

var last = fruits.pop("Grapes"); // Eliminará "Grapes" del final
console.log(fruits);

// unshift()

var newLength = fruits.unshift("Grapes"); // Añade "Grapes" al inicio
console.log(fruits);

// shift()

var deleteFruit = fruits.shift("Apple"); // Elimina "Manzana" del inicio
console.log(fruits);

// .indexOf();

var position = fruits.indexOf("Orange"); // te dará la posición de ese item en el array
console.log(fruits);
