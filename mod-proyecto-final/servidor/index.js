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
          if (password === user.password) {/*Comprueba si la contraseña que nos ha llegado es la misma que tiene el usuario en la base de datos*/ /*El BCRYPT (para cifrar contraseñas), habría que usarlo dentro de esto)*/
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
    res.send({ mensaje: "logueado correctamente" });
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


/*Esto te conecta a la base de datos*/
MongoClient.connect("mongodb://localhost:27017", function(err,client){
    if(err!==null){
        console.log(err);
    }else{
        db=client.db("insigniasbd"); /*Poner aqui el nombre de la base de datos*/
    }
});



/* "HALL OF FAME" > Es la "home" de la zona del usuario. Muestra todas las insignias que me han dado*/
app.get("/halloffame", function(req, res){
  const emailContact=req.body.contacto;
  /*ANDER: (TERMINARLA) hay que hacer la suma de cada insignia, para poder mostrar unicamente el numero total de validaciones que he tenido en cada insignia*/
  db.collection("contacts").find({contacto:emailContact, $or:[{mejor_madre:1},{mejor_padre:1},{best_friend:1},{te_quiero:1},{como_de_la_familia:1},{detallista:1},{luchador:1},{optimista:1},{artista:1},{en_plena_forma:1},{al_mas_trabajador:1},{top:1}]}).toArray(function(err, datos){
      if(err!==null){
          res.send(err);
      }else{
          res.send(datos);
      }
  });
});



/* "HALL OF FAME" > Muestra qué contactos son los que me han dado en cada insignia*/
app.get("/halloffame/who", function(req, res){
  const emailContact=req.body.contacto;
  const insigniaContact=req.body.insignia;
  const nombreInsignia=req.body.nombreinsignia;

  db.collection("contacts").find({contacto:emailContact,[nombreInsignia]:insigniaContact}).toArray(function(err, datos){
      if(err!==null){
          res.send(err);
      }else{
          res.send(datos);
      }
  });
});



/* "CONTACTOS" > Muestra todos los contactos que tengo*/
app.get("/contacts", function(req, res){
  const emailUser=req.body.usuario;

  db.collection("contacts").find({usuario:emailUser, estado:"aceptado"}).toArray(function(err, datos){
      if(err!==null){
          res.send(err);
      }else{
          res.send(datos);
      }
  });
});



/* "CONTACTOS" > Este link ("Asignar insignia"), aparece debajo del nombre de mi contacto. 
                 Esta ruta muestra todas las insignias que yo le he dado (o no) a ese contacto*/
app.get("/contacts/contactbadges", function(req, res){
  const emailUser=req.body.usuario;
  const emailContact=req.body.contacto;
  
  db.collection("contacts").find({usuario:emailUser, contacto:emailContact}).toArray(function(err, datos){
      if(err!==null){
          res.send(err);
      }else{
          res.send(datos);
      }
  });
});



/* "CONTACTOS" > Añade insignia(s) a un contacto en concreto. 
                 Le añade la insignia al contacto y a ti como usuario te la resta, y asi tener una menos que otorgar */
app.put("/contacts/contactbadges/addbadge", function (req, res) {
  const emailUser=req.body.usuario;
  const emailContact=req.body.contacto;
  const nombreInsignia=req.body.nombreinsignia;

  db.collection("contacts").updateOne({usuario:emailUser, contacto:emailContact},{$set:{[nombreInsignia]:1}},function(err, datos){
      if (err !== null) {
        res.send(err);
      } else {
        db.collection("users").updateOne({email: emailUser},{$inc:{[nombreInsignia]:-1}},function(err, datos){
          if (err !== null) {
            res.send(err);
          } else {
            res.send(datos);
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
  const nombreInsignia=req.body.nombreinsignia;

  db.collection("contacts").updateOne({usuario:emailUser, contacto:emailContact},{$set:{[nombreInsignia]:0}},function(err, datos){
      if (err !== null) {
        res.send(err);
      } else {
        db.collection("users").updateOne({email: emailUser},{$inc:{[nombreInsignia]:+1}},function(err, datos){
          if (err !== null) {
            res.send(err);
          } else {
            res.send(datos);
          }
        });
      }
  });
});


/* "CONTACTOS" > Muestra las insignias que me quedan por asignar. 
                 Esta ruta muestra todo el "objeto" del usuario, luego en el Front tengo que sacar las insignias*/
app.get("/contacts/remainingbadges", function(req, res){
  const emailUser=req.body.email;

  db.collection("users").find({email: emailUser}).toArray(function(err, datos){
      if(err!==null){
          res.send(err);
      }else{
          res.send(datos);
      }
  });
});



/* "CONTACTOS" > Este link ("Eliminar contacto""), aparece debajo del nombre de mi contacto. 
                 Esta ruta elimina al contacto de tu lista de contactos*/
app.delete("/contacts/deletecontact", function(req, res){
  const emailUser=req.body.usuario;
  const emailContact=req.body.contacto;

  db.collection("contacts").deleteOne({usuario:emailUser, contacto:emailContact}, function(err, datos){
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


/* "CONTACTOS" > Añadir un contacto a mi lista de contactos. 
                 Después de hacer la búsqueda (por nombre y/o apellidos) del contacto que quieres añadir, te salen los resultados.
                 Debajo de cada persona que te aparece, va a haber un link de "añadir contacto".
                 En realidad se envia una solicitud de contacto, que tu amigo tiene que aceptar.
                 Esta solicitud, se va a quedar guardada en el apartado donde se muestran las solicitudes que están pendientes de que me acepten como contacto */
app.post("/contacts/addcontact", function (req, res) {
  const emailUser=req.body.usuario;
  const emailContact=req.body.contacto;
  const contact={
    usuario: emailUser,
    contacto: emailContact,
    estado: "pendiente",
    mejor_madre:0,
    mejor_padre:0,
    best_friend:0,
    te_quiero:0,
    como_de_la_familia:0,
    detallista:0,
    luchador:0,
    optimista:0,
    artista:0,
    en_plena_forma:0,
    al_mas_trabajador:0,
    top:0
  };

  db.collection("contacts").insertOne(contact, function (err, datos) {
    if(err!==null){
        res.send(err);
    }else{
        res.send(datos);
    }
  });
});


/* "CONTACTOS" > SOLICITUDES RECIBIDAS > Muestra las solicitudes de contacto que me han enviado y que todavía no he aceptado*/
app.get("/contacts/received", function(req, res){
  const emailUser=req.body.usuario;
  
  db.collection("contacts").find({contacto:emailUser, estado:"pendiente"}).toArray(function(err, datos){
      if(err!==null){
          res.send(err);
        }else{
          res.send(datos);
      }
    });
});


/* "CONTACTOS" > SOLICITUDES RECIBIDAS > ACEPTAR > Esta ruta acepta la solicitud de contacto que yo todavía no había aceptado.
                                                   Y a su vez, me añade como contacto al usuario que me había enviado la solicitud*/
app.post("/contacts/received/accept", function (req, res) {
  const emailUser=req.body.usuario;
  const emailContact=req.body.contacto;
  const contact={
    usuario: emailContact,
    contacto: emailUser,
    estado: "aceptado",
    mejor_madre:0,
    mejor_padre:0,
    best_friend:0,
    te_quiero:0,
    como_de_la_familia:0,
    detallista:0,
    luchador:0,
    optimista:0,
    artista:0,
    en_plena_forma:0,
    al_mas_trabajador:0,
    top:0
  };

  db.collection("contacts").updateOne({usuario: emailContact, contacto: emailUser, estado:"pendiente"},{$set:{estado: "aceptado"}},function(err, datos){
    if(err!==null){
        res.send(err);
    }else{
      db.collection("contacts").insertOne(contact, function (err, datos) {
        if(err!==null){
            res.send(err);
        }else{
            res.send(datos);
        }
      });
    }
  });
});


/* "CONTACTOS" > SOLICITUDES RECIBIDAS > RECHAZAR > Esta ruta rechaza la solicitud de contacto que yo todavía no había aceptado*/
app.delete("/contacts/received/reject", function (req, res) {
  const emailUser=req.body.usuario;
  const emailContact=req.body.contacto;
/*REVISAR: ¿poner alerta de que te han rechazado como contacto? */
  db.collection("contacts").deleteOne({usuario: emailContact, contacto: emailUser},function(err, datos){
    if(err!==null){
        res.send(err);
    }else{
        res.send(datos);
    }
  });
});



/* "CONTACTOS" > SOLICITUDES ENVIADAS > Muestra las solicitudes de contacto que he enviado y que están pendientes de que me acepten*/
app.get("/contacts/sent", function(req, res){
  const emailUser=req.body.usuario;

  db.collection("contacts").find({usuario:emailUser, estado:"pendiente"}).toArray(function(err, datos){
      if(err!==null){
          res.send(err);
      }else{
          res.send(datos);
      }
  });
});


/* "CONTACTOS" > SOLICITUDES ENVIADAS > BORRAR > Elimina la solicitud de contacto que había enviado y que estaba pendiente de aceptar*/
app.delete("/contacts/sent/deleted", function(req, res){
  const emailUser=req.body.usuario;
  const emailContact=req.body.contacto;

  db.collection("contacts").deleteOne({usuario: emailUser, contacto: emailContact},function(err, datos){
      if(err!==null){
          res.send(err);
      }else{
          res.send(datos);
      }
  });
});



/*INSIGNIAS ASIGNADAS > Muestra las 12 insignias que hay y en cada una de ellas, me marca el nº de insignias que he dado.
                        Desde este apartado de "insignias asignadas", tb puedo ver cuantas insignias me quedan por asignar de cada una de ellas.*/
app.get("/assignedbadges", function(req, res){
  const emailUser=req.body.usuario;
  /*ANDER: (TERMINARLA) hay que hacer la suma de cada insignia, para poder mostrar en cada insignia, el numero total de insignias que he dado*/
  db.collection("contacts").find({usuario: emailUser, estado: "aceptado"}).toArray(function(err, datos){
      if(err!==null){
          res.send(err);
      }else{
          res.send(datos);
      }
  });
});



/*INSIGNIAS ASIGNADAS > En cada insignia, muestra a qué contactos en concreto le he dado cada una de ellas.*/
app.get("/assignedbadges/who", function(req, res){
  const emailUser=req.body.usuario;
  const nombreInsignia=req.body.nombreinsignia;

  db.collection("contacts").find({usuario: emailUser, estado: "aceptado", [nombreInsignia]:1}).toArray(function(err, datos){
      if(err!==null){
          res.send(err);
      }else{
          res.send(datos);
      }
  });
});


app.listen(3001);