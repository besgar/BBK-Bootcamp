const express=require("express");
const MongoClient=require("mongodb").MongoClient;
const cors=require("cors");

const app=express();
app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


let db;

app.use(cors());

/*Esto te conecta a la base de datos*/
MongoClient.connect("mongodb://localhost:27017", function(err,client){
    if(err!==null){
        console.log(err);
    }else{
        db=client.db("recetasdb"); /*Poner aqui el nombre de la base de datos*/
    }
});


/*Esta ruta muestra en la home todas las recetas creadas por todos los usuarios*/
app.get("/recetas/", function(req,res){
    db.collection("recetas").find().toArray(function (err,datos){ /*Se pone entre "" el nombre de la colección. Find() buscará todas las recetas que haya*/
        if(err!==null){
            res.send(err)
        }else{
            res.send(datos)
        }
    }
)});



//Esta ruta muestra en la zona privada del usuario las recetas que él ha creado

app.get("/recetas/usuario", function(req, res){
    db.collection("recetas").find({usuario: "ElenaBG"}).toArray(function(err, datos){
        if(err!==null){
            res.send(err);
        }else{
            res.send(datos);
        }
    });
});




app.get("/recetas/buscarID/:_id", function(req,res){
  const idBuscar=req.params._id;

  db.collection("recetas").find({_id: ObjectID(idBuscar)}).toArray(function(err, datos){
    if (err!== null){
        res.send(err);
      }else{
        res.send(datos);
      }
    }
  );
});



app.get("/recetas/buscardificultad/:dificultad", function(req,res){
  const dificultad=req.params.dificultad;

  db.collection("recetas").find({dificultad: dificultad}).toArray(function(err, datos){
    if (err!== null){
        res.send(err);
      }else{
        res.send(datos);
      }
    }
  );
});




app.get("/recetas/buscarplato/:plato", function(req,res){
  const plato=req.params.plato;

  db.collection("recetas").find({plato:plato}).toArray(function(err, datos){
    if (err!== null){
        res.send(err);
      }else{
        res.send(datos);
      }
    }
  );
});



app.get("/recetas/buscarpalabra/:nombre", function(req,res){
  const palabra=req.params.nombre;

  db.collection("recetas").find({nombre:{$regex:palabra}}).toArray(function(err, datos){
    if (err!== null){
        res.send(err);
      }else{
        res.send(datos);
      }
    }
  );
});



app.post("/recetas/nuevaReceta", function(req, res){
    const receta={
        nombre: req.body.nombre,
        pelicula: req.body.pelicula,
        trailer: req.body.trailer,
        enlace: req.body.enlace,
        tiempo: req.body.tiempo,
        comensales: req.body.comensales,
        dificultad: req.body.dificultad,
        plato: req.body.plato,
        usuario: req.body.usuario
    };

    db.collection("recetas").insertOne(receta, function (err, datos){
        if (err !== null) {
          res.send(err);
        }else{
          res.send(datos);
        }
    });
});


app.listen(3001)