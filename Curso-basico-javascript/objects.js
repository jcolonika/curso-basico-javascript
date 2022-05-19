// Un objeto es una colección de propiedades, y una propiedad es una asociación de key
//(nombre, o clave) y valores.

var object = {}; // Object Literal Syntax

var myCar = {
  marca: "Toyota", // key - value
  modelo: "Corolla",
  annio: 2020,
  detailCar: function () {
    // Método de un objeto (una función dentro de un objeto)
    return `Auto ${this.modelo} ${this.annio}`;
  },
};

myCar.annio;
myCar.modelo;

myCar.detailCar();

// Función constructora

function car(marca, modelo, annio) {
  // Creas una función con los parámetros que va a recibir,
  this.marca = marca; // Utilizamos el "this" para asignar valores a las propiedades del objeto
  this.modelo = modelo;
  this.annio = annio;
}

var newCar = new car("Tesla", "Model 3", 2020);

/* --------------------------------------------------------------------------------------- */
//RETO

//Paso 1: Creamos una lista vacía de autos
var listaAutos = [];

//Paso 2: Creamos la función constructora
function auto(marca, modelo, annio) {
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}

//Paso 3: Creamos una función que agregue un auto nuevo a la lista
function agregarAuto(marca, modelo, annio) {
  var nuevoAuto = new auto(marca, modelo, annio);
  listaAutos.push(nuevoAuto);
}

//Paso 4: Creamos una función para que el usuario agregue un nuevo carro con sus parámetros
function registrarAutoNuevo() {
  var marca = prompt("Ingresa la marca: ");
  var modelo = prompt("Ingresa el modelo: ");
  var annio = prompt("Ingresa el año: ");
  agregarAuto(marca, modelo, annio);
  console.log("¡Agregaste tu nuevo carro con éxito!");
}

//Paso 5: Mostramos el arreglo actualizado
listaAutos;

/*---------------------------------------------------------------------------------------*/
function carro(MARCA, MODELO, ANNIO) {
  this.marca = MARCA;
  this.modelo = MODELO;
  this.annio = ANNIO;
}

const carros = [];
for (let i = 0; i < 30; i++) {
  //Creamos 30 objetos
  var marca = prompt("Ingresa la marca del carro");
  var modelo = prompt("Ingresa el modelo del carro");
  var annio = prompt("Ingresa el año del carro");
  carros.push(new carro(marca, modelo, annio)); //Agregamos el nuevo objeto a la lista
}

for (let i = 0; i < carros.length; i++) {
  console.log(carros[i]);
}
