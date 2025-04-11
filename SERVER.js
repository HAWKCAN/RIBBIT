const express = require ('express');
// const session = require('express-session');
const app = express();
const path = require ('path');

// app.use(session({
//     secret: 'rahasiaSuperAman', // taruh di .env nanti
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: false } // true jika pakai HTTPS
//   }));


const verifikasi_routes = require('./JS/JS-ROUTE/Verifikasi-login-register.js');
console.log('__dirname:', __dirname);

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



app.listen (3000 ,() => {
    console.log('server udah nyala di http://localhost:3000');

});


