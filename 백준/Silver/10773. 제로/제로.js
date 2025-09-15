const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let sum = 0;
let arr = [];

// 스택 방식
for (let i = 1; i < input.length; i++) {
  // 요소가 0일 경우 방금 추가한 요소 총합에서 빼면서 제거
  if (+input[i] === 0) {
    sum -= arr.pop();
    // 요소가 0이 아닐 경우 배열에 요소 추가, 총합에 더함
  } else {
    arr.push(+input[i]);
    sum += +input[i];
  }
}

console.log(sum);