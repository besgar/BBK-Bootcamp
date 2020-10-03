let div1=document.getElementById("div1");

let edad=parseInt(window.prompt("¿Cuántos años tienes?"));

if(edad<18){
    div1.innerHTML=`No eres mayor de edad, no puedes alquilar un coche`;
}else if(edad>=18){
   let carnet=window.prompt("¿Tienes carnet de conducir?");
   if(carnet!=="si"){
       div1.innerHTML=`No tienes carnet de conducir, no puedes alquiler un coche`;
   }else{
       let nombre=window.prompt("Nombre");
       let apellidos=window.prompt("Apellidos");
       let ciudad=window.prompt("Ciudad");
       let dias=parseInt(window.prompt("Días de alquiler"));
       let coste=0;

       if(dias%7===0){
           let numeroSemanas=dias/7;
           coste=numeroSemanas*150;
       }else{
           coste=dias*25;
       }

    
       div1.innerHTML=`<p>Nombre: ${nombre}</p>
        <p>Apellidos: ${apellidos}</p>
        <p>Ciudad: ${ciudad}</p>
        <p>Días de alquiler: ${dias}</p>
        <p>Coste: ${coste} €</p>`;

   }
}