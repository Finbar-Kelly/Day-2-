const readline = require("readline-sync");
let width = readline.question(`What is the Width (Cm)`);
let length = readline.question("What is the Length (Cm)");
let height = readline.question("What is the Height (Cm)");

let face1 = width * height 
let face2 = width * length
let face3 = height * length

let surfaceAreaOfCube = ( 2 * (face1 + face2 + face3));





let side;
let volumeOfCube = (length * width * height);
console.log(`The Volume of the cube is ${volumeOfCube}Cm^3`);
console.log(`The Surface area of the cube is ${surfaceAreaOfCube}Cm^2`);

