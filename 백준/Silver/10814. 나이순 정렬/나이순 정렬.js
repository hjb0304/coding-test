const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

input.shift();
const arr = [...input];
let answer = "";

// 나이가 적은 순으로 정렬.
// 나이가 같으면 원본 배열의 순서대로 정렬 => 원본 배열 순서에서 시작하기 때문에 정렬되어 있음
arr.sort((a, b) => +a.split(" ")[0] - +b.split(" ")[0]);

console.log(arr.join("\n"));