function Perros(props){
    const mostrarPerros=props.perros.map(function(perro){
        return <img src={perro} alt="imagen_perro"/>
    });

    return mostrarPerros;
};

export default Perros;