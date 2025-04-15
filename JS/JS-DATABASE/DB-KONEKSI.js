require('dotenv').config();
const mysql = require('mysql2');

const db = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'RIBBIT',
  port: process.env.DB_PORT || 3306,
  ssl: {
    rejectUnauthorized: false // Aktif kalau Railway perlu SSL
  },
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Cek apakah koneksi berhasil
db.getConnection((err, connection) => {
  if (err) {
    console.error('❌ Gagal koneksi ke database:', err.message);
  } else {
    console.log('✅ Terkoneksi ke MySQL dengan pool!');
    connection.release();
  }
});

module.exports = db;
