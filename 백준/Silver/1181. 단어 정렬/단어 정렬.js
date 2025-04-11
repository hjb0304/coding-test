const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let a = parseInt(input[0]);
input.shift();

// Set으로 중복 요소 제거
let arr = [...new Set(input)];

// sort()로 사전 순으로 정렬
arr.sort();

// 길이가 짧은 순으로 정렬: stable sort => 정렬 함수에 영향을 받지 않는 요소(길이가 같은)들은 기존 순서를 유지
arr.sort((a, b) => a.length - b.length);

for (str of arr) {
  console.log(str);
}