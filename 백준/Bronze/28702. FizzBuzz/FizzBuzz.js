const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let index = 0;

for (let i = 0; i < 3; i++) {
  // 값이 숫자인 경우 인덱스에 숫자를 할당
  if (!isNaN(input[i])) {
    index = +input[i] + 3 - i;
  }
}

// 다음에 올 i가 3의 배수가 아닐 경우
if (index % 3) {
  // 5의 배수가 아닐 경우
  if (index % 5) {
    console.log(index);
  }
  // 5의 배수일 경우
  else {
    console.log("Buzz");
  }
}
// i가 3의 배수일 경우
else {
  // 5의 배수가 아닐 경우
  if (index % 5) {
    console.log("Fizz");
  }
  // 5의 배수일 경우
  else {
    console.log("FizzBuzz");
  }
}