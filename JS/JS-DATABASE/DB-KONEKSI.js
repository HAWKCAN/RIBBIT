
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'RIBBIT',
  port: process.env.DB_PORT || 3306
});

db.connect(err => {
  if (err) {
    console.error('Gagal koneksi ke database:', err);
  } else {
    console.log('TERHUBUNG KE MYSQL');
  }
});

module.exports = db;
