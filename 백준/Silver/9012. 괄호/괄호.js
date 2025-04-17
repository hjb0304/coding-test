const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

for (let i = 1; i < input.length; i++) {
  // 여는 괄호일 경우 count 증가, 닫는 괄호일 경우 감소
  let count = 0;
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "(") {
      count++;
    } else {
      count--;
    }
    // 여는 괄호보다 닫는 괄호가 많아질 경우 count가 음수 => 반복문 탈출
    if (count < 0) {
      break;
    }
  }
  // count가 0일 때 올바른 괄호
  console.log(!count ? "YES" : "NO");
}