import React from "react";
import { Row, Container } from "reactstrap";

function Footer() {

  return (
<footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a href="https://www.creative-tim.com?ref=pkr-footer" target="_blank">Ayuda</a>
              </li>
              <li>
                <a href="http://blog.creative-tim.com/?ref=pkr-footer" target="_blank">Privacidad</a>
              </li>
              <li>
                <a href="https://www.creative-tim.com/license?ref=pkr-footer" target="_blank">Condiciones</a>
              </li>
              <li>      
                <a href="https://es-es.facebook.com/" target="_blank"><i aria-hidden={true} className="fa fa-facebook-official"/></a>
              </li>
              <li>      
                <a href="https://twitter.com/" target="_blank"><i aria-hidden={true} className="fa fa-twitter"/></a>
              </li>
              <li>      
                <a href="https://www.instagram.com/" target="_blank"><i aria-hidden={true} className="fa fa-instagram"/></a>
              </li>
            </ul>
          </nav>
        </Row>
      </Container>
    </footer>
    
  );
}

export default Footer;