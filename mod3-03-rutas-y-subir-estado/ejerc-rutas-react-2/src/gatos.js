function Gatos(props){
    const mostrarGatos=props.gatos.map(function(gato){
        return <img src={gato} alt="imagen_gato"/>
    });

    return mostrarGatos;
};

export default Gatos;