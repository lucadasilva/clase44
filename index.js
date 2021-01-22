const express = require("express");

const app = express();

app.use(express.json());

const rateLimit = require("express-rate-limit");
const { send } = require("process");

const limit = rateLimit({
  windowMs: 1000 * 60 * 60,
  max: 5,
});

class User {
  constructor(email, password, nombre, apellido, edad) {
    this.email = email;
    this.password = password;
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
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

app.post("/signup", function (req, res) {
  let newUser = new User();
  newUser.email = req.body.email;
  newUser.password = req.body.password;
  newUser.nombre = req.body.nombre;
  newUser.apellido = req.body.apellido;
  newUser.edad = req.body.edad;

  registros.push(newUser);
  console.log(registros);
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
      res.send("bien ahi");
    } else {
      res.send("mal ahi");
    }
  }
});
