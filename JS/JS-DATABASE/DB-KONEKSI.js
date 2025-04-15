require('dotenv').config();
const mysql = require('mysql2');

const db = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'RIBBIT',
  port: process.env.DB_PORT || 3306,
  ssl: {
    rejectUnauthorized: false // WAJIB true untuk Railway
  },
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


module.exports = db;
