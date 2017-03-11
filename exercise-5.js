// I will have a good day if I go to a movie and spend time with friends or I don't have to go to work.

var goToMovie = true;
var spendTimeWithFriends = true;
var goToWork = false;


var goodDay = (goToMovie && spendTimeWithFriends || goToWork);


// print if I will have a good day
console.log(goodDay);
