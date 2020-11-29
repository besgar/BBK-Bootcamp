import {useState} from 'react';

const Planeta=(props)=>{
    const [planeta, setPlaneta]=useState(props);

    const borrarPlaneta=()=>{
        setPlaneta("");
    };

    const mostrarPlaneta=()=>{
        setPlaneta(props);
    };

    return(
        <div key={planeta.nombre}>
            <h1>{planeta.nombre}</h1>
            <p>{planeta.color}</p>
            <p>{planeta.temperatura}</p>
            <img src={planeta.imagen}/>
            <button onClick={borrarPlaneta}>Borrar planeta</button>
            <button onClick={mostrarPlaneta}>Mostrar planeta</button>
        </div>
    );
};

export default Planeta;