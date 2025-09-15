const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

let n = parseInt(input[0]);
let k = parseInt(input[1]);

// 1부터 n까지의 배열 생성
let arr = Array.from({ length: n }, (_, i) => i + 1);
const answer = [];
let i = k - 1;

while (arr.length > 0) {
  // 요소 배열에 추가 후 제거
  answer.push(arr[i]);
  arr.splice(i, 1);
  // 현재 인덱스에서 k - 1만큼 이동
  // 인덱스가 배열의 길이 - 1보다 클 경우 앞으로 돌아가야 하므로 배열의 길이로 나눈 나머지 구함
  i = (i + k - 1) % arr.length;
}

console.log("<" + answer.join("," + " ") + ">");