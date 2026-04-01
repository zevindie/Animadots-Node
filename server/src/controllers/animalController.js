const animalService = require("../services/animalService");

async function cadastrarAnimal(req, res) {
  try {
    const { nomeAnimal, racaAnimal } = req.body;

    if (!nomeAnimal || !racaAnimal) {
      return res.status(400).json({
        erro: "Nome e raça são obrigatórios"
      });
    }

    const animal = await animalService.criarAnimal({ nomeAnimal, racaAnimal });

    return res.status(200).json({
      mensagem: "Animal cadastrado com sucesso!",
      animal
    });
  } catch (error) {
    console.error(error);

    res.locals.erroMsg = error.message;

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

    res.locals.erroMsg = error.message;

    return res.status(500).json({
      erro: "Erro ao listar animais"
    })
  }
}

async function listarAnimalById(req, res) {
  try {
    const { idAnimal } = req.params;

    if (!idAnimal) {
      return res.status(400).json({
        erro: "Id é obrigatório para pesquisar animal!"
      });
    }

    const animal = await animalService.listarAnimalById({ idAnimal });
    const response = null;

    if (animal != undefined) {
      response = res.status(200).json({
        mensagem: "Animal encontrado!",
        animal
      });
    } else {
      response = res.status(404).json({
        mensagem: "Animal não encontrado :(",
      });
    }

    return response;
  } catch (error) {
    console.error(error);

    res.locals.erroMsg = error.message;

    return res.status(500).json({
      erro: "Erro ao encontrar animal"
    });
  }
}

async function editarAnimal(req, res) {
  try {
    const { idAnimal } = req.params;
    const { nomeAnimal, racaAnimal, ativoAnimal } = req.body;

    // if (!nomeAnimal || !racaAnimal) {
    //   return res.status(400).json({
    //     erro: "Nome e raça são obrigatórios"
    //   });
    // }

    const animal = await animalService.editarAnimal({ idAnimal, nomeAnimal, racaAnimal, ativoAnimal });

    if (animal != undefined) {
      return res.status(200).json({
        mensagem: "Animal editado com sucesso!",
        animal
      });
    } else {
      return res.status(404).json({
        mensagem: "Animal não encontrado :(",
      });
    }
  } catch (error) {
    console.error(error);

    res.locals.erroMsg = error.message;

    return res.status(500).json({
      erro: "Erro ao editar animal"
    });
  }
}

async function inativarAnimal(req, res) {
  try {
    const { idAnimal } = req.params;

    if (!idAnimal) {
      return res.status(400).json({
        erro: "Id animal é obrigatório para inativar."
      });
    }

    const animal = await animalService.inativarAnimal({ idAnimal });

    if (animal != undefined) {
      return res.status(200).json({
        mensagem: "Animal inativado com sucesso!",
        animal
      });
    } else {
      return res.status(404).json({
        mensagem: "Animal não encontrado :(",
      });
    }
  } catch (error) {
    console.error(error);

    res.locals.erroMsg = error.message;

    return res.status(500).json({
      erro: "Erro ao inativar animal"
    });
  }
}

async function deletarAnimal(req, res) {
  try {
    const { idAnimal } = req.params;

    if (!idAnimal) {
      return res.status(400).json({
        erro: "Id animal é obrigatório para deletar."
      });
    }

    const animal = await animalService.deletarAnimal({ idAnimal });

    if (animal != undefined) {
      return res.status(200).json({
        mensagem: "Animal deletado com sucesso!",
      });
    } else {
      return res.status(404).json({
        mensagem: "Animal não encontrado :(",
      });
    }
  } catch (error) {
    console.error(error);

    res.locals.erroMsg = error.message;

    return res.status(500).json({
      erro: "Erro ao deletar animal"
    });
  }
}

module.exports = {
  cadastrarAnimal,
  listarAnimais,
  listarAnimalById,
  editarAnimal,
  inativarAnimal,
  deletarAnimal
};