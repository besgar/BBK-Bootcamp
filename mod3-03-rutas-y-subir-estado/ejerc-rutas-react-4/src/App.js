import {useState} from "react";
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Cabecera from "./cabecera.js";
import Jugador from "./jugador.js";
import Quinteto from "./quinteto.js";

function App() {
  const [jugadores, setJugadores]=useState([
    {
      nombre: "Jugador 0",
      pos: "Base",
      imagen:"https://sneakernews.com/wp-content/uploads/2013/02/nba-feet-february-6-2013-06.jpg",
      edad: "34",
      estatura: "2,00 m"
    },
    {
      nombre: "Jugador 1",
      pos: "Base",
      imagen:"https://behindthebuckpass.com/wp-content/blogs.dir/94/files/2016/09/9249556-giannis-antetokounmpo-nba-indiana-pacers-milwaukee-bucks.jpg",
      edad: "30",
      estatura: "1,89 m"
    },
    {
      nombre: "Jugador 2",
      pos: "Base",
      imagen:"https://th.bing.com/th/id/OIP.kpJ4aVXLtJFuu9VLlCk11wHaJQ?pid=Api&w=696&h=870&rs=1",
      edad: "28",
      estatura: "1,92 m"
    },
    {
      nombre: "Jugador 3",
      pos: "Base",
      imagen:"https://i.pinimg.com/originals/b8/7f/5c/b87f5c1b5e84cffc4e2dcef020b51f75.jpg",
      edad: "27",
      estatura: "1,98 m"
    },
    {
      nombre: "Jugador 4",
      pos: "Base",
      imagen:"http://as01.epimg.net/baloncesto/imagenes/2015/04/27/album/1430161821_434974_1432648501_album_grande.jpg",
      edad: "30",
      estatura: "2,02 m"
    }
  ]);


  return (
    <BrowserRouter>
      <Cabecera equipo={jugadores}/>

      <Route exact path="/">
        <p>Estoy en la página de inicio</p>
      </Route>

      <Route exact path="/quinteto">
        <Quinteto equipo={jugadores}/>
      </Route>

      <Route exact path="/jugador0">
        <Jugador nombre={jugadores[0].nombre} pos={jugadores[0].pos} imagen={jugadores[0].imagen} edad={jugadores[0].edad} estatura={jugadores[0].estatura}/>
      </Route>

      <Route exact path="/jugador1">
        <Jugador nombre={jugadores[1].nombre} pos={jugadores[1].pos} imagen={jugadores[1].imagen} edad={jugadores[1].edad} estatura={jugadores[1].estatura}/>
      </Route>

      <Route exact path="/jugador2">
        <Jugador nombre={jugadores[2].nombre} pos={jugadores[2].pos} imagen={jugadores[2].imagen} edad={jugadores[2].edad} estatura={jugadores[2].estatura}/>
      </Route>

      <Route exact path="/jugador3">
        <Jugador nombre={jugadores[3].nombre} pos={jugadores[3].pos} imagen={jugadores[3].imagen} edad={jugadores[3].edad} estatura={jugadores[3].estatura}/>
      </Route>

      <Route exact path="/jugador4">
        <Jugador nombre={jugadores[4].nombre} pos={jugadores[4].pos} imagen={jugadores[4].imagen} edad={jugadores[4].edad} estatura={jugadores[4].estatura}/>
      </Route>

    </BrowserRouter>
  );
};

export default App;
