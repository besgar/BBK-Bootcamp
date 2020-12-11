import "./App.css";
import {useState, useEffect} from 'react';



/*Componente funcional que muestra las cartas */
function Cartas(props){
  const [cards, setCards]=useState([]); /*Llega un array que se llama "cards", y con esto se sacan las cartas*/

  useEffect(()=>{
    fetch("https://api.magicthegathering.io/v1/cards?set=" + props.selected)
    .then(res=>res.json())
    .then(res=>{
      setCards(res.cards) /*Llega un array que se llama "cards", y con esto se sacan las cartas*/
      console.log(res);
    });
  },[props.selected]); /*Cada vez que cambie el código que está entre [], volverá a hacer el fetch */

  const mostrarCartas=cards.map(function(card){
    return (
      <div>
          <h3>{card.name}</h3>
          <img class="carta" src={card.imageUrl} alt="imagen_carta"/>
          <p>{card.text}</p>
      </div>
    );
  });

  return mostrarCartas;
};


function App() {
  const [data, setData]=useState([]);
  const [selected, setSelected]=useState("");

  useEffect(()=>{
    fetch("https://api.magicthegathering.io/v1/sets")
    .then(res=>res.json())
    .then(res=>{
      setData(res.sets); /*"sets" es el nombre del array que contiene los "sets" que queremos mostrar de las magic*/
    });
  },[]);


  /*Esta funcion guarda en una variable lo que cogemos del "value" de <option>. Y para guardarlo, creamos otro estado (selected)*/
  function manageChange(event){
    // console.log(event.target.value); /*Hacemos un console.log para ver que la funcion funciona*/
    setSelected(event.target.value);
  };


  const options=data.map(option=>{
    return <option value={option.code}>{option.name}</option> /*Aqui ponemos "option" xk al declarar la funcion, hemos puesto "option"*/
  });

  
  return (
    <>
      <select onChange={manageChange}>{options}</select>; {/*en el "select" llamamos a la funcion "manageChange"*/}
      < Cartas selected={selected}/> {/*Le pasa al componente lo seleccionado en el "select" */}
    </>
  );
}

export default App;
