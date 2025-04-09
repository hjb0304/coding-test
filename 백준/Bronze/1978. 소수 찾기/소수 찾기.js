const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let a = parseInt(input[0]);
let arr = input[1].split(" ").map(Number);
let answer = 0;

for (let i = 0; i < a; i++) {
  let valid = true;
  // 2부터 자기자신-1까지 나눠서 나머지가 0이 나오면 소수가 아님(valid = false)
  for (let j = 2; j < arr[i]; j++) {
    if (arr[i] % j === 0) {
      valid = false;
      break;
    }
  }
  // 1은 소수가 아님
  if (valid && arr[i] !== 1) {
    answer++;
  }
}

console.log(answer);