const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let [num, ...arr] = input;
let n = parseInt(num.split(" ")[0]);
let k = parseInt(num.split(" ")[1]);
arr = arr.map(Number);

let answer = 0;

// 동전 가치가 큰 순서대로 k에서 빼줌
for (let i = n - 1; i >= 0; i--) {
  if (k === 0) {
    break;
  }
  while (k - arr[i] >= 0) {
    k -= arr[i];
    answer++;
  }
}

console.log(answer);