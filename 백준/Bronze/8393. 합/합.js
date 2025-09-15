const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
let answer = 0;

for (let i = 1; i <= +input; i++) {
  answer += i;
}

console.log(answer);