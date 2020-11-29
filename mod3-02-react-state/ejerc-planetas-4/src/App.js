import './App.css';
import sistemaSolar from './Sistemasolar.js';
import Planeta from './planeta.js';
import {useState} from 'react';

function App() {
  const [sistemaEstado,setSistemaEstado]=useState(sistemaSolar);

  const borrar=()=>{
    const array=[];
    for (let i=0; i<sistemaEstado.length-1; i++){
      array.push(sistemaEstado[i])
    }
    setSistemaEstado(array)
  };

  const mostrarTodos=()=>{
    setSistemaEstado(sistemaSolar);
  };

  const mostrarPlanetas=sistemaEstado.map(function(planeta){
    return <Planeta nombre={planeta.nombre} color={planeta.color} temperatura={planeta.temperatura} imagen={planeta.imagen} />
  });


  return (
    <div>
      {mostrarPlanetas}
      <button onClick={borrar}>Borrar último planeta</button>
      <button onClick={mostrarTodos}>Mostrar todos los planetas</button>
    </div>);
};

export default App;
