const Recipe = require('./recipeModel');
const _ = require('lodash');

exports.params = (req, res, next, id) => {
  Recipe.findById(id)
    .exec()
    .then((recipe) => {
      if (!recipe) {
        res.status(404);
        res.json({
          _message: 'No recipe with that id',
          recipe: null,
        });
      } else {
        req.recipe = recipe;
        next();
      }
    }, (err) => {
      next(err);
    });
};

exports.get = (req, res, next) => {
  Recipe.find({})
    .then((recipes) => {
      res.json(recipes);
    }, (err) => {
      next(err);
    });
};

exports.getOne = (req, res, next) => {
  res.json(req.recipe);
};

exports.post = (req, res, next) => {
  const newRecipe = req.body;

  Recipe.create(newRecipe)
    .then((recipe) => {
      res.json(recipe);
    }, (err) => {
      next(err);
    });
};

exports.put = (req, res, next) => {
  const recipe = req.recipe;
  const update = req.body;

  _.merge(recipe, update);

  recipe.save((err, saved) => {
    if (err) {
      next(err);
    } else {
      res.json({
        _message: 'Recipe successfully updated!',
        recipe: saved,
      });
    }
  });
};

exports.delete = (req, res, next) => {
  req.recipe.remove((err, removed) => {
    if (err) {
      next(err);
    } else {
      res.json({
        _message: 'Recipe successfully deleted!',
        removedRecipe: removed,
      });
    }
  });
};
