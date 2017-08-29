var config = require('./config/config');
var app = require('./server');
var logger = require('util/logger');

app.listen(config.port);
logger.log('listening on http://localhost:' + config.port);
