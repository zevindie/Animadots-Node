const express = require("express");
const router = express.Router();
const funcionarioController = require("../controllers/funcionarioController");

router.get("/cadastrar", funcionarioController.cadastrarFuncionario);

module.exports = router;