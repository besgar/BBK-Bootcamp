import {useEffect, useState} from "react";

function HomeCabecera() {
  // const [boolean, setBoolean] = useState(false)
	
	// const cambiarBoolean = () => {
	// 	setBoolean(!boolean) //cambiamos el valor de boolean por el contrario al que tenga en el momento de llamar a esta función
	// }
	
	// return (
	// 	<div>
	// 		<button onClick={cambiarBoolean}>Cambiar</button>
	// 		{boolean === true ? <p>Hola!</p> : <p>Adiós</p>}
	// 	</div>
	// )
    return (
      <>
        <div className="cabecera">
          ESTO ES LA CABECERA
          <div className="menuHomeCabecera">
            <ul>
              <li>Iniciar sesión</li>
              <li>Registrarse</li>
              <li>Contacto</li>
            </ul>
          </div>
        </div>
      </>
    );
}

export default HomeCabecera;