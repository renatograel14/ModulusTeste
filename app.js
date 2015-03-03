var express = require('express');
var app = express();

//Create a static file server
//app.configure(function() {
//  app.use(express.static(__dirname + '/public'));
//});

app.use(express.static(__dirname + '/public'));

//Get the dummy data
require('./server/ddata.js');

var port = process.env.PORT || 8080;
app.listen(process.env.PORT)
console.log('Express server started on port %s', port);
