import muelle from './muelle.js';
import Cabecera from './cabecera.js';
import Main from './main.js';
import Footer from './footer.js';

function App() {
  const mostrarNombreMuelle=<Cabecera nombre={muelle.nombre}/>

  const mostrarListaBarcos=muelle.barcos.map(function(barco){
    return(
      <Main key={barco.nombre} nombre={barco.nombre} eslora={barco.eslora} tripulantes={barco.tripulantes}/>
    );
  });

  const footer=<Footer contacto={muelle.contacto.telefono}/>

  return (
    <div>
      {mostrarNombreMuelle}
      {mostrarListaBarcos}
      {footer}
    </div>
  );
};


export default App;
