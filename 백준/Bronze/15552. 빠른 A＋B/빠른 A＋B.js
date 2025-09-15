const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let answer = "";

for (let i = 1; i <= +input[0]; i++) {
  const a = +input[i].split(" ")[0];
  const b = +input[i].split(" ")[1];

  answer += a + b + "\n";
}

console.log(answer);