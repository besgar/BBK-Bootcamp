import {useEffect, useState} from "react";
import {BrowserRouter, Route, Link, useParams} from "react-router-dom";


function Login(props) {
  const [username,setUserName]=useState("");
  const [password,setPassword]=useState("");
  // const [mensaje,setMensaje]=useState("");

  function manageChangePassword(event){
    setPassword(event.target.value);
  };

  function manageChangeUsername(event){
    setUserName(event.target.value);
  };
 
    return (
      <>
        <div className="login-wrapper">
          <h1>Please Log In</h1>
              <label>
                <p>Username</p>
                <input type="text" value={username} onChange={manageChangeUsername} />
              </label>
              <label>
                <p>Password</p>
                <input type="password" value={password} onChange={manageChangePassword} />
              </label>
              <div>
              <Link to={"/halloffame"}>
                <button class="boton" onClick={() =>props.doLogin(username, password)}>AÑADIR</button>
              </Link>
                {/* <button href="/halloffame" class="boton" onClick={() =>props.doLogin(username, password)}>AÑADIR</button> */}
              </div>
              <div>Hola: {props.mensaje}</div>
      </div>
      </>
    );
}

export default Login;