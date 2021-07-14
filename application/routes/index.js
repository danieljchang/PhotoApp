var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('homepage', { title: 'Express', name:"Daniel J Chang" });
});


// router.get('/login', (req, res, next) => {
//   res.render('login');
// })
module.exports = router;

