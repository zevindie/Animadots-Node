const express = require("express");
const router = express.Router();
const animalController = require("../controllers/animalController");

router.post("/cadastrar", animalController.cadastrarAnimal);
router.get("/listar", animalController.listarAnimais);
router.get("/listarTabela", animalController.listarAnimaisTabela);
router.get("/listarById/:idAnimal", animalController.listarAnimalById);
router.post("/editar/:idAnimal", animalController.editarAnimal);
router.post("/inativar/:idAnimal", animalController.inativarAnimal);
router.delete("/deletar/:idAnimal", animalController.deletarAnimal);

module.exports = router;