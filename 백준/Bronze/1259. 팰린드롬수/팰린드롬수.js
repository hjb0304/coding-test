const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  input[i] = input[i].trim();
  let reverse = [...input[i]].reverse();
  console.log(input[i] === reverse.join("") ? "yes" : "no");
}