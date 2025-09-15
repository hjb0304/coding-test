const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let num = parseInt(input[0]);
let size = input[1].split(" ").map(Number);
let tCount = +input[2].split(" ")[0];
let penCount = +input[2].split(" ")[1];

let tNum = 0;

// 사이즈별 티셔츠 묶음 수 구하기
for (let i = 0; i < size.length; i++) {
  tNum += Math.ceil(size[i] / tCount);
}

console.log(tNum);

// 펜 묶음 수와 나머지 펜 수 구하기
console.log(Math.floor(num / penCount), num % penCount);