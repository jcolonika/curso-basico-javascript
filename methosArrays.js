var articulos = [
  { nombre: "Bici", costo: 3000 },
  { nombre: "TV", costo: 2500 },
  { nombre: "Libro", costo: 320 },
  { nombre: "Celular", costo: 10000 },
  { nombre: "laptop", costo: 20000 },
  { nombre: "teclado", costo: 500 },
  { nombre: "audifonos", costo: 1700 },
];

/* ---========================= MÉTODOS PARA RECORRER ARRAYS =========================--- */

/* ---========== MÉTODO FILTER ==========--- */
/* Válida si es un true o false para poder meterlos al nuevo array, y éste método no modifica 
el array original */
var articulosFiltrados = articulos.filter(function (articulo) {
  return articulo.costo <= 500; /* Menor o igual a 100 */
});

console.log(articulosFiltrados);

/* ---========== MÉTODO MAP ==========--- */
/* El método mal() crea un nuevo array con los resultados de la llamada a la función
indicada aplicados a cada uno de los elementos. No va a modificar el array original */
var nombreArticulos = articulos.map(function (articulo) {
  return articulo.nombre;
});

console.log(nombreArticulos);

/* ---========== MÉTODO FIND ==========--- */
/* De igual forma, con este método se valida un true o false para encontrar un elemento y si
 está lo regresa y si no, no pasa nada */

var encuentraArticulos = articulos.find(function (articulo) {
  return articulo.nombre === "laptop";
});

console.log(encuentraArticulos);

/* ---========== MÉTODO FOREACH ==========--- */
/* Este método no devuelve nada, pero modifica el array original */
articulos.forEach(function (articulo) {
  console.log(articulo.nombre);
});

/* ---========== MÉTODO SOME ==========--- */
/* Este método nos regresa un false o un true para validar si hay o no artículos que cumplan 
la validación */

var articulosBaratos = articulos.some(function (articulo) {
  return articulo.costo <= 700;
});

console.log(articulosBaratos);

/* ---========== MÉTODO EVERY ==========--- */
/* Este método checa que todos los elementos en el array cumplan con la validación que ponemos,
y al final nos regresa un true o un false */
var articulosBaratos = articulos.every(function (articulo) {
  return articulo.costo <= 700;
});

console.log(articulosBaratos);

/* ---========== MÉTODO REDUCE ==========--- */
/* Este método corre una función en cada elemento del array, para comenzar a sumar los
 costos de cada elemento. */
var costoTotal = articulos.reduce(function (totalActual, articulo) {
  return articulo.costo + totalActual;
}, 0); // El 0 será la cantidad inicial con la que comenzará el totalActual

console.log(costoTotal);

/* ---========== MÉTODO INCLUDE ==========--- */
/* Este método nos regresa un true o un false para validar si el elemento está o no en el array */
var numeros = [1, 2, 3, 4, 5, 6];

var incluyeNumero = numeros.includes(2);

console.log(incluyeNumero);
