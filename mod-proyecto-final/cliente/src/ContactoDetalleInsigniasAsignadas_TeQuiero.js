import {BrowserRouter, Route, Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Button} from 'reactstrap';

function ContactoDetalleInsigniasAsignadas_TeQuiero(){
  const params=useParams();
  // const emailUser=params.usuario;
  const emailContacto=params.email;
  
  const [insigniasAsignadas, setInsigniasAsignadas] = useState([]);

  function refreshPage() {
    window.location.reload(false);
    }

  function anyadirInsignia(){    
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usuario: "elenabestilleiro@gmail.com", contacto: emailContacto, nombreInsignia:"te_quiero"})
    };
    fetch('http://localhost:3001/contacts/contactbadges/addbadge/', requestOptions)
        .then(response => response.json())
        .then(data => {
            setInsigniasAsignadas(data)
    });

    //   window.location.reload(false);
    refreshPage();
  };
   

  function eliminarInsignia(){
    const requestOptions2 = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usuario: "elenabestilleiro@gmail.com", contacto: emailContacto, nombreInsignia:"te_quiero"})
    };
    fetch('http://localhost:3001/contacts/contactbadges/deletebadge', requestOptions2)
        .then(response => response.json())
        .then(data => setInsigniasAsignadas(data));
    };



  
    useEffect(()=>{
        fetch("http://localhost:3001/sentbadgets3/who/given/elenabestilleiro@gmail.com/te_quiero/" + emailContacto)
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            setInsigniasAsignadas(res);
        });
    },[]);

    // /*FALTA PONER LA URL DE LA IMG DE LA INSIGNIA*/
    // /*REVISAR XK SE VE LA IMG DE LA INSIGNIA SI METO UNA URL Y XK NO SE VE SI LA GUARDO DONDE "IMG"*/


    if(insigniasAsignadas.length>0){
        return(
            <>
                <div class="mr-center ml-center p-5 col-sm-3 col-md-3">
                    <img alt="imagen_insignia" class="img-circle img-no-padding img-responsive" src="http://clouderview.com/hel/bbkboot/img_te_quiero.jpg"/>
                    <blockquote className="blockquote"><h6 class="text-center">Te quiero</h6></blockquote>               
                    <div className="nombreInsigniaYBtnCentrar">
                      <Button className="btn-round btn-icon btnNumeroInsignia" color="danger" onClick={eliminarInsignia}><h6>Quitar insignia</h6></Button>
                    </div>
                </div>
            </>
        );
    }else{
        return(
            <>
                <div class="mr-center ml-center p-5 col-sm-3 col-md-3">
                    <img alt="imagen_insignia" class="img-circle img-no-padding img-responsive" src="http://clouderview.com/hel/bbkboot/img_te_quiero_off.jpg"/>
                    <blockquote className="blockquote"><h6 class="text-center">Te quiero</h6></blockquote>               
                    <div className="nombreInsigniaYBtnCentrar">
                      <Button className="btn-round btn-icon btnNumeroInsignia" color="success" onClick={anyadirInsignia}><h6>Añadir insignia</h6></Button>
                    </div>
                </div>
            </>
        );
    }
}


export default ContactoDetalleInsigniasAsignadas_TeQuiero;