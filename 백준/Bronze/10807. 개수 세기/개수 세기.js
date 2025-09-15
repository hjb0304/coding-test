const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let length = parseInt(input[0]);
let arr = input[1].split(" ");
let num = parseInt(input[2]);
let answer = 0;

for (let i = 0; i < length; i++) {
  if (+arr[i] === num) {
    answer++;
  }
}

console.log(answer);