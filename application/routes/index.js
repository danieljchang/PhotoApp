var express = require('express');
var router = express.Router();
var isLoggedIn = require('../middleware/routeprotectors').userIsLoggedIn;
const {getRecentPosts, getPostById} = require('../middleware/postsMiddleware');
var db = require("../conf/database");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('/index');
});


router.get('/login', (req, res, next) => {
  res.render('login');
});


router.get('/homepage', getRecentPosts, (req, res, next)=>{
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

router.get('/post/:id(\\d+)', getPostById, (req, res, next) => {
  res.render('imagepost', { title: `Post ${req.params.id}`});
});
//localhost:3000/posts/search?search=value


module.exports = router;

