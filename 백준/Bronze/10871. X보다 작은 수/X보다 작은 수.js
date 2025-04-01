const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const count = +input[0].split(" ")[0];
const num = +input[0].split(" ")[1];
const arr = input[1].split(" ");
let answer = "";

for (let i = 0; i <= count; i++) {
  if (arr[i] < num) {
    answer += arr[i] + " ";
  }
}

console.log(answer);