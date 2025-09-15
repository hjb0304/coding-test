const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n").map(Number);

for (let i = 1; i < input.length; i += 2) {
  let row = input[i];
  let column = input[i + 1];
  // 0층의 인원수를 배열로 생성 [1, 2, 3...]
  let arr = Array.from({ length: column }, (_, i) => i + 1);
  // 층마다 호별 인원수 업데이트
  for (let k = 1; k <= row; k++) {
    for (let j = 1; j < column; j++) {
      arr[j] = arr[j - 1] + arr[j];
    }
  }
  // row - 1층의 마지막 호수의 인원수
  console.log(arr[arr.length - 1]);
}