const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
let answer = "";

for (let i = 1; i <= +input / 4; i++) {
  answer += "long ";
}

console.log(answer + "int");