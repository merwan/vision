var express = require('express');
var http = require('http');
var config = require('../configuration');
var heartbeat = require('../routes/heartbeat');
var notFound = require('../middleware/notFound');
var logger = require('morgan');
var app = express();

app.set('port', config.get('express:port'));
app.use(logger('dev'));
app.get('/heartbeat', heartbeat.index);
app.use(notFound.index);

http.createServer(app).listen(app.get('port'));
module.exports = app;
