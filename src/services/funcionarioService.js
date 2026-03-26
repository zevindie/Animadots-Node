const db = require("../db/connection");

async function criarFuncionario({ nomeFuncionario, cargoFuncionario, idadeFuncionario }) {
  const query = `
    insert into funcionario (nomeFuncionario, cargoFuncionario, idadeFuncionario)
    values ($1, $2)
    returning idFuncionario, nomeFuncionario, cargoFuncionario, idadeFuncionario
  `;

  const values = [nomeFuncionario, cargoFuncionario, idadeFuncionario];

  const result = await db.query(query, values);
  return result.rows[0];
}

module.exports = {
    criarFuncionario,
};
