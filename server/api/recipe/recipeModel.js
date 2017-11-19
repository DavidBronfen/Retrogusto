const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RecipeSchema = new Schema ({
  title: {
    type: String,
    required: true,
  },
  image_path: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  prep_time: {
    type: String,
    required: true,
  },
  portions: {
    type: Number,
    required: true,
  },
  calories: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('recipe', RecipeSchema);
