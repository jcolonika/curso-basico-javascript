/*  Ejemplo del universo, un sistema solar, y un planeta.  */

// Scope es igual a, donde buscar por cosas (estás cosas son las variables),
//el Scope es el alcance que tienen las variables, depende de donde las declaremos y
//las mandamos llamar si tendremos acceso a ellas o no.

// Tenemos dos tipos de Scope, Scope Global y Scope Local.

// ===============

// Ejemplo de lo que es un Scope Global

var myName = "Jairo";

function namee() {
  myName = "Alonso";
  return myName;
}

namee();

console.log(myName);

// Ejemplo de lo que es un Scope Local, el Scope local pasa al momento de crear una función,
//esto genera un ámbito diferente al global, al cual no se podrá tener acceso desde el ámbito global

var myName = "Jairo";

function namee() {
  var myLastName = "Colón";
  return myName + " " + myLastName;
}

namee();

console.log(myName);
console.log(myLastName);

//  Ejemplos de como puede ayudar o crear error el tema del scope.

// Ejemplo 1, cómo con una función podemos cambiar el valor de la variable global
var myName = "Jairo";

function namee(user) {
  myName = user;
  console.log(myName);
}

namee("Oscar");

console.log(`Hola ${myName}, cómo estás?`);

// Ejemplo 2, cómo podemos evitar reescribir el valor de una variable gracias al scope,
var myName = "Jairo";

function namee(user) {
  var myName = user;
  console.log(myName);
}

namee("Oscar");

console.log(`Hola ${myName}, cómo estás?`);

// Ejemplo 3, cómo si creamos un scope local, y mandamos llamar la variable fuera de la función,
//nos puede crear un problema.

function namee(user) {
  var myName = user;
  console.log(myName);
}

namee("Oscar");

console.log(`Hola ${myName}, cómo estás?`);
