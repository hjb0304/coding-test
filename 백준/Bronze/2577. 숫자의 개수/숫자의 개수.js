const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let a = parseInt(input[0]);
let b = parseInt(input[1]);
let c = parseInt(input[2]);

let num = [...String(a * b * c)];

for (let i = 0; i <= 9; i++) {
  console.log(num.filter((j) => j === String(i)).length);
}