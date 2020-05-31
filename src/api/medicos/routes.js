const { Router } = require("express");
const MedicosController = require("./controller");

const router = Router();

router.get("/", MedicosController.getAll);
router.post("/", MedicosController.create);
router.get("/:id", MedicosController.getById);
router.put("/:id", MedicosController.update);
router.delete("/:id", MedicosController.delete);

module.exports = router;
