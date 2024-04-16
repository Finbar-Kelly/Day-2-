const readline = require("readline-sync");
let dogAgeHumanYear = readline.question(`What is the dog age in Human Years?`);
let dogAgeDogYears
if (dogAgeHumanYear <= 2){
    dogAgeDogYears = 10.5 * dogAgeHumanYear;
    console.log(`The Dog age in Dog Years is ${dogAgeDogYears}`);
}
else {
    dogAgeDogYears = 21 + ((dogAgeHumanYear -2) * 4)
    console.log(`The Dog age in Dog Years is ${dogAgeDogYears}`);
}
//console.log(`The Dog age in Dog years is ${}`);