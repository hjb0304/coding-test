let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let a = parseInt(input[0]);
let b = parseInt(input[1][2]);
let c = parseInt(input[1][1]);
let d = parseInt(input[1][0]);

console.log(a * b);
console.log(a * c);
console.log(a * d);
console.log(a * input[1]);