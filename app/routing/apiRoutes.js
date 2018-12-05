const friendsData = require("../data/friends")

module.exports = function (app) {
    app.get("/api/friends", function(req, res){
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {
        //push user input to friends API
        friendsData.push(req.body);

        // match user with most compatible friend in API
        let userScores = req.body.scores;
        // Go through each friend object in API array and reduce to one object, the friendMatch 
        let friendMatch = friendsData.reduce((ACC, CURR) => {
            // Within each friend object, go through each scores property and return one absolute value that reflects the sum of their score differences
            let scoresCompatibility = userScores.reduce((acc, curr, idx) => 
                acc + Math.abs(curr - CURR.scores[idx]), 0);
                
            if (scoresCompatibility < ACC.scoresCompatibility) {
                return {
                    friendMatch: CURR,
                    scoresCompatibility: scoresCompatibility
                }
            } else return ACC;
        }, {scoresCompatibility: Infinity});
        
        res.json(friendMatch);

    });
}
