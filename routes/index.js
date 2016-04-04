var express = require('express');
var router = express.Router();
var homepage = require('./homepage');
var users = require('./users');
var words = require('./words');

// homepage
router.use('/', homepage);

// users api
router.use('/users', users);

//words api
router.use('/words', words);

module.exports = router;
