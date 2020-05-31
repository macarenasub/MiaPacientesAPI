const { Router } = require("express");
const PacientesController = require("./controller");

const router = Router();

router.get("/", PacientesController.getAll);
router.post("/", PacientesController.create);
router.get("/:id", PacientesController.getById);
router.put("/:id", PacientesController.update);
router.delete("/:id", PacientesController.delete);

module.exports = router;
