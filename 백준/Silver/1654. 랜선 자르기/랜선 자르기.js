const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let [number, ...arr] = input;

let n = parseInt(number.split(" ")[1]);
// let sum = 0;
arr = arr.map(Number);

// 랜선의 길이 합
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }

// // 랜선의 길이(초기값)
// let length = Math.floor(sum / n);
// // 랜선의 개수
// let line = 0;

// 랜선 개수가 n이 아니라면 길이를 줄여서 반복
// while (line < n) {
//   line = 0;
//   for (let j = 0; j < arr.length; j++) {
//     line += Math.floor(arr[j] / length);
//   }
//   if (line === n) {
//     break;
//   } else if (line > n) {
//     length++;
//   } else {
//     length--;
//   }
// }

// 시간 초과로 이진 탐색으로 풀기
// 계산할 랜선 길이 범위의 처음과 끝을 지정
let start = 1;
let end = Math.max(...arr);
let length = 0;

// 탐색이 불가능해질 때까지 탐색
while (start <= end) {
  let sum = 0;
  // 범위의 중간값부터 탐색 시작
  let mid = Math.floor((start + end) / 2);
  // 랜선의 총 개수 구하기
  for (let j = 0; j < arr.length; j++) {
    sum += Math.floor(arr[j] / mid);
  }

  // 랜선의 개수가 n보다 크거나 같을 경우: 길이가 더 긴 경우도 가능한지 확인
  if (sum >= n) {
    length = mid;
    // 좀 더 큰 쪽으로 범위 좁히기
    start = mid + 1;
    // n보다 작을 경우: 값을 줄임
  } else {
    // 좀 더 작은 쪽으로 범위 좁히기
    end = mid - 1;
  }
}

console.log(length);