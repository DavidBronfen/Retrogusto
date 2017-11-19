const _ = require('lodash');
const logger = require('./logger');

const Category = require('../api/category/categoryModel');
const Recipe = require('../api/recipe/recipeModel');

const dummyCategories = require('./dummyCategories');
const dummyRecipes = require('./dummyRecipes');

const categories = dummyCategories.categories;
const recipes = dummyRecipes.recipes;

logger.log(['Seeding the Database']);

// Clean DB a help method to clean the database before each build.
const cleanDB = () => {
  logger.log(['... cleaning the DB']);
  const cleanPromises = [Category]
    .map((model) => {
      return model.remove().exec();
    });
  return Promise.all(cleanPromises);
};

// Create doc a help method to create a new document  based on the model.
const createDoc = (Model, doc) => {
  return new Promise((resolve, reject) => {
    new Model(doc).save((err, save) => {
      return err ? reject(err) : resolve(save);
    });
  });
};

const createCategories = (data) => {
  const newCategories = categories.map((category) => {
    return createDoc(Category, category);
  });

  return Promise.all(newCategories)
    .then((savedCategories) => {
      return _.merge({
        categories: savedCategories,
      }, data || {});
    });
};

const createRecipes = (data) => {
  const newRecipes = recipes.map((recipe) => {
    return createDoc(Recipe, recipe);
  });

  return Promise.all(newRecipes)
    .then((savedRecipes) => {
      return _.merge({
        recipes: savedRecipes,
      }, data || {});
    });
};

cleanDB()
  .then(createCategories)
  .then(createRecipes)
  .then(logger.log.bind([logger]))
  .catch(logger.log.bind([logger]));
