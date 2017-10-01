var config = require('./config');

var express = require('express');
var app = express();
app.set('view engine', 'hbs');

var mongoose = require('mongoose');
mongoose.connect(config.getDbConnectionString());

app.use('/', express.static(__dirname + '/public/dist'));

var port = process.env.PORT || 3000;
app.listen(port);