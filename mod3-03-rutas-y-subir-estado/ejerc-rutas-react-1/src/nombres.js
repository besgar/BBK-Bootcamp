import {useState} from "react";


function Nombres(){
    const [nombres, setNombres]=useState(["Oskar","Haizea","Elena"]);
    const mostrarNombres=nombres.map(function(nombre){
    return <li>{nombre}</li>
    });

    return (
        <ul>
            {mostrarNombres}
        </ul>
    );
};

export default Nombres;