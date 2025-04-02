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
    answer.push(i);
  }
}

console.log(answer[0] < answer[1] ? answer[0] : answer[1]);
console.log(answer[0] < answer[1] ? answer[1] : answer[0]);