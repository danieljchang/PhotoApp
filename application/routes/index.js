var express = require('express');
var router = express.Router();
var isLoggedIn = require('../middleware/routeprotectors').userIsLoggedIn;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('/index');
});


router.get('/login', (req, res, next) => {
  res.render('login');
});


router.get('/homepage', (req, res, next)=>{
  res.render('homepage');
});

router.get('/home', (req, res, next)=>{
  res.render('home');
});

router.get('/registration', (req, res, next)=>{
  res.render('registration');
});

router.use('/postimage', isLoggedIn);
router.get('/postimage', (req, res, next)=>{
  res.render('postimage');
});

module.exports = router;

