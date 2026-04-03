const { Pool } = require("pg");

console.log("PASSWORD:", process.env.DB_PASS);
console.log("TYPE:", typeof process.env.DB_PASS);

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT
});

module.exports = pool;