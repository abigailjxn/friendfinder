// require express
const express = require("express");
// call express
const app = express();
// define port
const PORT = process.env.PORT || 8080;

// data-parsing middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

// require route paths
// require("./app/routing/apiRoutes");
require("./app/routing/htmlRoutes")(app);

// app.get("/survey", function(req, res){
//     res.send("working");
// });


// set up listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})

