import { useState } from 'react';

function App() {
  const [numero, setNumero]=useState(0);

  function sumar(){
    setNumero(numero+1);
  }

  return (
    <>
      <h1>{numero}</h1>
      <button onClick={sumar}>Click</button>
    </>
  );
}

export default App;
