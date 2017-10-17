const mongoose = require('mongoose');

/* eslint prefer-destructuring: ["error", {AssignmentExpression: {array: true}}] */
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name_he: {
    type: String,
    required: true,
  },
  name_en: {
    type: String,
    required: true,
  },
  image_path: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('category', CategorySchema);
