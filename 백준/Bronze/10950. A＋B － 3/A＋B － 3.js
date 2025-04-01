const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

for (let i = 1; i <= input[0]; i++) {
  console.log(+input[i][0] + +input[i][2]);
}