const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',        // ajuste seu usuário
  password: 'root',        // ajuste sua senha
  database: 'sistema_veiculos',
});


async function getAll() {
  const [rows] = await pool.query('SELECT * FROM veiculos');
  return rows;
}

module.exports = { getAll };