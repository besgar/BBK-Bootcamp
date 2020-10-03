let anyo;

do {
    anyo = parseInt(window.prompt("Introduce un año. Si no deseas seguir, introduce 0"));
    if(anyo!==0){
        let resultado=esBisiesto(anyo);
        if(resultado===true){
            window.alert("El año " + anyo + " es bisiesto");
        }else{
            window.alert("El año " + anyo + " no es bisiesto");
        }
    }
} while(anyo!==0);


function esBisiesto(anyo) {
if (((anyo % 4 == 0) && (anyo % 100 != 0 )) || (anyo % 400 == 0)){
    return true;
  }else{
    return false;
  }
}