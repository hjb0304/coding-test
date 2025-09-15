const fs = require("fs");
const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((i) => +i);
let answer = [];

for (let i = 1; i <= 30; i++) {
  if (!input.includes(i)) {
    console.log(i);
  }
}