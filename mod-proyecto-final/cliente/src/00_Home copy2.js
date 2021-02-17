import React from "react";
import { Button, Container, FormGroup, Input, Modal,InputGroup,InputGroupAddon,InputGroupText, } from "reactstrap";


function Home(){
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });


  
  /*MODAL > INICIAR SESIÓN*/
  const [loginModal, setLoginModal] = React.useState(false);
  /*MODAL > INICIAR SESIÓN*/

  /*MODAL > REGISTRARSE*/
  const [registerModal, setRegisterModal] = React.useState(false);
  /*MODAL > REGISTRARSE*/


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
          <Input defaultValue="" placeholder="Email" type="text" />
        </InputGroupAddon>
      </FormGroup>

      <FormGroup>
        <label>Password</label>
          <InputGroupAddon addonType="prepend" >
          <InputGroupText><i className="nc-icon nc-lock-circle-open"></i></InputGroupText>
          <Input defaultValue="" placeholder="Password" type="password" />
        </InputGroupAddon>
      </FormGroup>

      <Button block className="btn-round" color="primary">Iniciar sesión</Button>
    </div>
    <div className="modal-footer no-border-footer">
      <span className="text-muted text-center">¿Olvidaste tu contraseña? Haz clic {" "}<a href="#pablo" onClick={e => e.preventDefault()}>aquí</a>.</span>
    </div>
  </Modal>



  {/*MODAL > REGISTRARSE*/}
  <Modal isOpen={registerModal} toggle={() => setRegisterModal(false)} modalClassName="modal-register">
    <div className="modal-header no-border-header text-center">
      <button aria-label="Close" className="close" data-dismiss="modal" type="button" onClick={() => setRegisterModal(false)}><span aria-hidden={true}>×</span></button>
      <h6 className="text-muted">deserve-U</h6>
      <h3 className="modal-title text-center">¿Eres nuevo?</h3>
      <p>Regístrate para poder acceder a tu cuenta</p>
    </div>
    <div className="modal-body">
      <FormGroup>
        <label>Nombre</label>
        <InputGroupAddon addonType="prepend">
          <InputGroupText><i className="nc-icon nc-single-02"></i></InputGroupText>
          <Input defaultValue="" placeholder="Nombre" type="text" />
        </InputGroupAddon>
      </FormGroup>

      <FormGroup>
        <label>Email</label>
        <InputGroupAddon addonType="prepend">
          <InputGroupText><i className="nc-icon nc-email-85"></i></InputGroupText>
          <Input defaultValue="" placeholder="Email" type="text" />
        </InputGroupAddon>
      </FormGroup>
  
      <FormGroup>
        <label>Password</label>
          <InputGroupAddon addonType="prepend" >
          <InputGroupText><i className="nc-icon nc-lock-circle-open"></i></InputGroupText>
          <Input defaultValue="" placeholder="Password" type="password" />
        </InputGroupAddon>
      </FormGroup>

      <Button block className="btn-round" color="primary">Registrarse</Button>
      <div className="modal-footer no-border-footer">
        <span className="text-muted text-center">Y ahora, ¡a disfrutar!</span>
      </div>
    </div>
  </Modal>


  {/*HOME*/}

      <div className="home_bg" data-parallax={true} ref={pageHeader}>
        <div className="filter" />
        <Container>
          <div className="motto text-center" >
            <h1 style={{color:'white'}}>¡Bienvenido!</h1>
            <h3 style={{color:'white'}}>¿Quieres saber cuanto te aprecian tus amigos?<br /> Inicia sesión y averigua que novedades te esperan hoy.</h3>
            <br />
            
            <Button className="btn-round mr-1" color="neutral" outline onClick={() => setLoginModal(true)}><i className="fa fa-sign-in fa-1x"/>  Iniciar sesión</Button>

            <Button className="btn-round" color="neutral" type="button" outline onClick={() => setRegisterModal(true)}><i className="fa fa-pencil fa-1x"/>  Registrarse</Button>
          </div>
        </Container>
      </div>
    </>
  );
}



export default Home;