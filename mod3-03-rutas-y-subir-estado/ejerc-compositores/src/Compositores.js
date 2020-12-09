function Compositores (props){
    const compositoresHTML=props.compositores.map(function (compositor){
        return (
            <li>
                <h3>{compositor.nombre}</h3>
                <p>Fecha: {compositor.fecha}</p>
                {compositor.canciones.map(function (cancion){
                    return <p>{cancion}</p>
                })}
            </li>
        );
    });
    return <ul>{compositoresHTML}</ul>
};

export default Compositores;