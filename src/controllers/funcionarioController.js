const funcionarioService = require("../services/funcionarioService");

async function cadastrarFuncionario(req, res) {
  try {
    const { nomeFuncionario, cargoFuncionario, idadeFuncionario } = req.body;

    if (!nomeFuncionario || !cargoFuncionario || !idadeFuncionario) {
      return res.status(400).json({
        erro: "Nome, cargo e idade são obrigatórios"
      });
    }

    const funcionario = await animalService.criarFuncionario({ nomeFuncionario, cargoFuncionario, idadeFuncionario });

    return res.status(200).json({
      mensagem: "Funcionário cadastrado com sucesso!",
      funcionario
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      erro: "Erro ao cadastrar funcionário"
    });
  }
}

module.exports = {
    cadastrarFuncionario,
};