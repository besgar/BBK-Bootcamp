import React from "react";

import {UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  FormGroup,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";


function UsuarioMenu() {
  const [bodyClick, setBodyClick] = React.useState(false);
  return (
    <>
      {bodyClick ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setBodyClick(false);
          }}
        />
      ) : null}

     
      <Navbar color="danger" expand="lg">
        <Container>
          <div className="navbar-translate">
            {/* <NavbarBrand href="https://www.google.es/" onClick={e => e.preventDefault()}> */}
            <NavbarBrand href="#">
              deserve-U
            </NavbarBrand>
            <button
              className="navbar-toggler"
              id="example-navbar-danger"
              type="button"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setBodyClick(true);
              }}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          
          <UncontrolledCollapse navbar toggler="#example-navbar-danger">
            <Nav className="ml-auto" navbar>
              <NavItem className="active">
                <NavLink href="/halloffame">
                  <i className="nc-icon nc-trophy" />
                  <p> Hall of fame</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/sentbadgets">
                  <i className="nc-icon nc-book-bookmark"/>
                  <p> Insignias asignadas</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag="a" href="/contacts">
                  <i className="nc-icon nc-badge" />
                  <p> Contactos</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/request">
                  <i className="nc-icon nc-bell-55" />
                  <p> Solicitudes</p>
                </NavLink>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  );
}

export default UsuarioMenu;