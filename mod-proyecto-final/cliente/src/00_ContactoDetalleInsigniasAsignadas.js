import {BrowserRouter, Route, Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Button} from 'reactstrap';

{/* <div class="mr-center ml-center col-sm-3 col-md-2"></div> */}

function ContactoDetalleInsigniasAsignadas(){
    const [insigniasRecibidas, setInsigniasRecibidas] = useState([]);
    const params=useParams();
    const emailContacto=params.email;
   
    useEffect(()=>{
        fetch("http://localhost:3001/halloffame3/" + emailContacto)
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            setInsigniasRecibidas(res)
        });
    },[]);


    const iterableResponse = Object.values(insigniasRecibidas);
    console.log(insigniasRecibidas);
    console.log(iterableResponse);

    /*FALTA PONER LA URL DE LA IMG DE LA INSIGNIA*/
    /*REVISAR XK SE VE LA IMG DE LA INSIGNIA SI METO UNA URL Y XK NO SE VE SI LA GUARDO DONDE "IMG"*/

    const mostrarInsigniasRecibidas = iterableResponse.map(function(insignia){
        return(
            <>
                <div class="mr-center ml-center p-5 col-sm-3 col-md-3">
                    <img alt="imagen_insignia" class="img-circle img-no-padding img-responsive" src="https://demos.creative-tim.com/paper-kit-react/static/media/kaci-baum-2.e06d84cb.jpg"/>
                    <blockquote className="blockquote"><h6 class="text-center">{insignia.nombre_insignia}</h6></blockquote>               
                    <div className="nombreInsigniaYBtnCentrar">
                        <Link to={"/halloffame/who"} className="btnNumeroInsignia">
                            <Button className="btn-round btn-icon" color="primary"><h6>{insignia.insignias_recibidas}</h6></Button>
                        </Link>                
                    </div>
                </div>
            </>
        );
    });


    return(
        <>
            <div className="mostrarInsignias">
                {mostrarInsigniasRecibidas}
            </div>
        </>
    );
}

