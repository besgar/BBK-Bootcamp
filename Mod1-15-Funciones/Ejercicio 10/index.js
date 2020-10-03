let figura = window.prompt("Introduce la forma deseada: circulo-cuadrado-triangulo");

switch (figura) {
    case "circulo":
        let radio = parseFloat(window.prompt("Introduzca el radio"));
        let resultadoCirculo = areaCirculo(radio);
        window.alert(resultadoCirculo);
        break;
        
    case "cuadrado":
        let lado = parseFloat(window.prompt("Introduzca el lado"));
        let resultadoCuadrado = areaCuadrado(lado);
        window.alert(resultadoCuadrado);
        break;

    case "triangulo":
        let base = parseFloat(window.prompt("Introduzca la base"));
        let altura = parseFloat(window.prompt("Introduzca la altura"));
        let resultadoTriangulo = areaTriangulo(base, altura);
        window.alert(resultadoTriangulo);
        break;

    default:
        console.log("Tienes que elegir una de las 3 opciones");
}


function areaCirculo(radio) {
    let resultado = Math.PI * radio ** 2;
    return resultado;
}

function areaTriangulo(base, altura) {
    let resultado = (base * altura) / 2;
    return resultado;
}

function areaCuadrado(lado) {
    let resultado = lado * lado
    return resultado;
}