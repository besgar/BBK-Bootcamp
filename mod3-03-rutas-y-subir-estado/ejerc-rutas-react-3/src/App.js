import {useState} from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";
import Pelicula from "./pelicula.js";


function App() {
  const [peliculas, setPeliculas]=useState([
      {
        id: "1",
        imagen:"https://upload.wikimedia.org/wikipedia/en/a/ab/The_Father_2020_poster.jpg",
        titulo: "El padre",
        sinopsis: "Anthony (Anthony Hopkins), un hombre de 80 años mordaz, algo travieso y que tercamente ha decidido vivir solo, rechaza todos y cada uno de los cuidadores que su hija Anne (Olivia Colman) intenta contratar para que le ayuden en casa. Anne está desesperada porque ya no puede visitarle a diario y siente que la mente de su padre empieza a fallar y se desconecta cada vez más de la realidad. Dado el ir y venir de sus recuerdos ¿cuánto de su propia identidad podrá recordar con el paso del tiempo? Anne sufre la paulatina pérdida de su padre a medida su mente se deteriora, pero ¿no tiene ella derecho a vivir también su propia vida?"
      },
      {
        id: "2",
        imagen:"https://s3z5n6f7.rocketcdn.me/wp-content/uploads/2020/12/MV5BODJlMzdlYzItMzRkNi00NTE0LTliZjQtMTllNzkxNDVhNjkxXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_-300x444.jpg",
        titulo: "The Mauritanian",
        sinopsis: "Capturado por el gobierno de los Estados Unidos, Mohamedou Ould Slahi (Rahim) sobrevive en la prisión de Guantánamo donde lleva más de una década sin cargos ni juicio. Tras haber perdido toda esperanza, Slahi encuentra aliados en la abogada defensora Nancy Hollander (Foster) y su asociada Teri Duncan (Woodley). Juntos se enfrentan a innumerables obstáculos en una búsqueda desesperada de justicia."
      }
  ]);


  const mostrarPeliculas=peliculas.map(function(pelicula){
    return (
      <div>
        <Link to={"/" + pelicula.titulo}><h1>{pelicula.titulo}</h1></Link>
        <img src={pelicula.imagen} alt="imagen_pelicula"/>
      </div>
    );  
  });


  return (
    <BrowserRouter>
      <Route exact path="/">
        {mostrarPeliculas}
      </Route>

      <Route exact path="/El padre"> 
        <Pelicula titulo={peliculas[0].titulo} imagen={peliculas[0].imagen} sinopsis={peliculas[0].sinopsis}/>
      </Route>

      <Route exact path="/The Mauritanian"> 
        <Pelicula titulo={peliculas[1].titulo} imagen={peliculas[1].imagen} sinopsis={peliculas[1].sinopsis}/>
      </Route>

    </BrowserRouter>
  );
};

export default App;
