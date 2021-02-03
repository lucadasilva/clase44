const mongoose = require('./conexion.js');

const user = mongoose.model('user', {
  email: String,
  password: String,
  admin : Boolean
});

module.exports = user;
