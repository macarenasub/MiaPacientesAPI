const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Evolucion = new Schema({
  idMedico: { type: Number, required: true },
  idPaciente: { type: Number, required: true },
  fecha: {type: Date, required: true},
  motivoConsulta: {type: String, required: true},
  descripcion: {type: String, required: true}
});

module.exports = mongoose.model("Evoluciones", Evolucion);