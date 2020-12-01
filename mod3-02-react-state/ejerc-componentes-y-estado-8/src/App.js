import {useState} from 'react';
import "./App.css";


function App() {
  const [simbolo, setSimbolo]=useState("O");
  const [cuadrados, setCuadrados]=useState([null, null, null, null, null, null, null, null, null]);

  function comprobarGanador(){
    if(cuadrados[0]===cuadrados[1] && cuadrados[1]===cuadrados[2] && cuadrados[0]===cuadrados[2]){
      return cuadrados[0];
    } else if (cuadrados[3]===cuadrados[4] && cuadrados[3]===cuadrados[5] && cuadrados[4]===cuadrados[5]) {
      return cuadrados[3];
    }else if (cuadrados[6]===cuadrados[7] && cuadrados[6]===cuadrados[8] && cuadrados[7]===cuadrados[8]) {
      return cuadrados[6];
    } else if (cuadrados[0]===cuadrados[3] && cuadrados[0]===cuadrados[6] && cuadrados[3]===cuadrados[6]) {
      return cuadrados[0];
    } else if (cuadrados[1]===cuadrados[4] && cuadrados[1]===cuadrados[7] && cuadrados[4]===cuadrados[7]) {
      return cuadrados[1];
    } else if (cuadrados[2]===cuadrados[5] && cuadrados[5]===cuadrados[8]) {
      return cuadrados[2];
    } else if (cuadrados[0]===cuadrados[4] && cuadrados[0]===cuadrados[8] && cuadrados[4]===cuadrados[8]) {
      return cuadrados[0];
    } else if (cuadrados[2]===cuadrados[4] && cuadrados[2]===cuadrados[6] && cuadrados[4]===cuadrados[6]) {
      return cuadrados[2];
    }
    return null;
  };


  let ganador=comprobarGanador();


  function mostrarGanador(){
    if(ganador!==null){
    return <p>Ganador: {ganador}</p>;
    };
  };


  function cambiarEstado(){
    if(simbolo==="X"){
      setSimbolo("O");
    }else{
      setSimbolo("X");
    }
  };


  function pintarBotones(i){
    return <button onClick={function(){
      const array=cuadrados.slice();
      if(cuadrados[i]===null){
        array[i]=simbolo;
        setCuadrados(array);
        cambiarEstado();
      }
    }}>{cuadrados[i]}</button>;
  };


  return (
    <div>
      {pintarBotones(0)}
      {pintarBotones(1)}
      {pintarBotones(2)}
      <br/>
      {pintarBotones(3)}
      {pintarBotones(4)}
      {pintarBotones(5)}
      <br/>
      {pintarBotones(6)}
      {pintarBotones(7)}
      {pintarBotones(8)}
      <br/>
      {mostrarGanador()}
      <button onClick={function(){setCuadrados([null, null, null, null, null, null, null, null, null])}}>Partida nueva</button>
    </div>
  );
};


export default App;
