// loading express 

var express = require('express');
var app = express();

// loading parser
var bodyParser = require('body-parser');

var methodOverride = require('method-override');	


// database config
var db = require('./config/db');

// Database Connection URL
var mongoose = require("mongoose");

mongoose.connect(db.url);

// server port
var port = process.env.PORT ||8080;



app.use(bodyParser.json());
app.use(bodyParser.json({ type:'application/vnd.api+json' }));

app.use(bodyParser.urlencoded({extended : true }));

app.use(methodOverride('X-HTTP-Method-Override'));

app.use(express.static(__dirname + "/public"));

require("./app/routes")(app);

app.listen(port);

console.log('Server  starts at this port' + port);

exports = module.exports = app;