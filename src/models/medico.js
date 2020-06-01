const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Medico = new Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  matricula: {type: String, required: true},
  mail: {type: String, required: true},
  usuario: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  calendario: {type: [Number]}
});

module.exports = mongoose.model("Medicos", Medico);
