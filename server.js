// NPM express pkg
const express = require("express");
// init express and assign to variable 
const app = express();
// def ports
const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0";
// init express data parsing handling
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, '/app/public/')));

// def routing for app
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
// init server
app.listen(PORT, HOST, function() {
  console.log("App listening on PORT: " + PORT);
});
