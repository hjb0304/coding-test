const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const sum = +input[0];
const count = +input[1];
let price = 0;

for (let i = 2; i < input.length; i++) {
  let info = input[i].split(" ");
  price += +info[0] * +info[1];
}

console.log(sum === price ? "Yes" : "No");