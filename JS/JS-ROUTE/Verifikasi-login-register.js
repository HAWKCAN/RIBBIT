const express = require ('express');
const router = express.Router();
const db = require ('../JS-DATABASE/DB-KONEKSI.js');
const bcrypt = require('bcryptjs');

console.log('__dirname:', __dirname);


//UNTUK REGISTER
router.post('/register', (req, res) => {

    const { USERNAME, PASSWORD } = req.body;
    console.log("Registering USERNAME:", USERNAME);

    // 1. Cek apakah USERNAME sudah ada
    const checkSql = 'SELECT * FROM user WHERE USERNAME = ?';
    db.query(checkSql, [USERNAME], (err, results) => {
        if (err) {
            console.error("ERROR saat cek username:", err);
            return res.status(500).json({ message: 'Terjadi kesalahan server.' });
        }

        if (results.length > 0) {
            return res.status(400).json({ message: 'USERNAME sudah terdaftar.' });
        }

        //HASH PASSWORD NYA DULU CUY
        bcrypt.hash(PASSWORD, 10, (err, hashedPassword) => {
            if (err) {
                return res.status(500).json({ message: 'Gagal hash password' });
            }
        
            const insertSql = 'INSERT INTO `user` (USERNAME, PASSWORD, ROLE) VALUES (?, ?, ?)';
            db.query(insertSql, [USERNAME, hashedPassword, 'client'], (err, result) => {
                if (err) {
                    return res.status(500).json({ message: 'Gagal insert user' });
                }
        
                res.json({ message: 'REGISTER SUKSES' });
            });
        });
    });
});
router.get('/check-session', (req, res) => {
    if (req.session && req.session.user) {
        res.json({ loggedIn: true, user: req.session.user });
    } else {
        res.status(401).json({ loggedIn: false });
    }
});

//UNTUK LOGIN
router.post('/login', (req, res) => {
   
    const { USERNAME, PASSWORD } = req.body;
    console.log("Login request by:",USERNAME);

    const sql = 'SELECT * FROM `user` WHERE USERNAME = ?';
    db.query(sql, [USERNAME], (err, results) => {
        if (err) {
            console.error("ERROR saat login:", err);
            return res.status(500).json({ message: 'Terjadi kesalahan server.' });
        }

        if (results.length === 0) {
            return res.status(401).json({ message: 'USERNAME tidak ditemukan.' });
        }

        const user = results[0];

        // Bandingkan password input dengan password hash di database
        bcrypt.compare(PASSWORD, user.PASSWORD, (err, isMatch) => {
            if (err) {
                console.error("ERROR saat membandingkan password:", err);
                return res.status(500).json({ message: 'Terjadi kesalahan.' });
            }

            if (!isMatch) {
                return res.status(401).json({ message: 'Password salah.' });
            }

            req.session.user = {
                USERNAME: user.USERNAME,
                ROLE: user.ROLE
            };
        


            res.json({
                message: 'login anda sukses',
                USERNAME: user.USERNAME,
                ROLE: user.ROLE
            });
        });
    });
});

router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ message: 'Terjadi kesalahan saat logout.' });
        }
        res.clearCookie('connect.sid')
        res.redirect('/login');  // Mengarahkan pengguna ke halaman login
    });
});

module.exports = router ;


