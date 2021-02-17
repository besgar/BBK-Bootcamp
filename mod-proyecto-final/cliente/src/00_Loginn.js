import {useEffect, useState} from "react";
import {BrowserRouter, Route, Link, useParams} from "react-router-dom";
import React from "react";
import { Button, Container, FormGroup, Input, Modal,InputGroup,InputGroupAddon,InputGroupText, } from "reactstrap";

function Login(props) {
  const [username,setUserName]=useState("");
  const [password,setPassword]=useState("");
  // const [mensaje,setMensaje]=useState("");

  /*MODAL > INICIAR SESIÓN*/
  const [loginModal, setLoginModal] = React.useState(false);
  /*MODAL > INICIAR SESIÓN*/


  function manageChangePassword(event){
    setPassword(event.target.value);
  };

  function manageChangeUsername(event){
    setUserName(event.target.value);
  };


 
    return (
      <>
        {/*MODAL > INICIAR SESIÓN*/}
        <Modal isOpen={loginModal} toggle={() => setLoginModal(false)} modalClassName="modal-register">
          <div className="modal-header no-border-header text-center">
            <button aria-label="Close" className="close" data-dismiss="modal" type="button" onClick={() => setLoginModal(false)}><span aria-hidden={true}>×</span></button>
            <h6 className="text-muted">deserve-U</h6>
            <h3 className="modal-title text-center">Hola, ¿qué tal?</h3>
            <p>Inicia sesión para acceder a tu cuenta </p>
          </div>
          <div className="modal-body">
            <FormGroup>
              <label>Email</label>
              <InputGroupAddon addonType="prepend">
                <InputGroupText><i className="nc-icon nc-email-85"></i></InputGroupText>
                <Input value={username} onChange={manageChangeUsername} placeholder="Email" type="text" />
              </InputGroupAddon>
            </FormGroup>

            <FormGroup>
              <label>Password</label>
                <InputGroupAddon addonType="prepend" >
                <InputGroupText><i className="nc-icon nc-lock-circle-open"></i></InputGroupText>
                <Input value={password} onChange={manageChangePassword} placeholder="Password" type="password" />
              </InputGroupAddon>
            </FormGroup>
            
            <Link to={"/halloffame"}>
              <Button block className="btn-round" color="primary" onClick={() =>props.doLogin(username, password)}>Iniciar sesión</Button>
            </Link>
            <div>Hola: {props.mensaje}</div>
          </div>
          <div className="modal-footer no-border-footer">
            <span className="text-muted text-center">¿Olvidaste tu contraseña? Haz clic {" "}<a href="#pablo" onClick={e => e.preventDefault()}>aquí</a>.</span>
          </div>
        </Modal>
      </>
    );
}

export default Login;


{/* <div className="login-wrapper">
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
      {/* <button href="/halloffame" class="boton" onClick={() =>props.doLogin(username, password)}>AÑADIR</button> 
    </div>
    <div>Hola: {props.mensaje}</div>
</div> */}