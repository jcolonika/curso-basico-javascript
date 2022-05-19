// Forma de utilizar while
const students = ["Catalina", "Simona", "Jairo", "Jeyka", "Kira", "Mona"];

function greetstudent(student) {
  console.log(`Hola ${student}`);
}

// Aquí la tarea se hará siempre y cuando sea true, cuando llegué a false, dejará de hacer la tarea
while (students.length > 0) {
  // shift() es un método que saca un elemento del array de la posición 0 a la última, Pop()
  //comienza de la última a la primera.
  let student = students.shift();
  greetstudent(student);
}
