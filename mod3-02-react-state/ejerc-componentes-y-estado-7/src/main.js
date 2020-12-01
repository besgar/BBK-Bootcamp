import {useState} from 'react';

function Main(props){
    const [tripulantes, setTripulantes]=useState(props.tripulantes);

    function anyadirTripulante(){
        setTripulantes(tripulantes+1);
    };

    return (
        <div>
            <h3>{props.nombre}</h3>
            <p>Eslora: {props.eslora}</p>
            <p>Tripulantes: {tripulantes}</p>
            <button onClick={anyadirTripulante}>Añadir</button>
        </div>
    );
};


export default Main;