const db = require("../db/connection");

async function criarFuncionario({ nomeFuncionario, cargoFuncionario, idadeFuncionario }) {
  const query = `
    insert into funcionario (nomeFuncionario, cargoFuncionario, idadeFuncionario)
    values ($1, $2, $3)
    returning idFuncionario, nomeFuncionario, cargoFuncionario, idadeFuncionario
  `;

  const values = [nomeFuncionario, cargoFuncionario, idadeFuncionario];

  const result = await db.query(query, values);
  return result.rows[0];
}

async function listarFuncionarios() {
  const query = `select * from funcionario 
    order by idFuncionario
  `;

  const result = await db.query(query);
  return result.rows;
}

async function listarFuncionarioById({ idFuncionario }) {
  const query = `select * from funcionario where idFuncionario = $1`;  

  const value = [idFuncionario];

  const result = await db.query(query, value);
  return result.rows[0];
}

async function editarFuncionario({ idFuncionario, nomeFuncionario, cargoFuncionario, idadeFuncionario }) {
  const funcionario = await listarFuncionarioById({ idFuncionario });
  if (funcionario == undefined) {
    return funcionario;
  }

  const query = `
    update funcionario
    set nomeFuncionario = $1, cargoFuncionario = $2, idadeFuncionario = $3
    where idFuncionario = $4
    returning idFuncionario, nomeFuncionario, cargoFuncionario, idadeFuncionario
  `;

  const nomeEditar = (nomeFuncionario != undefined ? nomeFuncionario : funcionario.nomefuncionario);
  const cargoEditar = (cargoFuncionario != undefined ? cargoFuncionario : funcionario.cargofuncionario);
  const idadeEditar = (idadeFuncionario != undefined ? idadeFuncionario : funcionario.idadefuncionario);
  
  const values = [nomeEditar, cargoEditar, idadeEditar, idFuncionario];

  const result = await db.query(query, values);
  return result.rows[0];
}

async function deletarFuncionario({ idFuncionario }) {
  const funcionario = await listarFuncionarioById({ idFuncionario });
  if (funcionario == undefined) {
    return funcionario;
  }

  const query = `
    delete from funcionario where idFuncionario = $1
  `;

  const values = [idFuncionario];

  const result = await db.query(query, values);
  return result;
}

module.exports = {
  criarFuncionario,
  listarFuncionarios,
  listarFuncionarioById,
  editarFuncionario,
  deletarFuncionario
};
