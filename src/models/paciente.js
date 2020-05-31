const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Paciente = new Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  edad: { type: Number, required: true, unique: true },
});

module.exports = mongoose.model("Pacientes", Paciente);
