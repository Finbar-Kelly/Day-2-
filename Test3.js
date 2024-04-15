const readline = require("readline-sync");
let width = readline.question(`What is the Width (Cm)`);
let length = readline.question("What is the Length (Cm)");
let height = readline.question("What is the Height (Cm)");
let surfaceAreaOfCube = ( 2 * (length * width + length *  + width * height));
let side;
let volumeOfCube = (length * width * height);
console.log(`The Volume of the cube is ${volumeOfCube}Cm`);
console.log(`The Surface area of the cube is ${surfaceAreaOfCube}Cm`);

