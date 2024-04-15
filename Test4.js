const readline = require("readline-sync");
let favNumber = readline.question("Please enter your favourite number:")
while (favNumber != 7){
    console.log ("Try Again.")
    favNumber = readline.question("Please enter your favourite number:")
}
if (favNumber == 7){
    console.log("Thats my favoutire number too!")
}

