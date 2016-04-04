var path = require('path');

var express = require('express');
var routes = require('./routes/index');
var config = require('./config/index'); 
var mongoose = require('mongoose');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
mongoose.connect(config.mongoose);


app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);


app.listen(3000);

module.exports = app;
