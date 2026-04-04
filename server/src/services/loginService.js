const db = require("../db/connection");

async function fazerLogin({ emailFuncionario, senhaFuncionario }) {
  const query = `select * from funcionario where loginFuncionario = $1 and senhaFuncionario = $2`;

  const value = [emailFuncionario, senhaFuncionario];

  const result = await db.query(query, value);
  return result.rows[0];
}

module.exports = {
  fazerLogin
};