const express = require("express");

const app = express();

app.use(express.json());

const rateLimit = require("express-rate-limit");
const { send } = require("process");

const limit = rateLimit({
  windowMs: 1000 * 60,
  max: 5,
});

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
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
  newUser.username = req.body.username;
  newUser.password = req.body.password;

  registros.push(newUser);

  res.send("registration accomplished");
});

app.post("/login", function (req, res) {
  let newAttempt = {
    username: req.body.username,
    password: req.body.password,
  };
  let indice = registros.findIndex(
    (element) => element.username == newAttempt.username
  );
  if (indice != -1) {
    if (registros[indice].password == newAttempt.password) {
      res.send("bien ahi");
    } else {
      res.send("mal ahi");
    }
  }
});
