const express = require("express");
const app = express();
const mongodb = require("mongodb");
let MongoClient = mongodb.MongoClient;

app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

let db;

MongoClient.connect("mongodb://localhost:27017", function (err, client){
  if (err !== null) {
    console.log(err);
  } else {
    db=client.db("restaurantedb");
  }
});


app.get("/api/menus", function(req, res){
    db.collection("menus").find().toArray(function(err, datos){
        if(err!==null){
            res.send(err);
        }else{
            res.send(datos);
        }
    });
});


app.post("/api/nuevoMenu", function(req, res){
    const menu={
        numero: req.body.numero,
        primero: req.body.primero,
        segundo: req.body.segundo,
        postre: req.body.postre,
        precio: req.body.precio
    };

    db.collection("menus").insertOne(menu, function (err, datos){
        if (err !== null) {
          res.send(err);
        }else{
          res.send(datos);
        }
    });
});



app.put("/api/editarMenu/", function(req, res){
    let menuEditar={
        numero: req.body.numero,
        primero: req.body.primero,
        segundo: req.body.segundo,
        postre: req.body.postre,
        precio: req.body.precio
    };

    db.collection("menus").updateOne({numero: menuEditar.numero},{$set: {primero: menuEditar.primero, segundo: menuEditar.segundo, postre: menuEditar.postre, precio: menuEditar.precio}},function (err, datos){
        if (err !== null){
          res.send(err);
        }else{
          res.send(datos);
        }
      }
    );
});



app.delete("/api/borrarMenu",function(req, res){
    const menuBorrar=req.body.numero;

    db.collection("menus").deleteOne({numero: menuBorrar}, function(err, datos){
        if(err!==null){
            res.send(err);
        }else{
            res.send(datos);
        }
    });
  });



app.listen(3000);