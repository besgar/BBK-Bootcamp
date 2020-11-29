import {useState} from 'react';

function Main(props){

    const [stock, setStock]=useState(props.stock);

    function restar(){
        setStock(stock-1);
    };


    if(stock===0){
        return (
            <div>
                <h2>{props.titulo}</h2>
                <p>{props.autor}</p>
                <img src={props.img} alt="imagen_libro"/>
                <p>{props.editorial}</p>
                <p>{props.descripcion}</p>
                <p>Stock: No quedan unidades</p>
            </div>
        );
    }else{
        return (
            <div>
                <h2>{props.titulo}</h2>
                <p>{props.autor}</p>
                <img src={props.img} alt="imagen_libro"/>
                <p>{props.editorial}</p>
                <p>{props.descripcion}</p>
                <p>Stock: {props.stock}</p>
                <button onClick={restar}>Comprar</button>
            </div>
        );
    };
};


export default Main;