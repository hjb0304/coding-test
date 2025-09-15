const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let a = parseInt(input[0]);
let b = input[1].split(" ").map(Number);

let max = Math.max(...b);
let sum = 0;

for (let i = 0; i < a; i++) {
  sum += (b[i] / max) * 100;
}

console.log(sum / a);