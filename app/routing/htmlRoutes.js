const path = require("path");

module.exports = function(app){

    app.get("/survey", function(req, res){
        res.send("working");
    });

    app.get("*", function(req, res) {
        res.send("also working");
    })


}
  