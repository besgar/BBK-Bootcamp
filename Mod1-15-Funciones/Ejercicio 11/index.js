let euro = parseFloat(window.prompt("Introduce una cantidad de euros."));
let moneda= window.prompt("Introduce una moneda: dolar-libra-yen");

conversorMoneda(euro,moneda);

function conversorMoneda(euros,moneda) {
let resultado=0;
    switch (moneda) {
        case "libra":
           resultado=euros*0.86;
           window.alert("Cantidad de Euros: " + euro + ". Cantidad de libras: " + resultado);
            break;

        case "yen":
            resultado=euros * 129.852;
            window.alert("Cantidad de Euros: " + euro + ". Cantidad de yenes: " + resultado);
            break;
    
        case "dolar":
            resultado=euros*1.28611;
            window.alert("Cantidad de Euros: " + euro + ". Cantidad de dolares: " + resultado);
            break;
    
        default:
            window.alert("Tienes que elegir dolar, libra o yen");
    }
}

