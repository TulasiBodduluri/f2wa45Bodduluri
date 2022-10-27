var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  var random = Math.random() * 15;
  res.send(`Math.cos() applied to ${random} is ${Math.cos(random)}`);
});

router.get('/:id', function(req, res, next) {
  res.send(`Math.cos() applied to ${req.params.id} is ${Math.cos(req.params.id)}`);
});



module.exports = router;