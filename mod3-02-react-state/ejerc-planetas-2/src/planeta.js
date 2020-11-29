const Planeta=(props)=>{
    return(
        <div key={props.nombre}>
            <h1>{props.nombre}</h1>
            <p>{props.color}</p>
            <p>{props.temperatura}</p>
            <img src={props.imagen}/>
        </div>
    );
};

export default Planeta;