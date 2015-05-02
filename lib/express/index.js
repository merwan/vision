var express = require('express');
var http = require('http');
var config = require('../configuration');
var app = express();

app.set('port', config.get('express:port'));

app.get('/heartbeat', function(req, res){
  res.status(200).json('OK')
});

http.createServer(app).listen(app.get('port'));
module.exports = app;
