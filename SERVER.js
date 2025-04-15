require('dotenv').config(); 
const express = require ('express');
const http = require('http');
const session = require('express-session');
const app = express();
const path = require ('path');
const MySQLStore = require('express-mysql-session')(session);
const sessionStore = new MySQLStore({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'RIBBIT',
  port: process.env.DB_PORT || 3306
});

app.use(session({
  key: 'session_id',
  secret: process.env.SESSION_SECRET || 'rahasiaSuperAman',
  store: sessionStore,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // true kalau pakai HTTPS
    maxAge: 1000 * 60 * 60 * 2 // 2 jam
  }
}));


const verifikasi_routes = require('./JS/JS-ROUTE/Verifikasi-login-register.js');
console.log('dari:', __dirname);



app.use (express.json());
// MENGGUNAKAN ROUTE LOGIN/REGISTER
app.use ('/verifikasi' , verifikasi_routes);
//BIAR EXPRESS TAHU DIMANA CSS DAN JS DAN HTML
app.use ('/HTML', express.static(path.join(__dirname, 'HTML')));
app.use ('/CSS', express.static(path.join(__dirname, 'CSS')));
app.use ('/JS', express.static(path.join(__dirname, 'JS')));
app.use ('/ASET', express.static(path.join(__dirname,'ASET')) );
//AUTO KE HOMEPAGE.html PAS AWAL BUKAK WEB

app.get('/' , (req,res) => {
    res.sendFile(path.join(__dirname , 'HTML' , 'HOMEPAGE.html'));
});
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'HTML', 'LOGIN-PAGE.html'));
});



const PORT = process.env.PORT || 3000; 

http.createServer(app).listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

