let ok1 = "Piedra";
let ok2 = "Papel";
let ok3 = "Tijera";

function result(user, cpu) {
  switch (user != cpu) {
    case true: {
      if (user === ok1 && cpu === ok3) {
        console.log("el usuario GANO con " + ok1);
      }
      break;
    }
    case true: {
      if (user === ok2 && cpu === ok1) {
        console.log("el usuario GANO con " + ok2);
      }
      break;
    }
    case true: {
      if (user === ok3 && cpu === ok2) {
        console.log("el usuario GANO con " + ok3);
      }
      break;
    }
    case false: {
      console.log("Empate");
      break;
    }

    default:
      console.log("No hay resultado");
  }
}

result(ok1, ok3); //el usuario GANO con Piedra
