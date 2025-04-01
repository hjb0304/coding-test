const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let num = 1;
for (let i = 1; i <= input; i++) {
  num *= i;
}

console.log(num);
