// Create friends array with initial dummy data
let friendsArr = [
{
    name: "Usagi",
    photo: "https://vignette.wikia.nocookie.net/character-stats-and-profiles/images/0/0f/Usagi.png/revision/latest?cb=20180522150900",
    scores:[
        1,
        2,
        3,
        4,
        5,
        1,
        2,
        3,
        4,
        5
    ]
},
{
    name: "Rei",
    photo: "https://vignette.wikia.nocookie.net/character-stats-and-profiles/images/0/0f/Usagi.png/revision/latest?cb=20180522150900",
    scores:[
        5,
        4,
        3,
        2,
        1,
        5,
        4,
        3,
        2,
        1
    ]
}
]

console.log(friendsArr);

let arr1 = friendsArr[0].scores;
let arr2 = friendsArr[1].scores;


function compare(arr1, arr2){
    let finalArr = [];
    arr1.forEach((scoreArr1) => {
        
        let diff = scoreArr1 - scoreArr2;
        finalArr.push(diff);
    });

    console.log(finalArr);
    // console.log(arr1, arr2);
}

compare(arr1, arr2);

// module.exports = friendsArr;