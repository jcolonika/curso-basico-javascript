// Las funciones son procedimientos, un conjunto de sentencias o pasos que realizarán una tarea
// o cálculo con ciertos valores.

// Tenemos dos tipo de funciones en js, function Declaration y function Expression

// el nombre reservado de function y parámetros que recibirá esa function

// Function declaration Declarativas expresión
function myfunction() {
  return "Hello World 8";
}

myFunction(); // mandamos llamar la función

// Function Expression (también conocidas como funciones anónimas)
var myFunction = function (a, b) {
  return a + b;
};

myFunction(); // mandamos llamar la variable como función

/* ============================= */

function saludarEstudiante(estudiante) {
  console.log(`Hola ${estudiante}`); // template strings (Plantillas de cadena de texto)
}

// está función recibe 2 parámetros, que se convierten en un placeholder de valores
//que se pueden utilizar dentro de la función.
function suma(a, b) {
  var resultado = a + b;
}

// Return, cómo regresamos un valor con una function.

function suma(a, b) {
  var resultado = a + b;
  return resultado;
}

function suma(a, b) {
  return a + b;
}

suma(20, 30);
