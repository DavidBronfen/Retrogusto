const morgan = require('morgan');
const bodyParser = require('bodyParser');
const cors = require('cors');

module.exports = (app) => {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({ extended:true }));
  app.use(bodyParser.json());
  app.use(cors());
}
