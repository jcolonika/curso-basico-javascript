// Esto nos ayudará para poder hacer decisiones.

var isUser = true;

if (isUser) {
  // con el if validamos que la condición sea true
  console.log("Tiene acceso al contenido");
}

// Presentamos el else

var isUser = false;

if (isUser) {
  console.log("Tiene acceso al contenido");
} else {
  console.log("Tienes que crear una cuenta para poder acceder al contenido");
}

// Ejemplo de cómo haríamos una validación

var age = 18;
var action;

if (age >= 18) {
  action = "Puede votar";
} else {
  // call back
  action = "No puede votar";
}

console.log(action);

// Ejemplo de cómo utilizaremos el else if

var age = 18;
var action;

if (age === 18) {
  action = "Puede votar, será su 1ra votación";
} else if (age > 18) {
  action = "Puede votar";
} else {
  // call back
  action = "Aun no puede votar";
}

console.log(action);

/* ================================================================ */

// Operador ternario

var number = 1;
var result;

if (number === 1) {
  result = "Sí son un 1";
} else {
  result = "No soy un 1";
}

condition ? true : false;

var number = 1;
var result = number === 1 ? "Sí son un 1" : "No soy un 1";

console.log(result);

// ==============================

// Ejercicio, realzar un piedra, papel o tijeras, utilizando condicionales, una función que reciba
//el parámetro con el que vamos a jugar, y me regrese si gane o perdí.

/*  
Variables piedra, papel y tijeras 
una función que utilice condicionales para validar si el parámetro que le estoy pasando gana o pierde. 
y que la función al final me regrese el result de si gané, o  perdí. 
*/
