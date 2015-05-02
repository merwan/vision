var express = require('express');
var http = require('http');
var config = require('../configuration');
var heartbeat = require('../routes/heartbeat');
var app = express();

app.set('port', config.get('express:port'));
app.get('/heartbeat', heartbeat.index);

http.createServer(app).listen(app.get('port'));
module.exports = app;
