const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  const arr = input[i].split(" ").map(Number);
  arr.sort((a, b) => a - b);
  const [a, b, c] = arr;

  console.log(a * a + b * b === c * c ? "right" : "wrong");
}