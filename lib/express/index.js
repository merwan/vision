var express = require('express');
var http = require('http');
var app = express();

app.set('port', 3000);

app.get('/heartbeat', function(req, res){
  res.status(200).json('OK')
});

http.createServer(app).listen(app.get('port'));
module.exports = app;
