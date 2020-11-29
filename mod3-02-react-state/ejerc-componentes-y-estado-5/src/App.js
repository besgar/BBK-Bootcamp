import {useState} from "react";

const nombresArray=["Oskar", "Elena", "Haizea"];

function App() {
  const [contador, setContador]=useState(0);

  const siguiente=()=>{
    if(contador===2){
      setContador(0)
    }else{
      setContador(contador + 1)
    }
  };

  return (
    <>
      <h3>{nombresArray[contador]}</h3>
      <button onClick={siguiente}>Siguiente</button>
    </>
  );

};


export default App;
