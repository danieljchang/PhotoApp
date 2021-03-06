const express = require('express');
const router = express.Router();
const db = require('../conf/database');
const UserModel = require('../models/Users');
const UserError = require('../helpers/error/UserError');
const { successPrint, errorPrint } = require('../helpers/debug/debugprinters');
var bcrypt = require('bcrypt');
const { registerValidation, loginValidation } = require('../middleware/validation');

/* GET users listing. */
router.get('/', function (req, res, next) {

});

router.get('/getAllUsers', (req, res, next) => {
  res.send('All Users')
  db.query('SELECT * from users;', (err, results, fields) => {
    if (err) {
      next(err);
    }
    res.send(results);
  })
    .catch((err) => {
      next(err);
    })

});
router.get('/getAllPostsP', (req, res, next) => {
  db.query('SELECT* from posts;')
    .then(([results, fields]) => {
      console.log(results);
      res.send(results);
    })
    .catch((err) => {
      next(err);
    })

});
router.use('/login', loginValidation);
router.post('/login', (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;


  UserModel.authenticate(username, password)
    .then((loggedUserId) => {
      if (loggedUserId > 0) {
        successPrint(`User ${username} is logged in`);
        req.session.username = username;
        req.session.userId = loggedUserId;
        res.locals.logged = true;
        req.flash('success', 'You have been logged in!');
        // res.cookie("logged", username, {expires: new Date(Date.now()+90000000), httpOnly: false});
        res.redirect('/');
        // res.render('index', {logged:true});
      } else {
        throw new UserError("Invalid username and/or password!", "/login", 200);
      }
    })
    .catch((err) => {
      errorPrint("user login failed");
      req.flash('error', "Invalid username and/or password!");
      res.status(200);
      res.redirect("/login");
    })
});

router.post('/logout', (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      errorPrint("session could not be destroyed.");
    } else {
      successPrint("Session was destroyed");
      res.clearCookie('csid');
      res.json({ status: "OK", message: "User is logged out" });
      
    }
  })
});

router.use('/register', registerValidation);
router.post('/register', (req, res, next) => {
  let password = req.body.password;
  let username = req.body.username;
  let email = req.body.email;
  let password1 = req.body.password1;

  UserModel.usernameExists(username)
    .then((userDoesNameExist) => {
      if (userDoesNameExist) {
        throw new UserError(
          "Registration Failed: Username already exists",
          "/registration",
          200
        );
      } else {
        return UserModel.emailExists(email);
      }
    })
    .then((emailDoesExist) => {
      if (emailDoesExist) {
        throw new UserError(
          "Registration Failed: Email already exists",
          "/registration",
          200
        );
      } else {
        return UserModel.create(username, password, email);
      }
    })
    .then((createdUserId) => {
      if (createdUserId < 0) {
        throw new UserError(
          "Server error, user could not be created",
          "/registration",
          500
        );
      } else {
        successPrint("User.js --> User was created!");
        req.flash('success', 'User account has been made!');
        res.redirect('/login');
      }
    })
    .catch((err) => {
      errorPrint("User could not be made", err);
      if (err instanceof UserError) {
        errorPrint(err.getMessage());
        req.flash('error', err.getMessage());
        res.status(err.getStatus());
        res.redirect(err.getRedirectURL());
      } else {
        next(err);
      }
    });

  // db.execute("SELECT * FROM users WHERE username=?", [username])
  //   .then(([results, fields]) => {
  //     if (results && results.length == 0) {
  //       return db.execute("SELECT * FROM users WHERE email=?", [email]);
  //     } else {
  //       throw new UserError(
  //         "Registration Failed: Username already exists",
  //         "/registration",
  //         200
  //       );
  //     }
  //   })
  //   .then(([results, fields]) => {
  //     if (results && results.length == 0) {
  //       return bcrypt.hash(password, 10);
  //     } else {
  //       throw new UserError(
  //         "Registration Failed: Email already exists",
  //         "/registration",
  //         200
  //       );
  //     }
  //   })
  //   .then((hashedPassword) => {
  //     let baseSQL = "INSERT INTO users (username, email, password, created) VALUES (?, ?, ?, now());";
  //     return db.execute(baseSQL, [username, email, hashedPassword]);
  //   })
  //   .then(([results, field]) => {
  //     if (results && results.affectedRows) {
  //       successPrint("User.js --> User was created!");
  //       req.flash('success', 'User account has been made!');
  //       res.redirect('/login');
  //     } else {
  //       throw new UserError(
  //         "Server error, user could not be created",
  //         "/registration",
  //         500
  //       );
  //     }
  //   })
  //   .catch((err) => {
  //     errorPrint("User could not be made", err);
  //     if (err instanceof UserError) {
  //       errorPrint(err.getMessage());
  //       req.flash('error', err.getMessage());
  //       res.status(err.getStatus());
  //       res.redirect(err.getRedirectURL());
  //     } else {
  //       next(err);
  //     }
  //   });
});







module.exports = router;

