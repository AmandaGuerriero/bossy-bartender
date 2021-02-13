const { Model, DataTypes } = require('sequelize');
const mongoose = require('mongoose');
const { Schema } = mongoose;

// create our Drink model
const drinkSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  externalId: {
    type: Number
  },
  image: {
    type: String
  },
  glass: {
    type: String
  },
  ingredients: {
    type: String
  },
  measurements: {
    type: String
  }
});

const Drink = mongoose.model('Drink', drinkSchema);

module.exports = Drink;

