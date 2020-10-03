let contrasena = window.prompt("Escribe la contraseña");

if (contrasena.length >= 8) {
  let contrasenaValida = false;
  for (let i = 0; i < contrasena.length; i++) {
    if (isNumber(contrasena[i]) === true) {
      contrasenaValida = true;
    }
  }
  if (contrasenaValida === true) {
    if( isUpperCase(contrasena.substring(0,1))){
    }else{
      document.getElementById("div1").innerHTML=`<p>La contraseña debe empezar por mayúscula</p>`
    }
  }else{
    document.getElementById("div1").innerHTML=`<p>La contraseña debe contener al menos un número</p>`
  }
}else{
  document.getElementById("div1").innerHTML=`<p>La contraseña introducida tiene menos de 8 caracteres</p>`
}

function isNumber(n) {
  return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
} 

function isUpperCase(str) { 
  return str === str.toUpperCase(); 
}