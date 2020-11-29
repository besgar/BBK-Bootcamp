import './App.css';
import sistemaSolar from './Sistemasolar.js';

function App() {
  const mostrarPlanetas=sistemaSolar.map(function(planeta){
    return (
      <div>
        <h1>{planeta.nombre}</h1>
        <p>{planeta.color}</p>
        <p>{planeta.temperatura}</p>
        <img src={planeta.imagen} alt="imagen_planeta"/>
      </div>
    );
  });


  return mostrarPlanetas;

};



export default App;
