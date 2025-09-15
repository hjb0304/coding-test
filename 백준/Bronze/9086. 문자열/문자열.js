const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let a = parseInt(input[0]);

for (let i = 1; i <= a; i++) {
  let str = input[i].trim();
  console.log(str[0] + str[str.length - 1]);
}