const mongoose = require('mongoose');

const { schema } = mongoose.Schema;

const categorySchema = new schema({
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

module.exports = mongoose.model('category', categorySchema);
