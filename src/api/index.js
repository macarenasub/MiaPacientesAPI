const { Router } = require("express");

const medicos = require("./medicos/routes");
const pacientes = require("./pacientes/routes");
const router = Router();

router.use("/medicos", medicos);
router.use("/pacientes", pacientes);

module.exports = router;
