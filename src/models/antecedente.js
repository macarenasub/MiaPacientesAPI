const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Antecedente = new Schema({
  descripcion: { type: String, required: true }
});

module.exports = mongoose.model("Antecedentes", Antecedente);