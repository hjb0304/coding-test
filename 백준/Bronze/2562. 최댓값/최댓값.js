const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n").map(Number);

let max = Math.max(...input);

console.log(max);
console.log(input.indexOf(max) + 1);