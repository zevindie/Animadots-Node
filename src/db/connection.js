const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "seu_banco",
  password: "sua_senha",
  port: 5432
});

module.exports = pool;