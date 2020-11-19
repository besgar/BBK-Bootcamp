function editarReceta(){
    let queryString = window.location.search;
    let urlParams = new URLSearchParams(queryString);
    let idParametro=urlParams.get('id');

    if (idParametro!==null){
        cargarRecetaEditar(idParametro);
}};



function cargarRecetaEditar(id){
    fetch("/recetas/buscarID/" + id).then(function(res){
        return res.json();
    }).then(function(datos){
        document.getElementById("idEditar").innerHTML=datos[0]._id;
        document.getElementById("nombreEditar").value=datos[0].nombre;        
        document.getElementById("peliculaEditar").value=datos[0].pelicula;
        document.getElementById("trailerEditar").value=datos[0].trailer;
        document.getElementById("enlaceEditar").value=datos[0].enlace;
        document.getElementById("tiempoEditar").value=datos[0].tiempo;
        document.getElementById("comensalesEditar").value=datos[0].comensales;
        document.getElementById("dificultadEditar").value=datos[0].dificultad;
        document.getElementById("platoEditar").value=datos[0].plato;
        document.getElementById("usuarioEditar").value=datos[0].usuario;
})};


function guardar(){
    const id=document.getElementById("idEditar").innerHTML;
    const nombre=document.getElementById("nombreEditar").value;
    const pelicula=document.getElementById("peliculaEditar").value.toUpperCase();
    const trailer=document.getElementById("trailerEditar").value;
    const enlace=document.getElementById("enlaceEditar").value;
    const tiempo=document.getElementById("tiempoEditar").value;
    const comensales=parseInt(document.getElementById("comensalesEditar").value);
    const dificultad=document.getElementById("dificultadEditar").value;
    const plato=document.getElementById("platoEditar").value;
    const usuario=document.getElementById("usuarioEditar").value;

    const recetaEditar={
        id,
        nombre,
        pelicula,
        trailer,
        enlace,
        tiempo,
        comensales,
        dificultad,
        plato,
        usuario
    };

    fetch("/recetas/editarReceta/",{
        method:"PUT",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(recetaEditar),
    }).then(function(res){
        return res.json();
    }).then(function(datos){
        console.log(datos);
        window.alert("La receta se ha guardado correctamente");
    });
};