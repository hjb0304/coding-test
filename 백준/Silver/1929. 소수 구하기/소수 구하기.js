const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

let m = parseInt(input[0]);
let n = parseInt(input[1]);
let answer = [];

for (let i = m; i <= n; i++) {
  let valid = true;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    // 1과 자기 자신 외에 나누어지면 소수가 아님 (제곱근까지만 계산)
    if (i % j === 0) {
      valid = false;
      break;
    }
  }
  // 한번도 나누어지지 않았다면 소수(1은 소수가 아니므로 제외)
  if (valid && i !== 1) {
    answer.push(i);
  }
}

console.log(answer.join("\n"));