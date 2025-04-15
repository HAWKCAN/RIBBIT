require('dotenv').config(); 
const express = require ('express');
const http = require('http');
// const session = require('express-session');
const app = express();
const path = require ('path');


// app.use(session({
//   secret: process.env.SESSION_SECRET || 'rahasiaSuperAman', // Sebaiknya simpan di .env
//   resave: false,
//   saveUninitialized: false,
//   cookie: { secure: false } // Set ke true jika menggunakan HTTPS
// }));
const MongoStore = require('connect-mongo');
app.use(session({
  secret: process.env.SESSION_SECRET || 'superSecret',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_URI || 'mongodb://localhost:27017/session-db',
    ttl: 14 * 24 * 60 * 60, // 14 hari
  }),
  cookie: {
    secure: process.env.NODE_ENV === 'production', // Aktifkan secure cookie di produksi
  },
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

