const seedUsers = require('./user-seeds');
const seedCategories = require('./category-seeds');
const seedIngredients = require('./ingredient-seeds');
const seedDrinks = require('./drink-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');

  await seedIngredients();
  console.log('--------------');

  await seedCategories();
  console.log('--------------');

  await seedUsers();
  console.log('--------------');

  await seedDrinks();
  console.log('--------------');

  process.exit(0);
};

seedAll();
