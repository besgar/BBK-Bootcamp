let dia;
let mes;
let anyo;
let sumaFecha;
let total;
let total1;
let x = 0;
let y = 0;

dia = parseInt(window.prompt("¿Qué día naciste?"));
mes = parseInt(window.prompt("¿Qué mes naciste?"));
anyo = parseInt(window.prompt("¿Qué año naciste?"));
sumaFecha = (dia + mes + anyo).toString();

do {
  x = sumaFecha.length;
  total = 0;

  while (x > 0) {
    total1 = parseInt(sumaFecha.substring(x - 1, x));
    total = parseInt(total);
    total = total + total1;
    x--;
  }
  
  sumaFecha = total.toString();
  y = sumaFecha.length;

} while (y !== 1);

console.log(`Tu número de la suerte es ${total}`);