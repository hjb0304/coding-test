const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

// 첫번째 요소 제거 후 number로 변환
input.splice(0, 1);
input = input.map(Number);

// 의견이 없을 경우 난이도는 0
if (!input.length) {
  console.log(0);
} else {
  // 오름차순으로 정렬
  input.sort((a, b) => a - b);

  // 사용자 수의 15%를 구해 반올림
  let except = Math.round(input.length * (15 / 100));

  // 처음과 끝에서 15%을 제외한 배열 생성
  const arr = input.slice(except, input.length - except);

  // 남은 사용자의 평균을 구해 반올림
  let sum = 0;
  for (num of arr) {
    sum += num;
  }

  console.log(Math.round(sum / arr.length));
}