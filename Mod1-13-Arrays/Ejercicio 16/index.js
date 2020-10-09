let nombresAlumnos = [];
let notas = [];

for (let i = 0; i < 5; i++) {
    let nombre = window.prompt("Escribe tu nombre");
    nombresAlumnos.push(nombre);
    let nota = Math.floor(Math.random() * (11 - 0) + 0)
    notas.push(nota);
}


let suma = 0;
for (let i = 0; i < notas.length; i++) {
    suma = suma + notas[i];
}
let notaMedia = suma / notas.length;
console.log(`La nota media de la clase es ${notaMedia}`);

for (let i = 0; i < notas.length; i++) {
    if (notas[i] > notaMedia) {
        console.log(`El alumno ${nombresAlumnos[i]} tiene la nota ${notas[i]}. La media es ${notaMedia} `);
    }
}


let notaMaxima = 0;
for (let i = 0; i < notas.length; i++) {
    if (notas[i] > notaMaxima) {
        notaMaxima = notas[i];
    }
}
console.log(`La nota más alta de la clase es ${notaMaxima}`);

let alumnoNotaMaxima = [];
for (let i = 0; i < notas.length; i++) {
    if (notas[i] === notaMaxima) {
        alumnoNotaMaxima.push(nombresAlumnos[i]);
    }
}
console.log(`El alumno ${alumnoNotaMaxima} tiene la nota máxima de la clase, un ${notaMaxima}`);

let notaMinima = 10;
for (let i = 0; i < notas.length; i++) {
    if (notas[i] < notaMinima) {
        notaMinima = notas[i];
    }
}
console.log(`La nota más baja de la clase es ${notaMinima}`);


let alumnoNotaMinima = [];
for (let i = 0; i < notas.length; i++) {
    if (notas[i] === notaMinima) {
        alumnoNotaMinima.push(nombresAlumnos[i]);
    }
}
console.log(`El alumno ${alumnoNotaMinima} tiene la nota mínima de la clase, un ${notaMinima}`);


for(let i=0; i<nombresAlumnos.length; i++){
    console.log(`El alumno ${nombresAlumnos[i]} ha sacado ${notas[i]}`);
}
