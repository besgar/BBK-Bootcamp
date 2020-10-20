let totalMartillo=0;
let totalBrocha=0;
let totalLlave=0;
let totalTronco=0;
let precioMartillo=5;
let precioBrocha=13;
let precioLlave=8;
let precioTronco=9;

function sumarMartillo(){
	totalMartillo=totalMartillo+1;
	dibujarMartillo();
}

function restarMartillo(){
	totalMartillo=totalMartillo-1;
	dibujarMartillo();
}


function sumarBrocha(){
	totalBrocha=totalBrocha+1;
	dibujarBrocha();
}
function restarBrocha(){
	totalBrocha=totalBrocha-1;
	dibujarBrocha();
}


function sumarLlave(){
	totalLlave=totalLlave+1;
	dibujarLlave();
}
function restarLlave(){
	totalLlave=totalLlave-1;
	dibujarLlave();
}


function sumarTronco(){
	totalTronco=totalTronco+1;
	dibujarTronco();
}
function restarTronco(){
	totalTronco=totalTronco-1;
	dibujarTronco();
}



function dibujarMartillo(){
	document.getElementById("fotoMartillo").innerHTML="";
	document.getElementById("parrafoMartillo").innerHTML=`Martillos: ${totalMartillo} a ${totalMartillo*precioMartillo}€`;

	for(let i=0; i<totalMartillo; i++){
		document.getElementById("fotoMartillo").innerHTML+=`<img class="foto" src="./img/martillo.svg"/>`;
	}
}


function dibujarBrocha(){
	document.getElementById("fotoBrocha").innerHTML="";
	document.getElementById("parrafoBrocha").innerHTML=`Brochas: ${totalBrocha} a ${totalBrocha*precioBrocha}€`;

	for(let i=0; i<totalBrocha; i++){
		document.getElementById("fotoBrocha").innerHTML+=`<img class="foto" src="./img/brocha.svg"/>`;
	}
}

function dibujarLlave(){
	document.getElementById("fotoLlave").innerHTML="";
	document.getElementById("parrafoLlave").innerHTML=`Llaves: ${totalLlave} a ${totalLlave*precioLlave}€`;

	for(let i=0; i<totalLlave; i++){
		document.getElementById("fotoLlave").innerHTML+=`<img class="foto" src="./img/llave.svg"/>`;
	}
}

function dibujarTronco(){
	document.getElementById("fotoTronco").innerHTML="";
	document.getElementById("parrafoTronco").innerHTML=`Troncos: ${totalTronco} a ${totalTronco*precioTronco}€`;

	for(let i=0; i<totalTronco; i++){
		document.getElementById("fotoTronco").innerHTML+=`<img class="foto" src="./img/tronco.svg"/>`;
	}
}