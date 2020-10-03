let numero=parseInt(window.prompt("Escribe un número"));

let resultado=factorial(numero);

window.alert(resultado);

function factorial (numero) {
	var total = 1; 
	for (i=1; i<=numero; i++) {
        total = total * i;
        console.log(i + ":" + total); 
	}
	return total; 
}