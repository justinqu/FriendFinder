//required npm installs
var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


//get routes for app
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  