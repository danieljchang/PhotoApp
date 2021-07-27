const express = require('express');
const router = express.Router();
const db = require('../conf/database');
const UserError = require('../helpers/error/UserError');
const {successPrint, errorPrint} = require('../helpers/debug/debugprinters');


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/getAllUsers', (req, res, next) => {
    res.send('All Users')
    db.query('SELECT * from users;', (err, results, fields) => {
        if (err){ 
            next(err);
        }
        res.send(results);
    })
    .catch((err)=> {
        next(err);
    })
    
});
router.get('/getAllPostsP', (req, res, next) => {
    db.query('SELECT* from posts;')
    .then(([results,fields]) => {
        console.log(results);
        res.send(results);
    })
    .catch((err)=> {
        next(err);
    })

});

router.post('/register', (req, res, next)=>{
    let password = req.body.password;
    let username = req.body.username;
    let email = req.body.email;


    // Validate here
    
    
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
      errorPrint("User could not be made", err); 
      if(err instanceof UserError){
        errorPrint(err.getMessage());
        res.status(err.getStatus);
        res.redirect(err.getRedirectURL);
      }else{
        next(err);
      }
    });
});

router.post('/login', (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;
  
  // do validation
  // if (username ==)

  let baseSQL= "SELECT username, password FROM users WHERE username=? AND password=?;"
  db.execute(baseSQL,[username, password])
  .then(([results, fields]) => {
    if(results && results.length ==1){ 
      successPrint(`User ${username} is logged in`)
      res.locals.logged = true;
      // res.cookie("logged", username, {expires: new Date(Date.now()+90000000), httpOnly: false});
      res.render('index');
      // res.render('index', {logged:true});

    }else{
      throw new UserError("Invalid username and/or password!", "/login", 200);
    }
  })
  .catch((err) => {
    errorPrint("user login failed");
    if(err instanceof UserError){
      errorPrint(err.getMessage());
      res.status(err.getStatus());
      res.redirect('/login')
    }else{
      next(err)
    }
  })
})
module.exports = router;
