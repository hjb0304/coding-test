const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
let answer = "";

[..."abcdefghijklmnopqrstuvwxyz"].forEach((i) => {
  answer += input.indexOf(i) + " ";
});

console.log(answer);