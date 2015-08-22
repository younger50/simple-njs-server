var express = require('express');
var router = express.Router();

var datatmp = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Data server', data: JSON.stringify(datatmp) });
});

router.get('/write', function(req ,res, next){
	//write query string to global data array
	qs = req.query
	console.log(qs);
	datatmp.push(qs);
	res.send(datatmp);
});

router.get('/read', function(req ,res, next){
	//response with global data array
	console.log(datatmp);
	res.send(datatmp);
});

module.exports = router;
