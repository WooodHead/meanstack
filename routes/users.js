var express = require('express');
var router = express.Router();
var User = require('../models/users');
//use to get all data from url (get or post);
var bodyParser = require('body-parser');
//to get post request param (req.body);
var urlencoded = bodyParser.urlencoded({extended: false});

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({}, function(err, users) {
  	// console.log(users);
	  console.log(users);
  res.render('../views/users/index', { users: users });
  });
});

/* New User */
router.get('/new', (req, res, next) => {
	res.render('../views/users/new');
});

/* Edit a User */
router.get('/edit', (req, res, next) => {
	res.send('edit');
});

/* Create or Update a User */
router.post('/', urlencoded, (req, res, next) => {
	var userNew = {};
	userNew.username = req.body.username;
	userNew.password = req.body.password;
	User.create(userNew, function(err, user){
		if (err) throw err;
		res.redirect('/users');
	});
})

/* delete a User */
router.delete('/:id', (req, res, next) => {
	console.log("delete");
})

/* GET one User */
router.get('/:id', urlencoded, (req, res, next) => {
	if (User.count({id:req.params.id}) > 0) {
		console.log("User found");
	} else {
		console.log("User not found");
	}
	res.send("yo");

	// if (User.findById(req.)
});

module.exports = router;
