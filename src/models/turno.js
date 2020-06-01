const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Turno = new Schema({
  idMedico: { type: Number, required: true },
  idPaciente: { type: Number, required: true },
  fecha: {type: Date, required: true},
  motivoConsulta: {type: String, required: true}
});

module.exports = mongoose.model("Turnos", Turno);