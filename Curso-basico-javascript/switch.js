// Switch es una forma diferente de validar, está depende del caso que sea verdad.

var number = 1;
var result;

/* Switch compara con un === por esa razón los elementos tiene que ser idénticos */

switch (number) {
  case 1:
    result = "Sí es uno";
    break;
  case 10:
    result = "Sí es diez";
    break;
  case 100:
    result = "Sí es cien";
    break;
  default:
    result = "No match";
}

console.log(result);
