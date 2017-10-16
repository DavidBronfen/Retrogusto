const express = require('express');
const mongoose = require('mongoose');

const app = express();

const api = require('./api/api');
const config = require('./config/config');
const logger = require('./util/logger');

mongoose.Promise = require('bluebird');

// db.url is different depending on NODE_ENV
mongoose.connect(config.db.url, { useMongoClient: true });

if (config.seed) {
  require('./util/seed');
}

require('./middleware/app.middleware')(app);

// setup the api
app.use('/api', api);

// Setup global error handling
app.use((err, req, res, next) => {
  // If error thrown from jwt validation check.
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('Invalud token');
    return;
  }

  logger.error([err.stack]);
  res.status(500).send('Oops');
});

// Export the app for testing
module.exports = app;
