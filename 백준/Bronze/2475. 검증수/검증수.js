const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let answer = 0;

input.forEach((i) => {
  answer += i * i;
});

console.log(answer % 10);