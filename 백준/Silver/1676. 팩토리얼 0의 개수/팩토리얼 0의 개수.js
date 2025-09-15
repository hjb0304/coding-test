const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let input2 = +input;
let input5 = +input;
let answer2 = 0;
let answer5 = 0;

// 2와 5를 곱했을 때만 10이 됨 => 2의 배수와 5의 배수를 구해 적은 쪽이 답

while (input2 >= 2) {
  answer2 += Math.floor(input2 / 2);
  input2 /= 2;
}

while (input5 >= 5) {
  answer5 += Math.floor(input5 / 5);
  input5 /= 5;
}

console.log(Math.min(answer2, answer5));