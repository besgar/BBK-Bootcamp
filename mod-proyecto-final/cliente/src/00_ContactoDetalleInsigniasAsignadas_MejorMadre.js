import {BrowserRouter, Route, Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Button} from 'reactstrap';

function ContactoDetalleInsigniasAsignadas_MejorMadre(){
    const [insigniasAsignadas, setInsigniasAsignadas] = useState([]);
    const params=useParams();
    const emailUser=params.usuario;
    const emailContacto=params.contacto;
    const nombreinsignia=params.nombreinsignia;

    let nombreinsig="";

    if(nombreinsignia==="Mejor Madre"){
      nombreinsig="mejor_madre";
    } else if(nombreinsignia==="Mejor Padre"){
      nombreinsig="mejor_padre";
    } else if(nombreinsignia==="Best Friend"){
      nombreinsig="best_friend";
    } else if(nombreinsignia==="Te Quiero"){
      nombreinsig="te_quiero";
    } else if(nombreinsignia==="Como de la familia"){
      nombreinsig="como_de_la_familia";
    } else if(nombreinsignia==="Detallista"){
      nombreinsig="detallista";
    } else if(nombreinsignia==="Luchador"){
      nombreinsig="luchador";
    } else if(nombreinsignia==="Optimista"){
      nombreinsig="optimista";
    } else if(nombreinsignia==="Artista"){
      nombreinsig="artista";
    } else if(nombreinsignia==="En plena forma"){
      nombreinsig="en_plena_forma";
    } else if(nombreinsignia==="Al más trabajador"){
      nombreinsig="al_más_trabajador";
    } else if(nombreinsignia==="Top"){
      nombreinsig="top";
    }
   
    useEffect(()=>{
        fetch("http://localhost:3001/sentbadgets3/who/given/elenabestilleiro@gmail.com/mejor_madre" + emailContacto )
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            setInsigniasAsignadas(res)
        });
    },[]);

    // /*FALTA PONER LA URL DE LA IMG DE LA INSIGNIA*/
    // /*REVISAR XK SE VE LA IMG DE LA INSIGNIA SI METO UNA URL Y XK NO SE VE SI LA GUARDO DONDE "IMG"*/

    const [boolean, setBoolean] = useState(false);
    
    const cambiarBoolean = () => {
      setBoolean(!boolean) //cambiamos el valor de boolean por el contrario al que tenga en el momento de llamar a esta función
    }

    if(boolean !== true){
        return(
            <>
                <div class="mr-center ml-center p-5 col-sm-3 col-md-3">
                    <img alt="imagen_insignia" class="img-circle img-no-padding img-responsive" src="http://clouderview.com/hel/bbkboot/badge.jpg"/>
                    <blockquote className="blockquote"><h6 class="text-center">Mejor Madre</h6></blockquote>               
                    <div className="nombreInsigniaYBtnCentrar">
                        <div className="btnNumeroInsignia">
                            <Button className="btn-round btn-icon" color="primary" onClick={cambiarBoolean}><h6>Quitar insignia</h6></Button>
                        </div>                
                    </div>
                </div>
            </>
        );
    }else{
        return(
            <>
                <div class="mr-center ml-center p-5 col-sm-3 col-md-3">
                    <img alt="imagen_insignia" class="img-circle img-no-padding img-responsive" src="http://clouderview.com/hel/bbkboot/badge_off.jpg"/>
                    <blockquote className="blockquote"><h6 class="text-center">Mejor Madre</h6></blockquote>               
                    <div className="nombreInsigniaYBtnCentrar">
                        <div className="btnNumeroInsignia">
                            <Button className="btn-round btn-icon" color="primary" onClick={cambiarBoolean}><h6>Añadir insignia</h6></Button>
                        </div>                
                    </div>
                </div>
            </>
        );
    }
}


export default ContactoDetalleInsigniasAsignadas_MejorMadre;