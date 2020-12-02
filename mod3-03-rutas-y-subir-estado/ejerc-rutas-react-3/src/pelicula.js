function Pelicula(props){
    return(
        <div>
            <h1>{props.titulo}</h1>
            <img src={props.imagen} alt="imagen_pelicula"/>
            <p>{props.sinopsis}</p>
        </div>
    );
};

export default Pelicula;