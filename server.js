require("dotenv").config();

const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
const path = require('path');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers.js');
const hbs = exphbs.create({ helpers });
const app = express();
const PORT = process.env.PORT || 3002;

// track user sessions 
const db = require('./config/connection.js');
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
// app.use(session(sess));
// end track user sessions

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static("public"));

// turn on routes
app.use(require('./controllers/'));

// // turn on connection to db and server
// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log(`Now listening on PORT ${PORT}`));
// });