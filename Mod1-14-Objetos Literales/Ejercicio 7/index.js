let sistemaSolar = {
  mercurio: {
    nombre: "mercurio",
    color: "grey",
    temperatura: 350,
    imagen: "https://www.astromia.com/fotosolar/fotos/planetamercurio.jpg",
  },
  venus: {
    nombre: "venus",
    color: "white",
    temperatura: 460,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/220px-Venus-real_color.jpg",
  },
  tierra: {
    nombre: "tierra",
    color: "purple",
    temperatura: 14,
    imagen:
      "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/5a0ab2a75bafe87f4d3f9a63/acaba-tiempo_0.jpg",
  },
  marte: {
    nombre: "marte",
    color: "red",
    temperatura: -46,
    imagen:
      "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/55365b6b34099b0279c8fb2e/slide-marte.jpg",
  },
  jupiter: {
    nombre: "jupiter",
    color: "brown",
    temperatura: -121,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Jupiter_by_Cassini-Huygens.jpg/280px-Jupiter_by_Cassini-Huygens.jpg",
  },
  saturno: {
    nombre: "saturno",
    color: "yellow",
    temperatura: -130,
    imagen:
      "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/558d2b15010e26221b57df75/saturno.jpg",
  },
  urano: {
    nombre: "urano",
    color: "blue",
    temperatura: -205,
    imagen: "http://www.manzanares.es/v2/sites/paseo/img/urano/urano1.jpg",
  },
  neptuno: {
    nombre: "neptuno",
    color: "blue",
    temperatura: -220,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/280px-Neptune_Full.jpg",
  },
  pluton: {
    nombre: "plutón",
    color: "white",
    temperatura: -229,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Nh-pluto-in-true-color_2x_JPEG.jpg/1200px-Nh-pluto-in-true-color_2x_JPEG.jpg",
  },
};

function mostrarPlanetas() {
  let planeta1 = document.getElementById("planeta1").value;
  let planeta2 = document.getElementById("planeta2").value;
  let planeta3 = document.getElementById("planeta3").value;

  document.getElementById("div1").innerHTML = `
        <div class="card" style="background-color:${sistemaSolar[planeta1].color}">
            <div>
                <img src="${sistemaSolar[planeta1].imagen}" alt=""/>
            </div>
            <div>
                <h1>${sistemaSolar[planeta1].nombre}</h1>
                <p>${sistemaSolar[planeta1].color}</p>
                <p>${sistemaSolar[planeta1].temperatura}</p>
            </div>
        </div>

        <div class="card" style="background-color:${sistemaSolar[planeta2].color}">
            <div>
                <img src="${sistemaSolar[planeta2].imagen}" alt=""/>
            </div>
            <div>
                <h1>${sistemaSolar[planeta2].nombre}</h1>
                <p>${sistemaSolar[planeta2].color}</p>
                <p>${sistemaSolar[planeta2].temperatura}</p>
            </div>
        </div>

        <div class="card" style="background-color:${sistemaSolar[planeta3].color}">
            <div>
                <img src="${sistemaSolar[planeta3].imagen}" alt=""/>
            </div>
            <div>
                <h1>${sistemaSolar[planeta3].nombre}</h1>
                <p>${sistemaSolar[planeta3].color}</p>
                <p>${sistemaSolar[planeta3].temperatura}</p>
            </div>
        </div>
  `;
}
