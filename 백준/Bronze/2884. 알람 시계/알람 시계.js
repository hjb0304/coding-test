const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

let a = parseInt(input[0]);
let b = parseInt(input[1]) - 45;

if (b < 0) {
  a -= 1;
  b += 60;
}

if (a < 0) {
  a += 24;
}

console.log(a + " " + b);