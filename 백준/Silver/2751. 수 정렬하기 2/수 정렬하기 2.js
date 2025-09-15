const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let answer = "";

// 첫번째 요소 제거
input.shift();
input = input.map(Number);

// 오름차순 정렬
input.sort((a, b) => a - b);

for (let num of input) {
  answer += num + "\n";
}

console.log(answer);