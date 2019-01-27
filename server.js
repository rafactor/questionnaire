// *** Dependencies
// =============================================================
var express = require("express");
var htmlRoutes = require('./routes/html-routes');
var apis = require('./routes/apis')

// Packages set up
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;
// var bodyParser = require('body-parser'); // study
var router = express.Router();

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
app.use('/',htmlRoutes)
app.use('/api',apis)


// Syncing our sequelize models and then starting our Express app
// =============================================================

// db.sequelize.sync({force:true}).then(function() {
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

