var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('homepage', { title: 'Express', name:"Daniel J Chang" });
});


router.get('/login', (req, res, next) => {
  res.render('login');
});

router.get('/postimage', (req, res, next)=>{
  res.render('postimage');
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

module.exports = router;

