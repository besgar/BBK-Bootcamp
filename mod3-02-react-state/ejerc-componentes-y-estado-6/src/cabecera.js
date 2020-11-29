import {useState} from 'react'

function Cabecera(props){
    const [vip, setVip]=useState(props.vip);

    function cambiarVip() {
        if(vip===true){
            setVip(false);
        }else{
            setVip(true);
        };
    };


    if(vip===true){
        return(
            <div>
                <h3>Hola {props.nombre}, eres usuario VIP</h3>
                <img src={props.imagen} alt="imagen_usuario"/>
                <button onClick={cambiarVip}>Cambiar VIP</button>
            </div>
        );
    }else{
        return (
            <div>
                <h3>{props.nombre}</h3>
                <img src={props.imagen} alt="imagen_usuario"/>
                <button onClick={cambiarVip}>Cambiar VIP</button>
            </div>
        );
    };

};

export default Cabecera;