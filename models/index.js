//this file collects and exports the data from the different models
const User = require('./User');
const Category = require('./Category');
const Ingredient = require('./Ingredient');
const Drink = require('./Drink');

module.exports = { User, Category, Drink, Ingredient };