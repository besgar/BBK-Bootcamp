const Quinteto = (props) => {
    let mostrarEquipo = props.equipo.map((jugador) => {
      return (
        <>
          <h1>{jugador.nombre}</h1>
          <img src={jugador.imagen} alt="imagen_jugador" />
        </>
      );
    });

    return mostrarEquipo;
};


export default Quinteto;