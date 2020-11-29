import './App.css';
import sistemaSolar from './Sistemasolar.js';
import Planeta from './planeta.js';

function App() {
  const mostrarPlanetas=sistemaSolar.map(function(planeta){
    return <Planeta nombre={planeta.nombre} color={planeta.color} temperatura={planeta.temperatura} imagen={planeta.imagen} />
  });

  return mostrarPlanetas;
}

export default App;
