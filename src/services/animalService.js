const db = require("../db/connection");

async function criarAnimal({ nome, raca }) {
  const query = `
    insert into animal (nome, raca)
    values ($1, $2)
    returning id, nome, raca
  `;

  const values = [nome, raca];

  const result = await db.query(query, values);

  return result.rows[0];
}

async function listarAnimais() {
  const query = `select * from animal`;

  const result = await db.query(query);
  return result.rows;
}

module.exports = {
  criarAnimal,
  listarAnimais
};