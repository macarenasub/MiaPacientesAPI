const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Cirugia = new Schema({
  descripcion: { type: String, required: true },
  motivo: { type: String, required: true }
});

module.exports = mongoose.model("Cirugias", Cirugia);