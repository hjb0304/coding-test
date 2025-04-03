const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let a = parseInt(input[0]);

for (let i = 1; i <= a; i++) {
  const [b, c] = input[i].split(" ");
  console.log(`Case #${i}: ${+b} + ${+c} = ${+b + +c}`);
}