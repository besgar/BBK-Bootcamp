import arrayListaCompra from './arrayListaCompra.js';

function App() {
  const li=arrayListaCompra.map((lista)=>{
    return <li>{lista}</li>
    });

    return (
        <>
            <ul>{li}</ul>
        </>
    );
};

export default App;
