// Los loops (bucles), son manera rápida y sencilla de hacer algo (una tarea) repetidamente.

// Primera forma para utilizar for
function greetstudent(student) {
  const students = ["Catalina", "Simona", "Jairo", "Jeyka", "Kira", "Mona"];
  console.log(`Hola ${student}`);
}

for (let i = 0; i < students.length; i++) {
  greetstudent(students[i]);
}
/* ========================================================================== */

// Segunda forma de utilizar el for
function greetstudent(student) {
  const students = ["Catalina", "Simona", "Jairo", "Jeyka", "Kira", "Mona"];
  console.log(`Hola ${student}`);
}

for (let student of students) {
  greetstudent(student);
}
