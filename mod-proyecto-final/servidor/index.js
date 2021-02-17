const express=require("express");
// const MongoClient=require("mongodb").MongoClient;
const cors=require("cors");

const { MongoClient, ObjectID } = require('mongodb');

const app=express();
app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());/*Nos permite acceder al body de la petición */


let db;

app.use(cors());


/*Esto te conecta a la base de datos*/
MongoClient.connect("mongodb://localhost:27017", function(err,client){
    if(err!==null){
        console.log(err);
    }else{
        db=client.db("insigniasbd"); /*Poner aqui el nombre de la base de datos*/
    }
});


/*COMIENZO: PASSPORT*/
const passport = require("passport");/*Para usar "Passport", que maneja los inicios se sesión del usuario */

const session = require("express-session");/*Importar "session" y le decimos que nuestra "app" lo use */
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());/*Inicializar passport*/
app.use(passport.session());/*Usar sesion de usuario*/
app.use(express.json());
app.use(express.static("public"));

const LocalStrategy = require("passport-local").Strategy;

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",/* lo que se va a usar para iniciar sesión*/
    },
    function (email, password, done) {
      db.collection("users")
        .find({ email: email })/*En la colección "users" de la base de datos va a buscar un email, que sea igual al email*/
        .toArray(function (err, users) { /*Lo pasa a un array*/
          if (users.length === 0) {
            done(null, false);
          }
          const user = users[0]; 
          if (password === user.password) {/*Comprueba si la contraseña que nos ha llegado es la misma que tiene el usuario en la base de datos*/ /*El BCRYPT (para cifrar contraseñas, habría que usarlo dentro de esto)*/
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
    }
  )
);

passport.serializeUser(function (user, done) {
    done(null, user.email);
  });
  
passport.deserializeUser(function (id, done) {/*El id sería el email, xk es lo que hemos puesto para iniciar sesión */
    db.collection("users")
      .find({ email: id })
      .toArray(function (err, users) {
        if (users.length === 0) {
          done(null, null);
        }
        done(null, users[0]);
      });
});


app.post( /*Crear un post, para hacer la petición al login. Recibe el "passport authenticate"*/
    "/api/login",
    passport.authenticate("local", {/*Se pone local xk estamos usando nuestra base de datos*/
      successRedirect: "/api",
      failureRedirect: "/api/fail", /*Si la sesion es fallida, nos lleva a la ruta de abajo*/
    })
);


app.get("/api/fail", function (req, res) { /*Si la sesion es fallida, nos lleva a esta ruta*/
    res.status(401).send({ mensaje: "denegado" });
});


app.get("/api", function (req, res) { /*Si la sesion es exitosa, nos lleva a esta ruta*/
    if (req.isAuthenticated() === false) {
      return res.status(401).send({ mensaje: "necesitas loguearte" });
    }
    res.send({ mensaje: "logueado correctamente", usuario:req.user });
});


app.post("/api/register", function (req, res) {
    db.collection("users").insertOne(
      {
        name: req.body.nombre,
        email: req.body.email,
        password: req.body.password,
      },
      function (err, datos) {
        if (err !== null) {
          res.send(err);
        } else {
          res.send({ mensaje: "Registrado" });
        }
      }
    );
});


app.get("/api/user", function (req, res) {/*Esta ruta nos devuelve el nombre de usuario, para tenerlo visible en la parte front */
    if (req.isAuthenticated()) {
      return res.send({ nombre: req.user.name });
    }
    res.send({ nombre: "No logueado" });
});

/*FIN: PASSPORT*/





/* V3: ON */


/* 0: Hall of fame */
/* Uso: Desde hall of fame: se llama una vez y te devuelve todos los objetos diferentes. */
app.get("/halloffame3/:usuario", function(req, res){
  const emailUser=req.params.usuario;
  
  db.collection("users").find({email: emailUser}).toArray(function(err, datos){
      if(err!==null){
          res.send(err);
      }else{
        res.send(datos[0].insignias_recibidas);

/* Devuelve:
{
    "mejor_madre": {
        "insignias_recibidas": 0,
        "contactos_recibidos": []
    },
    "mejor_padre": {
        "insignias_recibidas": 0,
        "contactos_recibidos": []
    },
    "best_friend": {
        "insignias_recibidas": 0,
        "contactos_asignados": []
    },
    etc
*/
          
      }
  });
});




/* 2: Contactos que te han dado una insignia en concreto: al hacer click en una insignia en hall of fame */
/* GET: Insignias recibidas: En una insignia en concreto, coges el array de los que te han dado y pintas los usuarios */
/* Este método te devuelve lista de contactos que te han dado a una insignia en concreto*/

app.get("/receivedbadgets3/who/:usuario/:nombreinsignia", function(req, res){
  const emailUser=req.params.usuario;
  const nombreInsignia=req.params.nombreinsignia;

  db.collection("users").find({email: emailUser}).toArray(function(err, datos){
      if(err!==null){
          res.send(err);
      }else{
        res.send(datos[0].insignias_recibidas[nombreInsignia].contactos_recibidos);

/* Devuelve:
{
   [
    {
        "nombre": "Ama",
        "apellido": "Nirea",
        "email": "ama@mail.com",
        "descripcion": "Nire ama",
        "edad": 58,
        "imagen": ""
    },
    {
        "nombre": "Aita",
        "apellido": "Nirea",
        "email": "aita@mail.com",
        "descripcion": "Nire aita",
        "edad": 60,
        "imagen": ""
    }
]
*/


      }
  });
});




// /* Contactos */ /*IMCOMPLETA*/
// /* GET: Devuelve array con los emails de los contactos */
// /* Este método te devuelve un array de contactos. Estado: aceptado, pendiente (usuario pendiente de aceptar la solicitud), enviado (solicitud enviada por el usuario). */
// app.get("/contacts3/:usuario/:estado", function(req, res){
//   const emailUser=req.params.usuario;
//   const estado=req.params.estado;
//   db.collection("users").find({email: emailUser, "contactos.estado": estado}).toArray(function(err, datos){
//       if(err!==null){
//           res.send(err);
//       }else{
//         console.log(datos[0])
//         if(datos[0]===undefined)
//         {
//           res.send("[]");
//         }
//         else
//         {
//           res.send(datos[0].contactos);
//         }
        
//      }
//   });
// });



/* Contactos */ /*CORREGIDA */
/*SOLUCIÓN: La he sacado de esta web: https://studio3t.com/knowledge-base/articles/filter-elements-from-mongodb-arrays/*/
/* GET: Devuelve array con los emails de los contactos */
/* Este método te devuelve un array de contactos. Estado: aceptado, pendiente, enviado. */
app.get("/contacts3/:usuario/:estado", function(req, res){
  const emailUser=req.params.usuario;
  const estado=req.params.estado;
  //db.collection("users").find({email: emailUser, "contactos.estado": estado}).toArray(function(err, datos){
    //db.test.find({list: {$elemMatch: {a: 1}}}, {'list.$': 1})
    //"contactos.$.estado"
    //db.collection("users").find({email: emailUser, contactos: {$elemMatch: {estado: "aceptado"}}},{"contactos.$": "aceptado"} ).toArray(function(err, datos){
      //db.collection("users").aggregate([ { $match: {email: emailUser}}, { $project: {contactos: {$filter: { input: "$contactos", as: "item", cond: {$and: ["$$item.estado", "aceptado"]} }} }} ]).toArray(function(err, datos){
        db.collection("users").aggregate([
          {
             "$match" : {
              email: emailUser,
                 "contactos" : {
                    "$elemMatch" : {
                       "$and" : [
                          { "estado" : estado }
                       ]
                    }
                 },
             }
          },
          {
             "$project" : {
                 "contactos" : {
                    "$filter" : {
                       "input" : "$contactos",
                       "as" : "contactos",
                       "cond" : {
                          "$and" : [
                             { "$eq" : [ "$$contactos.estado", estado ] }
                          ]
                       }
                    }
                 }
             }
          }
          ]).toArray(function(err, datos){
      if(err!==null){
          res.send(err);
      }else{

        if(datos[0]===undefined)
        {
          res.send("[]");
        }
        else
        {
          res.send(datos[0].contactos);
        }
        
     }
  });
});




/*CONTACTO > INFORMACION DE CONTACTO > Para mostrar qué insignias le he dado (o no) a ese contacto del que estoy viendo toda la información*/
/* 3: Insignias enviadas a un contacto: saber qué insignias le has asignado a ese contacto */
/* POr cada insignia, hay que hacer una llamada con el nombre de la insignia. Si se la has asignado te devulve objeto con valor, en caso contratio, array vacio */
app.get("/sentbadgets3/who/given/:usuario/:nombreinsignia/:contacto", function(req, res){
  const emailUser=req.params.usuario;
  const nombreInsignia=req.params.nombreinsignia;
  const emailContacto = req.params.contacto;
  const insignia="insignias_asignadas." + nombreInsignia + ".contactos_asignados.email";

  db.collection("users").find({email: emailUser, [insignia]: emailContacto  }).toArray(function(err, datos){
      if(err!==null){
          res.send(err);
      }else{
        //si le he asignado esa medalla, devuelve datos, en caso contrario, vacio!!!!
        res.send(datos);
      }
  });
});




/* Insignias Asignadas */
/* Insignias asignadas: te trae todo lo que has asignado */
app.get("/sentbadgets3/:usuario", function(req, res){
  const emailUser=req.params.usuario;
  
  db.collection("users").find({email: emailUser}).toArray(function(err, datos){
      if(err!==null){
          res.send(err);
      }else{
        res.send(datos[0].insignias_asignadas);

/* Devuelve:
{
    "mejor_madre": {
        "insignias_restantes": 0,
        "contactos_asignados": [
            {
                "nombre": "Ama",
                "apellido": "Nirea",
                "email": "ama@mail.com",
                "descripcion": "Nire ama",
                "edad": 58,
                "imagen": ""
            }
        ]
    },
    "mejor_padre": {
        "insignias_restantes": 0,
        "contactos_asignados": [
            {
                "nombre": "Aita",
                "apellido": "Nirea",
                "email": "aita@mail.com",
                "descripcion": "Nire aita",
                "edad": 60,
                "imagen": ""
            }
        ]
    },
    "best_friend": {
        "insignias_restantes": 5,
        "contactos_asignados": []
    },
    etc
*/
          
      }
  });
});



/*INSIGNIAS ASIGNADAS > Muestra a quién(es) le he asignado esa insignia*/
/* Contactos asignados a insignia */
/* te trae todos los contactos  que has asignado a una insignia que has asignado  */
app.get("/sentbadgets3/who/given/:usuario/:nombreinsignia", function(req, res){
  const emailUser=req.params.usuario;
  const nombreInsignia=req.params.nombreinsignia;
  db.collection("users").find({email: emailUser }).toArray(function(err, datos){
      if(err!==null){
          res.send(err);
      }else{
        
        res.send(datos[0].insignias_asignadas[nombreInsignia].contactos_asignados);

/* Devuelve:
[
    {
        "nombre": "Aita",
        "apellido": "Nirea",
        "email": "aita@mail.com",
        "descripcion": "Nire aita",
        "edad": 60,
        "imagen": ""
    },
    etc
]
*/
      }
  });
});




/* "CONTACTOS" > Añade insignia(s) a un contacto en concreto. 
                 Le añade la insignia al contacto y a ti como usuario te la resta, y asi tener una menos que otorgar */
app.put("/contacts/contactbadges/addbadge", function (req, res) {

//1.- Al usuario logueado:
//En insignias asignadas:
const emailUser=req.body.usuario;
const emailContact=req.body.contacto;
const nombreInsignia=req.body.nombreInsignia;
//Cojo los datos del contacto
db.collection("users").find({email:emailContact}).toArray(function(err, datos){
  if(err!==null){
      res.send(err);
  }else{
    //tengo los datos del contacto
      const contactInsignia={
        nombre: datos[0].nombre,
        apellido: datos[0].apellido,
        email: emailContact,
        descripcion:datos[0].descripcion,
        edad:datos[0].edad,
        imagen:datos[0].imagen
      };
      //Enchufo el contacto en mis enviadas
      const asignar="insignias_asignadas." + nombreInsignia + ".contactos_asignados";
      const asignarRestantes="insignias_asignadas." + nombreInsignia + ".insignias_restantes";
      db.collection("users").updateOne({email:emailUser},{$push: { [asignar]: contactInsignia },$inc:{[asignarRestantes]:-1} },function(err, datos){
          if (err !== null) {
            res.send(err);
          } else {
                //Le enchufo loso datos mios a él
                db.collection("users").find({email:emailUser}).toArray(function(err, datos1){
                  if(err!==null){
                      res.send(err);
                  }else{
                    //tengo los datos del contacto
                      const contactUser={
                        nombre: datos1[0].nombre,
                        apellido: datos1[0].apellido,
                        email: emailUser,
                        descripcion:datos1[0].descripcion,
                        edad:datos1[0].edad,
                        imagen:datos1[0].imagen
                      };
                      console.log(contactUser);
                      const asignarAContacto="insignias_recibidas." + nombreInsignia + ".contactos_recibidos";
                      const asignarRestantesAContacto="insignias_recibidas." + nombreInsignia + ".insignias_recibidas";
                      db.collection("users").updateOne({email:emailContact},{$push: { [asignarAContacto]: contactUser },$inc:{[asignarRestantesAContacto]:1} },function(err, datos){
                        if (err !== null) {
                          res.send(err);
                        } else {
                          res.send(datos);
                        }
                      });
                    }
                  });
          }
      });
  }
});
});




/* "CONTACTOS" > Elimina insignia(s) a un contacto en concreto. 
                 Le quita la insignia al contacto y a ti como usuario te la suma, para que la vuelvas a tener disponible. */
/*INSIGNIAS ASIGNADAS > Elimina una insignia en concreto a un contacto en concreto.
                        Se accede pinchando en la insignia, ves a quienes se la has asignado y cuando te lo muestra, te la da opción de quitársela.*/
                        app.put("/contacts/contactbadges/deletebadge", function (req, res) {
                          const emailUser=req.body.usuario;
                          const emailContact=req.body.contacto;
                          const nombreInsignia=req.body.nombreInsignia;
                        
                          const asignar="insignias_asignadas." + nombreInsignia + ".contactos_asignados";
                          const asignarRestantes="insignias_asignadas." + nombreInsignia + ".insignias_restantes";
                        
                          db.collection("users").updateOne({email:emailUser},{$pull: { [asignar]: {email:emailContact} },$inc:{[asignarRestantes]:1} },function(err, datos){
                              if (err !== null) {
                                res.send(err);
                              } else {
                                const asignarAContacto="insignias_recibidas." + nombreInsignia + ".contactos_recibidos";
                                const asignarRestantesAContacto="insignias_recibidas." + nombreInsignia + ".insignias_recibidas";
                                db.collection("users").updateOne({email:emailContact},{$pull: { [asignarAContacto]: {email:emailUser} },$inc:{[asignarRestantesAContacto]:-1} },function(err, datos){
                                  if (err !== null) {
                                    res.send(err);
                                  } else {
                                    res.send(datos);
                                  }
                                });
                              }
                          });
                        });     





/* "CONTACTOS" > Añade petición contacto. */
app.put("/contact/add", function (req, res) {
  const emailUser=req.body.usuario;
  const emailContact=req.body.contacto;

  console.log(emailUser);
  console.log(emailContact);
  
  //Buscar contacto y añadirlo a mis contactos como enviado
  db.collection("users").find({email:emailUser}).toArray(function(err, datos){
    if(err!==null){
        res.send(err);
    }else{
      //tengo los datos del contacto
        const contactUser={
          nombre: datos[0].nombre,
          apellido: datos[0].apellido,
          email: emailUser,
          descripcion:datos[0].descripcion,
          edad:datos[0].edad,
          imagen:datos[0].imagen,
          estado:"pendiente"
        };
  
        /*Le insertas al contacto que has añadido un registro como pendiente, con tus datos!!! */
        db.collection("users").updateOne({email:emailContact},{$push: { contactos: contactUser }},function(err, datos){
          if (err !== null) {
            res.send(err);
          } else {
            db.collection("users").find({email:emailContact}).toArray(function(err, datos1){
              if(err!==null){
                  res.send(err);
              }else{
                //tengo los datos del contacto
                  const contactContacto={
                    nombre: datos1[0].nombre,
                    apellido: datos1[0].apellido,
                    email: emailContact,
                    descripcion:datos1[0].descripcion,
                    edad:datos1[0].edad,
                    imagen:datos1[0].imagen,
                    estado:"enviado"
                  };
  
                  db.collection("users").updateOne({email:emailUser},{$push: { contactos: contactContacto }},function(err, datos){
                    if (err !== null) {
                      res.send(err);
                    } else {
                      res.send(datos);
                    }
                  });
                }
              });
          }
        });
      }
    });
  });





/* "CONTACTOS" > Elimina contacto.*/
app.put("/contact/delete", function (req, res) {
  const emailUser=req.body.usuario;
  const emailContact=req.body.contacto;
  db.collection("users").updateOne({email:emailUser},{$pull: { contactos: {email:emailContact} }},function(err, datos){
      if (err !== null) {
        res.send(err);
      } else {
        db.collection("users").updateOne({email:emailContact},{$pull: { contactos: {email:emailUser} }},function(err, datos){
          if (err !== null) {
            res.send(err);
          } else {
        res.send({mensaje:"Contacto eliminado correctamente"});
      }
    });
      }
  });
});






/* "CONTACTOS" > aceptar contacto */
app.put("/contact/accept", function (req, res) {
  const emailUser=req.body.usuario;
  const emailContact=req.body.contacto;

  /*Upodatea a aceptado */
  db.collection("users").findOneAndUpdate({email:emailUser,"contactos.email":emailContact},{$set:{"contactos.$.estado": "aceptado" }},function(err, datos){
      if (err !== null) {
        res.send(err);
      } else {
        /*Inserta en el otro*/
        db.collection("users").findOneAndUpdate({email:emailContact,"contactos.email":emailUser},{$set:{"contactos.$.estado": "aceptado" }},function(err, datos){
          if (err !== null) {
            res.send(err);
          } else {
            res.send(datos);
          }
        });
      }
  });
});





/*....*/
/*CONTACTOS > Muestra la información detallada del contacto */
app.get("/contact/detail/:email", function(req, res){
  const emailUser=req.params.email;

  db.collection("users").find({email:emailUser}).toArray(function(err, datos){
      if(err!==null){
          res.send(err);
      }else{
          res.send(datos);
      }
  });
});


/* "CONTACTOS" > Este link ("Añadir contacto""), aparece al lado de mi lista de contactos. 
                 Estas 2 rutas te permiten buscar por nombre y apellidos a un contacto, para poder encontrarle y así poder añadirle como amigo.*/
                 app.get("/contacts/findcontactname/:nombre", function(req,res){
                  const name=req.params.nombre;
                
                  db.collection("users").find({nombre:new RegExp(name, 'i')}).toArray(function(err, datos){
                    if(err!==null){
                      res.send(err);
                    }else{
                      res.send(datos);
                    }
                  });
                });
                
                
                app.get("/contacts/findcontactsurname/:apellido", function(req,res){
                  const surname=req.params.apellido;
                
                  db.collection("users").find({apellido:new RegExp(surname, 'i')}).toArray(function(err, datos){
                    if(err!==null){
                      res.send(err);
                    }else{
                      res.send(datos);
                    }
                  });
                });
                

app.listen(3001);