const animalService = require("../services/animalService");

async function cadastrarAnimal(req, res) {
  try {
    const { nome, raca } = req.body;

    if (!nome || !raca) {
      return res.status(400).json({
        erro: "Nome e raça são obrigatórios"
      });
    }

    const animal = await animalService.criarAnimal({ nome, raca });

    return res.status(200).json({
      mensagem: "Animal cadastrado com sucesso",
      animal
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      erro: "Erro ao cadastrar animal"
    });
  }
}

async function listarAnimais(req, res) {
    try {
        const lista = await animalService.listarAnimais();
    
        return res.status(200).json({
            lista
        })
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            erro: "Erro ao listar animais"
        })
    }
}

module.exports = {
  cadastrarAnimal,
  listarAnimais
};