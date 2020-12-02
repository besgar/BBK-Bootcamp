function Jugador(props){
    return (
        <div>
          <h1>{props.nombre}</h1>
          <img src={props.imagen} alt="imagen_jugador"/>
          <p>Edad:{props.edad}</p>
          <p>Posición:{props.pos}</p>
          <p>Estatura:{props.estatura}</p>
        </div>
    );
};

export default Jugador;