var express = require('express');
var router = express.Router();
var db = require('../conf/database');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});


router.get('/registration', (req, res, next) => {
  res.send('data');
  let usernmae = req.body.username;
  let email = req.body.username;
  let password = req.body.password;
  //validation
  // on own

  db.execute("SELECT * FROM users WHERE username=?", [username])
    .then(([results, fields]) => {
      if (results && results.length == 0) {
        return db.execute("SELECT * FROM users WHERE email=?", [email]);
      } else {
        throw new UserError(
          "Registration Failed: Username already exists",
          "/registration",
          200
        );
      }
    })
    .then(([results, fields]) => {
      if (results && results.length == 0) {
        let baseSQL = "INSERT INTO users (username, email, password, created) VALUES (?, ?, ?, now());";
        return db.execute(baseSQL, [username, email, password]);
      } else {
        throw new UserError(
          "Registration Failed: Email already exists",
          "/registration",
          200
        );
      }
    })
    .then(([results, fields]) => {
      if (results && results.affectedRows){
        successPrint("User.js --> User was created!");
        res.redirect('/login');
      }else {
        throw new UserError(
          "Server error, user could not be created",
          "/registration",
          500
        );
      }
    })
    .catch((err) => {
      errorPrint("User could not be made", err); // need to add
      if(err instanceof UserError){
        errorPrint(err.getMessage());   // need to add these function
        res.redirect("/login");  // need to add
      }else{
        next(err);
      }
    });
});

module.exports = router;
