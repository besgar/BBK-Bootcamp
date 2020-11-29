const Coche=(props)=>{
    return(
        <>
            <p>Ruedas: {props.ruedas}</p>
            <p>Altura: {props.altura} m</p>
            <p>Longitud: {props.longitud} m</p>
            <p>Color: {props.color}</p>
        </>
    );
};


export default Coche;
