import {useEffect, useState} from "react";
import React from "react";
import {Link} from "react-router-dom";
import {Button,Container} from "reactstrap";

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

  return (
    <>
      {/* <div className="home_bg" className="page-header" data-parallax={true} ref={pageHeader}> */}
      <div className="home_bg" data-parallax={true} ref={pageHeader}>
        <div className="filter" />
        <Container>
          <div className="motto text-center" >
            <h1 style={{color:'white'}}>¡Bienvenido!</h1>
            <h3 style={{color:'white'}}>¿Quieres saber cuanto te aprecian tus amigos?<br /> Inicia sesión y averigua que novedades te esperan hoy</h3>
            <br />
            <Link to="/login">
                <Button className="btn-round mr-1" color="neutral" outline><i className="fa fa-sign-in fa-1x"/>  Iniciar sesión</Button>
            </Link>

            <Button className="btn-round" color="neutral" type="button" outline><i className="fa fa-pencil fa-1x"/>  Registrarse</Button>
          </div>
        </Container>
      </div>
    </>
  );
}



export default Home;