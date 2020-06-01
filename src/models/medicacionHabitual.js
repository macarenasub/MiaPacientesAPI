const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MedicacionHabitual = new Schema({
  nombre: {type: String, required: true},
  dosis: {type: String, required: true}
});

module.exports = mongoose.model("MedicacionHabitual", MedicacionHabitual);