export default ContactoDetalleInsigniasAsignadas;


    // const mostrarInsigniasRecibidas = insigniasRecibidas.map(function(insignia){
    //     return(
    //         <> 
    //         <div className="mostrarInsignias">
    //             <div class="mr-center ml-center p-5 col-sm-3 col-md-3">
    //                 <img alt="imagen_usuario" class="img-circle img-no-padding img-responsive" src="./img/kaci-baum-2.jpg"/>
    //                 <blockquote className="blockquote"><h6 class="text-center">Mejor Madre</h6></blockquote>               
    //                 <div className="nombreInsigniaYBtnCentrar">
    //                     <Link to={"/contacts"} className="btnNumeroInsignia">
    //                         <Button className="btn-round btn-icon" color="primary"><h6>{insignia.insignias_recibidas}</h6></Button>
    //                     </Link>
    //                 </div>
    //             </div>

    //             <div class="mr-center ml-center p-5 col-sm-3 col-md-3">
    //                 <img alt="imagen_usuario" class="img-circle img-no-padding img-responsive" src="./img/kaci-baum-2.jpg"/>
    //                 <blockquote className="blockquote"><h6 class="text-center">Mejor Padre</h6></blockquote>               
    //                 <div className="nombreInsigniaYBtnCentrar">
    //                     <Link to={"/contacts"} className="btnNumeroInsignia">
    //                         <Button className="btn-round btn-icon" color="primary"><h6>3</h6></Button>
    //                     </Link>                
    //                 </div>
    //             </div>

    //             <div class="mr-center ml-center p-5 col-sm-2 col-md-3">
    //                 <img alt="imagen_usuario" class="img-circle img-no-padding img-responsive" src="./img/kaci-baum-2.jpg"/>
    //                 <blockquote className="blockquote"><h6 class="text-center">Best Friend</h6></blockquote>               
    //                 <div className="nombreInsigniaYBtnCentrar">
    //                     <Link to={"/contacts"} className="btnNumeroInsignia">
    //                         <Button className="btn-round btn-icon" color="primary"><h6>3</h6></Button>
    //                     </Link>                
    //                 </div>
    //             </div>

    //             <div class="mr-center ml-center p-5 col-sm-3 col-md-3">
    //                 <img alt="imagen_usuario" class="img-circle img-no-padding img-responsive" src="./img/kaci-baum-2.jpg"/>
    //                 <blockquote className="blockquote"><h6 class="text-center">Te Quiero</h6></blockquote>               
    //                 <div className="nombreInsigniaYBtnCentrar">
    //                     <Link to={"/contacts"} className="btnNumeroInsignia">
    //                         <Button className="btn-round btn-icon" color="primary"><h6>3</h6></Button>
    //                     </Link>                
    //                 </div>
    //             </div>

    //             <div class="mr-center ml-center p-5 col-sm-3 col-md-3">
    //                 <img alt="imagen_usuario" class="img-circle img-no-padding img-responsive" src="./img/kaci-baum-2.jpg"/>
    //                 <blockquote className="blockquote"><h6 class="text-center">Cómo de la familia</h6></blockquote>               
    //                 <div className="nombreInsigniaYBtnCentrar">
    //                     <Link to={"/contacts"} className="btnNumeroInsignia">
    //                         <Button className="btn-round btn-icon" color="primary"><h6>3</h6></Button>
    //                     </Link>               
    //                 </div>
    //             </div>

    //             <div class="mr-center ml-center p-5 col-sm-3 col-md-3">
    //                 <img alt="imagen_usuario" class="img-circle img-no-padding img-responsive" src="./img/kaci-baum-2.jpg"/>
    //                 <blockquote className="blockquote"><h6 class="text-center">Detallista</h6></blockquote>               
    //                 <div className="nombreInsigniaYBtnCentrar">
    //                     <Link to={"/contacts"} className="btnNumeroInsignia">
    //                         <Button className="btn-round btn-icon" color="primary"><h6>3</h6></Button>
    //                     </Link>                
    //                 </div>
    //             </div>

    //             <div class="mr-center ml-center p-5 col-sm-3 col-md-3">
    //                 <img alt="imagen_usuario" class="img-circle img-no-padding img-responsive" src="./img/kaci-baum-2.jpg"/>
    //                 <blockquote className="blockquote"><h6 class="text-center">Luchador</h6></blockquote>               
    //                 <div className="nombreInsigniaYBtnCentrar">
    //                     <Link to={"/contacts"} className="btnNumeroInsignia">
    //                         <Button className="btn-round btn-icon" color="primary"><h6>3</h6></Button>
    //                     </Link>                
    //                 </div>
    //             </div>

    //             <div class="mr-center ml-center p-5 col-sm-3 col-md-3">
    //                 <img alt="imagen_usuario" class="img-circle img-no-padding img-responsive" src="./img/kaci-baum-2.jpg"/>
    //                 <blockquote className="blockquote"><h6 class="text-center">Optimista</h6></blockquote>               
    //                 <div className="nombreInsigniaYBtnCentrar">
    //                     <Link to={"/contacts"} className="btnNumeroInsignia">
    //                         <Button className="btn-round btn-icon" color="primary"><h6>3</h6></Button>
    //                     </Link>                
    //                 </div>
    //             </div>
    
    //             <div class="mr-center ml-center p-5 col-sm-3 col-md-3">
    //                 <img alt="imagen_usuario" class="img-circle img-no-padding img-responsive" src="./img/kaci-baum-2.jpg"/>
    //                 <blockquote className="blockquote"><h6 class="text-center">Artista</h6></blockquote>               
    //                 <div className="nombreInsigniaYBtnCentrar">
    //                     <Link to={"/contacts"} className="btnNumeroInsignia">
    //                         <Button className="btn-round btn-icon" color="primary"><h6>3</h6></Button>
    //                     </Link>                
    //                 </div>
    //             </div>
        
    //             <div class="mr-center ml-center p-5 col-sm-3 col-md-3">
    //                 <img alt="imagen_usuario" class="img-circle img-no-padding img-responsive" src="./img/kaci-baum-2.jpg"/>
    //                 <blockquote className="blockquote"><h6 class="text-center">En plena forma</h6></blockquote>               
    //                 <div className="nombreInsigniaYBtnCentrar">
    //                     <Link to={"/contacts"} className="btnNumeroInsignia">
    //                         <Button className="btn-round btn-icon" color="primary"><h6>3</h6></Button>
    //                     </Link>                
    //                 </div>
    //             </div>
        
    //             <div class="mr-center ml-center p-5 col-sm-3 col-md-3">
    //                 <img alt="imagen_usuario" class="img-circle img-no-padding img-responsive" src="./img/kaci-baum-2.jpg"/>
    //                 <blockquote className="blockquote"><h6 class="text-center">Al más trabajador</h6></blockquote>               
    //                 <div className="nombreInsigniaYBtnCentrar">
    //                     <Link to={"/contacts"} className="btnNumeroInsignia">
    //                         <Button className="btn-round btn-icon" color="primary"><h6>3</h6></Button>
    //                     </Link>                
    //                 </div>
    //             </div>
        
    //             <div class="mr-center ml-center p-5 col-sm-3 col-md-3">
    //                 <img alt="imagen_usuario" class="img-circle img-no-padding img-responsive" src="./img/kaci-baum-2.jpg"/>
    //                 <blockquote className="blockquote"><h6 class="text-center">Top</h6></blockquote>               
    //                 <div className="nombreInsigniaYBtnCentrar">
    //                     <Link to={"/contacts"} className="btnNumeroInsignia">
    //                         <Button className="btn-round btn-icon" color="primary"><h6>3</h6></Button>
    //                     </Link>                
    //                 </div>
    //             </div>
    //         </div>
    //         </>
    //     );
    // });
