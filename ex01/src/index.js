//Only change code below this line
var myPet = {
    species: "Dog",
    name: "Rex",
    legs: 4,
    friends: ["Spooky", "Casey"]
};
function myFunction(myObj) {
     return myObj;
}
console.log(myFunction(myPet));
//Only change code above this line
module.exports = {myPet, myFunction}