const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let a = parseInt(input[0]);
let answer = 0;

for (let i = 0; i <= a - 1; i++) {
  answer += parseInt(input[1][i]);
}

console.log(answer);