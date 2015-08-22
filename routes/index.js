var express = require('express');
var router = express.Router();

var datatmp = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/write', function(req ,res, next){
	qs = req.query
	console.log(qs);
	datatmp.push(qs);
	res.send(datatmp);
});

module.exports = router;
