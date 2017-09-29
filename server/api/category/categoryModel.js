const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
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
