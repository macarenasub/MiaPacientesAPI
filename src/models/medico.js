const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Medico = new Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  usuario: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("Medicos", Medico);
