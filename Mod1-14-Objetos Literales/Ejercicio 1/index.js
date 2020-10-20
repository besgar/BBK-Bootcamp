let coche={
    color: "rojo",
    marca: "Ford",
    modelo: "Focus",
    motor: {
        cilindros: 4,
        capacidad: 2.2
    }
}

document.getElementById("div1").innerHTML=`
<p>Color: ${coche.color}</p>
<p>Marca: ${coche.marca}</p>
<p>Modelo: ${coche.modelo}</p>
<p>Motor (cilindros): ${coche.motor.cilindros}</p>
<p>Motor (capacidad): ${coche.motor.capacidad}</p>
`