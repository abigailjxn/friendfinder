// require express
const express = require("express");
// call express
const app = express();

app.use(express.static("public"));

// define port
const PORT = process.env.PORT || 8080;

// data-parsing middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// require route paths
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// set up listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})

