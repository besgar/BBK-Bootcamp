import {useState} from "react";
import {Tab, Tabs} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SolicitudesRecibidas from './SolicitudesRecibidas.js';
import SolicitudesEnviadas from './SolicitudesEnviadas.js';
import React from 'react';
import { Helmet } from 'react-helmet';

function Solicitudes(){
    const [key, setKey] = useState('home');

    console.log(setKey);
    return(
        <>
            <Helmet>
                <title>deserve · U | Solicitudes</title>
            </Helmet>
            
            <div className="navTab_Solicitudes">
                <div className="tab-wrapper">
                    <div className='container-fluid' >
                        <div className="row">
                            <div className="col-sm-12">

                                <Tabs defaultActiveKey="recibidas">
                                <Tab eventKey="recibidas" title={<h6>Recibidas</h6>}>
                                    <div className="tab-item-wrapper">
                                        <SolicitudesRecibidas/>                                
                                    </div>
                                </Tab>

                                <Tab eventKey="enviadas" title={<h6>Enviadas</h6>}>
                                    <div className="tab-item-wrapper">
                                        <SolicitudesEnviadas/>                                                               
                                    </div>
                                </Tab>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default Solicitudes;