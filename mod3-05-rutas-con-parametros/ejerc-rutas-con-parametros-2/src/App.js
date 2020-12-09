import {useState} from "react";
import {BrowserRouter, Route, Link, useParams} from "react-router-dom";


function Operaciones(){
  const params=useParams();
  const num1=parseInt(params.num1);
  const num2=parseInt(params.num2);

  return (
    <> 
      <p>{num1+num2}</p>
      <p>{num1-num2}</p>
      <p>{num1*num2}</p>
      <p>{num1/num2}</p>
      <p>{num1%num2}</p>
    </>
  );
};


function App() {
  const [num1, setNum1]=useState(0);
  const [num2, setNum2]=useState(0);

  function sumar1(){
    setNum1(num1+1);
  }

  function restar1(){
    setNum1(num1-1);
  }

  function sumar2(){
    setNum2(num1+1);
  }

  function restar2(){
    setNum2(num1-1);
  }


  return (
    <BrowserRouter>
      <p>{num1}</p>
      <button onClick={sumar1}>Sumar</button>
      <button onClick={restar1}>Restar</button>

      <p>{num2}</p>
      <button onClick={sumar2}>Sumar</button>
      <button onClick={restar2}>Restar</button>

      <Link to={"/operaciones/" + num1 + "/" + num2}>Operaciones</Link>
      {/* <Link to={`/operaciones/${num1}/${num2}`}>Operaciones</Link> */}

      <Route exact path="/operaciones/:num1/:num2">
        <Operaciones />
      </Route>

    </BrowserRouter>
  
  );
}

export default App;
