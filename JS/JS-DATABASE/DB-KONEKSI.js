const mysql = require('mysql2');
const db = mysql.createConnection({
     host :'localhost',
     user : 'root',
     password : '', //default XAMPP NYA INI
     database : 'RIBBIT' 
});

db.connect(err => {
    if (err) throw err;
    console.log ('TERHUBUNG KE MYSQL');

});
module.exports = db ;