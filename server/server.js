const express = require('express');
const mongoose = require('mongoose');
const path = require('path');


const app = express();

const api = require('./api/api');
const config = require('./config/config');
const logger = require('./util/logger');

// db.url is different depending on NODE_ENV
mongoose.connect(config.db.url, { useMongoClient: true });
mongoose.Promise = global.Promise;

if (config.seed) {
  require('./util/seed'); // eslint-disable-line global-require
}

require('./middleware/app.middleware')(app);

// setup the api
app.use('/api', api);

app.use('/util/assets', express.static(path.join(__dirname, '/util/assets')))

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

module.exports = app;
