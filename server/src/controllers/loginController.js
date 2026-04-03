const loginService = require("../services/loginService");

async function fazerLogin(req, res) {
  try {
    const { emailFuncionario, senhaFuncionario } = req.body;

    if (!emailFuncionario || !senhaFuncionario) {
      return res.status(400).json({
        erro: "E-mail e senha são obrigatórios!"
      });
    }

    const login = await loginService.fazerLogin({ emailFuncionario, senhaFuncionario });

    if (login != undefined) {
        return res.status(200).json({
            mensagem: "Login realizado com sucesso!",
        });
    } else {
        return res.status(404).json({
            mensagem: "Erro ao logar. Verifique seu e-mail e senha e tente novamente.",
        });
    }
  } catch (error) {
    console.error(error);

    res.locals.erroMsg = error.message;

    return res.status(500).json({
      erro: "Erro ao fazer login."
    });
  }
}

module.exports = {
  fazerLogin
};