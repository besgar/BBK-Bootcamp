import libreria from './libreria.js';
import Cabecera from './cabecera.js';
import Main from './main.js';
import Footer from './footer.js';


function App() {

  const libros=libreria.libros.map(function (libro){
    return (
      <Main key={libro.id} titulo={libro.titulo} autor={libro.autor} editorial={libro.editorial} descripcion={libro.descripcion} img={libro.img} stock={libro.stock}/>
    );
  });


  return (  
    <>
      <Cabecera nombre={libreria.usuario.nombre} vip={libreria.usuario.vip} imagen={libreria.usuario.imagen}/>
      
      {libros}

      <Footer libros={libreria.libros}/>
    </>
  );

};


export default App;
