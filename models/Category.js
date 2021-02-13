const mongoose = require('mongoose');
const Ingredient = require('./Ingredient');

const { Schema } = mongoose;

const categorySchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  ingredients: [Ingredient.schema]
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;