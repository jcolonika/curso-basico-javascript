let ok1 = "Piedra";
let ok2 = "Papel";
let ok3 = "Tijera";

function result(user, cpu) {
  if (user != cpu) {
    if (user === ok1 && cpu === ok3) {
      console.log("el usuario GANO con " + ok1);
    } else if (user === ok2 && cpu === ok1) {
      console.log("el usuario GANO con " + ok2);
    } else if (user === ok3 && cpu === ok2) {
      console.log("el usuario GANO con " + ok3);
    } else {
      console.log("La CPU Gano!!");
    }
  } else if (user === cpu) {
    console.log("Empate");
  }
}

result(ok1, ok3); //el usuario GANO con Piedra
