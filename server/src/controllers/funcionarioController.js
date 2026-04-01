const funcionarioService = require("../services/funcionarioService");

async function cadastrarFuncionario(req, res) {
  try {
    const { nomeFuncionario, cargoFuncionario, idadeFuncionario } = req.body;

    if (!nomeFuncionario || !cargoFuncionario || !idadeFuncionario) {
      return res.status(400).json({
        erro: "Nome, cargo e idade são obrigatórios"
      });
    }

    const funcionario = await funcionarioService.criarFuncionario({ nomeFuncionario, cargoFuncionario, idadeFuncionario });

    return res.status(200).json({
      mensagem: "Funcionário cadastrado com sucesso!",
      funcionario
    });
  } catch (error) {
    console.error(error);

    res.locals.erroMsg = error.message;

    return res.status(500).json({
      erro: "Erro ao cadastrar funcionário"
    });
  }
}

async function listarFuncionarios(req, res) {
  try {
    const lista = await funcionarioService.listarFuncionarios();
  
    return res.status(200).json({
      lista
    })
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      erro: "Erro ao listar funcionários"
    })
  }
}

async function listarFuncionarioById(req, res) {
  try {
    const { idFuncionario } = req.params;

    if (!idFuncionario) {
      return res.status(400).json({
        erro: "Id é obrigatório para pesquisar funcionário!"
      });
    }

    const funcionario = await funcionarioService.listarFuncionarioById({ idFuncionario });
    const response = null;

    if (funcionario != undefined) {
      response = res.status(200).json({
        mensagem: "Funcionário encontrado!",
        funcionario
      });
    } else {
      response = res.status(404).json({
        mensagem: "Funcionário não encontrado :(",
      });
    }

    return response;
  } catch (error) {
    console.error(error);

    res.locals.erroMsg = error.message;

    return res.status(500).json({
      erro: "Erro ao encontrar funcionário"
    });
  }
}

async function editarFuncionario(req, res) {
  try {
    const { idFuncionario } = req.params;
    const { nomeFuncionario, cargoFuncionario, idadeFuncionario } = req.body;

    // if (!nomeAnimal || !racaAnimal) {
    //   return res.status(400).json({
    //     erro: "Nome e raça são obrigatórios"
    //   });
    // }

    const funcionario = await funcionarioService.editarFuncionario({ idFuncionario, nomeFuncionario, cargoFuncionario, idadeFuncionario });

    if (funcionario != undefined) {
      return res.status(200).json({
        mensagem: "Funcionário editado com sucesso!",
        funcionario
      });
    } else {
      return res.status(404).json({
        mensagem: "Funcionário não encontrado :(",
      });
    }
  } catch (error) {
    console.error(error);

    res.locals.erroMsg = error.message;

    return res.status(500).json({
      erro: "Erro ao editar funcionário"
    });
  }
}

async function deletarFuncionario(req, res) {
  try {
    const { idFuncionario } = req.params;

    if (!idFuncionario) {
      return res.status(400).json({
        erro: "Id do funcionario é obrigatório para deletar."
      });
    }

    const funcionario = await funcionarioService.deletarFuncionario({ idFuncionario });

    if (funcionario != undefined) {
      return res.status(200).json({
        mensagem: "Funcionário deletado com sucesso!",
      });
    } else {
      return res.status(404).json({
        mensagem: "Funcionário não encontrado :(",
      });
    }
  } catch (error) {
    console.error(error);

    res.locals.erroMsg = error.message;

    return res.status(500).json({
      erro: "Erro ao deletar funcionário"
    });
  }
}

module.exports = {
  cadastrarFuncionario,
  listarFuncionarios,
  listarFuncionarioById,
  editarFuncionario,
  deletarFuncionario
};