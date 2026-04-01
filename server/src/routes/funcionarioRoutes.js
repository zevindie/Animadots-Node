const express = require("express");
const router = express.Router();
const funcionarioController = require("../controllers/funcionarioController");

router.post("/cadastrar", funcionarioController.cadastrarFuncionario);
router.get("/listar", funcionarioController.listarFuncionarios);
router.get("/listarById/:idFuncionario", funcionarioController.listarFuncionarioById);
router.post("/editar/:idFuncionario", funcionarioController.editarFuncionario);
router.delete("/deletar/:idFuncionario", funcionarioController.deletarFuncionario);

module.exports = router;