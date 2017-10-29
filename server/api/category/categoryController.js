const Category = require('./categoryModel');
const _ = require('lodash');

exports.params = (req, res, next, id) => {
  Category.findById(id)
    .exec()
    .then((category) => {
      if (!category) {
        next(new Error('No category with that id'));
      } else {
        req.category = category;
        next();
      }
    }, (err) => {
      next(err);
    });
};

exports.get = (req, res, next) => {
  Category.find({})
    .then((categories) => {
      res.json(categories);
    }, (err) => {
      next(err);
    });
};

exports.getOne = (req, res, next) => {
  res.json(req.category);
};

exports.post = (req, res, next) => {
  const newCategory = req.body;

  Category.create(newCategory)
    .then((category) => {
      res.json(category);
    }, (err) => {
      next(err);
    });
};

exports.put = (req, res, next) => {
  const category = req.category;
  const update = req.body;

  _.merge(category, update);

  category.save((err, saved) => {
    if (err) {
      next(err);
    } else {
      res.json(saved);
    }
  });
};

exports.delete = (req, res, next) => {
  req.category.remove((err, removed) => {
    if (err) {
      next(err);
    } else {
      res.json(removed);
    }
  });
};
