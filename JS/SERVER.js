const express = require ('express');
const app = express();
const path = require ('path');
const verifikasi_routes = require ('../JS/JS-ROUTE/Verifikasi-login-register.js');

app.use (express.json());

//BIAR EXPRESS TAHU DIMANA CSS DAN JS DAN HTML
app.use ('/HTML', express.static(path.join(__dirname, 'HTML')));
app.use ('/CSS', express.static(path.join(__dirname, 'CSS')));
app.use ('/JS', express.static(path.join(__dirname, 'JS')));

//AUTO KE HOMEPAGE.html PAS AWAL BUKAK WEB
app.get('/' , (req,res) => {
    res.sendFile(path.join(__dirname , 'HTML' , 'HOMEPAGE.html'));
});

// MENGGUNAKAN ROUTE LOGIN/REGISTER
app.use ('/verifikasi' , verifikasi_routes);

app.listen (3000 ,() => {
    console.log('server udah nyala di http://localhost:3000');

});


