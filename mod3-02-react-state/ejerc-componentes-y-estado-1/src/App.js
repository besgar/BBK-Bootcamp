import './App.css';

function App() {
  const evento = {
    nombre: "Salsa dance party",
    fecha: "24/07/2020",
    hora: "16:00",
    lugar: {
          direccion:"Done Bikendi Kalea, 2",
          ciudad: "Bilbao"
    }
  };


  return (
    <div>
      <h3>{evento.nombre}</h3>
      <p>Fecha: {evento.fecha}</p>
      <p>Hora: {evento.hora}</p>
      <p>Dirección: {evento.lugar.direccion}</p>
      <p>Ciudad: {evento.lugar.ciudad}</p>
    </div>
  );

};

export default App;
