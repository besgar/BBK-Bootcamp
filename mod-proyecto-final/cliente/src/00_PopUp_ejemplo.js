import React, {Component} from 'react'
import {useEffect, useState} from "react";
import {BrowserRouter, Route, Link,useParams} from "react-router-dom";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";


class PopUp extends React.Component{

    state={
        abierto: false,
    }

    abrirPopUp=()=>{
        this.setState({abierto: !this.state.abierto})
    }

    render(){
        /*Para centrar el pop up en el centro de la pantalla*/
        const modalStyles={
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)"
        }


        return(
            <>
                <div className="principal">
                    <div className="secundario">
                        <Button color="success" onClick={this.abrirPopUp}>Mostrar pop up</Button>
                    </div>
                </div>

                <Modal isOpen={this.state.abierto} style={modalStyles}>
                    <ModalHeader>
                        Iniciar sesión
                    </ModalHeader>

                    <ModalBody>
                        <FormGroup>
                            <Label for="usuario">Usuario</Label>
                            <Input type="text" id="usuario"/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="password">Contraseña</Label>
                            <Input type="text" id="password"/>
                        </FormGroup>

                    </ModalBody>

                    <ModalFooter>
                        <Button color="primary">Iniciar sesión</Button>
                        <Button color="secundary" onClick={this.abrirPopUp}>Cancelar</Button>
                    </ModalFooter>

                </Modal>
            </>
        );
    }  
}

export default PopUp;