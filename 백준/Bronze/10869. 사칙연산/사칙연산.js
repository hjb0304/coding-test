let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");

let a = parseInt(input[0]);
let b = parseInt(input[1]);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(Math.floor(a / b));
console.log(a % b);