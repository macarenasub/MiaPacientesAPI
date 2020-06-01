const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Paciente = new Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  fechaNacimiento: {type: Date},
  obraSocial: {type: String},
  plan: {type: String},
  numAfiliado: {type: String},
  telefono: {type: String},
  antecedentes: {type: [Number]},
  medicacionHabitual: {type: [Number]},
  alergias: {type: [Number]},
  cirugias: {type: [Number]},
  listaEvoluciones: {type: [Number]},
  listaTurnos: {type: [Number]}
});

module.exports = mongoose.model("Pacientes", Paciente);
