const db = require("../db/connection");

async function criarAnimal({ nomeAnimal, racaAnimal }) {
  const query = `
    insert into animal (nomeAnimal, racaAnimal)
    values ($1, $2)
    returning idAnimal, nomeAnimal, racaAnimal
  `;

  const values = [nomeAnimal, racaAnimal];

  const result = await db.query(query, values);
  return result.rows[0];
}

async function listarAnimais() {
  const query = `select * from animal 
    --where ativoAnimal is true 
    order by idAnimal
  `;

  const result = await db.query(query);
  return result.rows;
}

async function listarAnimalById({ idAnimal }) {
  const query = `select * from animal where idAnimal = $1`;  

  const value = [idAnimal];

  const result = await db.query(query, value);
  return result.rows[0];
}

async function editarAnimal({ idAnimal, nomeAnimal, racaAnimal, ativoAnimal }) {
  const animal = await listarAnimalById({ idAnimal });
  if (animal == undefined) {
    return animal;
  }

  const query = `
    update animal
    set nomeAnimal = $1, racaAnimal = $2, ativoAnimal = $3
    where idAnimal = $4
    returning idAnimal, nomeAnimal, racaAnimal
  `;

  const nomeEditar = (nomeAnimal != undefined ? nomeAnimal : animal.nomeanimal);
  const racaEditar = (racaAnimal != undefined ? racaAnimal : animal.racaanimal);
  const ativoEditar = (ativoAnimal != undefined ? ativoAnimal : animal.ativoanimal);
  
  const values = [nomeEditar, racaEditar, ativoEditar, idAnimal];

  const result = await db.query(query, values);
  return result.rows[0];
}

async function inativarAnimal({ idAnimal }) {
  const animal = await listarAnimalById({ idAnimal });
  if (animal == undefined) {
    return animal;
  }

  const query = `
    update animal
    set ativoAnimal = false
    where idAnimal = $1
    returning idAnimal, nomeAnimal, racaAnimal
  `;

  const values = [idAnimal];

  const result = await db.query(query, values)
  return result.rows[0];
}

async function deletarAnimal({ idAnimal }) {
  const animal = await listarAnimalById({ idAnimal });
  if (animal == undefined) {
    return animal;
  }

  const query = `
    delete from animal where idAnimal = $1
  `;

  const values = [idAnimal];

  const result = await db.query(query, values);
  return result;
}

module.exports = {
  criarAnimal,
  listarAnimais,
  listarAnimalById,
  editarAnimal,
  inativarAnimal,
  deletarAnimal
};