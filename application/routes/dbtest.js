// const express = require('express');
// const router = express.Router();
// const db = require('../conf/database');

// router.get('/getAllUsers', (req, res, next) => {
//     res.send('All Users')
//     db.query('SELECT * from users;', (err, results, fields) => {
//         if (err){ 
//             next(err);
//         }
//         res.send(results);
//     })
//     .catch((err)=> {
//         next(err);
//     })
    
// });
// router.get('/getAllPostsP', (req, res, next) => {
//     db.query('SELECT* from posts;')
//     .then(([results,fields]) => {
//         console.log(results);
//         res.send(results);
//     })
//     .catch((err)=> {
//         next(err);
//     })

// });

// router.post('/createUser', (req, res, next)=>{
//     let password = req.body.password;
//     let username = req.body.username;
//     let email = req.body.email;
//     res.send(req.body);

//     // validate data
//     // res.redirect('registration');

//     let baseSQL = 'INSERT INTO users (username, email, password, created) VALUES (?, ?, ?, now())';
//     db.query(baseSQL, [username, email, password]).
//     then(([results, fields]) => {
//         if (results && results.affectedRows){
//             res.send('user was made');
//         }else {
//             res.send('user was not made');
//         };
//     })
//     .catch((err)=> {
//         next(err);
//     })

// });

// module.exports = router;
