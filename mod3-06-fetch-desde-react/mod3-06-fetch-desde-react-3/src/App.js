import {useState, useEffect} from 'react';

function Tipo({url}){
  const [pokemon, setPokemon]=useState([]);

  useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(res=>{
      setPokemon(res.pokemon);
    });
  },[url]);


  return (
    <div>
      <p>{pokemon[Math.floor(Math.random() * pokemon.length)].pokemon.name}</p>  {/*Ponemos "pokemon.lenght" xk en "pokemon", es el array donde tengo guardado los nombres*/}
      <p>{pokemon[Math.floor(Math.random() * pokemon.length)].pokemon.name}</p> 
      <p>{pokemon[Math.floor(Math.random() * pokemon.length)].pokemon.name}</p>  
      {/*todo lo que va entre [] es el indice del array "pokemon", que saca 1 numero aleatorio */}
    </div>
  );
};


function App() {
  const [data, setData]=useState([]);
  const [url, setUrl]=useState("");

  useEffect(()=>{
    fetch("https://pokeapi.co/api/v2/type/")
    .then(res=>res.json())
    .then(res=>{
      setData(res.results) /*res.results: xk ahi es donde está el array en la API de Pomkemon */
    });
  },[]);


  /*Xk es en "data" donde tenemos guardado el array que queremos recorrer */
  const tipos=data.map(tipo=>{
    return <option value={tipo.url}>{tipo.name}</option>
  });


  function handleChange(event){
    console.log(event.target.value);
    setUrl(event.target.value);
  };


  return (
    <>
      <select onChange={handleChange}>{tipos}</select>
      <Tipo url={url}/>
    </>
  );
}


export default App;
