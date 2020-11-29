import Coche from './coche.js';
import array from './arrayCoches.js';

function App() {
  const mostrarCoches=array.map(function(coche){
    return <Coche ruedas={coche.ruedas} altura={coche.altura} longitud={coche.longitud} color={coche.color}/>
  });

  return mostrarCoches;
}

export default App;
