const express = require("express");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const rateLimit = require("express-rate-limit");
const { send } = require("process");

const limit = rateLimit({
  windowMs: 1000 * 60 * 60,
  max: 5000,
});

class User {
  constructor(email, password, nombre, apellido, edad, admin) {
    this.email = email;
    this.password = password;
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.admin = admin;
  }
}

var registros = [];

app.listen(3000, () => {
  console.log("success");
});

app.use(limit);

app.get("/index", function (req, res) {
  res.status(200).send("ok");
});

app.post("/register", function (req, res) {
  let newUser = new User();
  newUser.email = req.body.email;
  newUser.password = req.body.password;
  newUser.nombre = req.body.nombre;
  newUser.apellido = req.body.apellido;
  newUser.edad = req.body.edad;
  newUser.admin = req.body.admin;

  registros.push(newUser);
  res.send("registration accomplished");
});

app.post("/login", function (req, res) {
  let newAttempt = {
    email: req.body.email,
    password: req.body.password,
  };
  let indice = registros.findIndex(
    (element) => element.email == newAttempt.email
  );
  if (indice != -1) {
    if (registros[indice].password == newAttempt.password) {
      var token = jwt.sign({usuario: req.body.email, admin: req.body.admin}, clave, {expiresIn: '5m'})

      res.send(token);
    } else {
      res.status(401).send("usuario incorrecto");
    }
  }
});

var clave = "clave_random"