const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let arr = input[1].split(" ").map(Number);
// 누적되는 시간
let acc = 0;
// 총 기다리는 시간
let sum = 0;
// 시간은 누적되기 때문에 적은 시간이 앞에 오는 게 효율적 => 오름차순으로 정렬
arr.sort((a, b) => a - b);

for (let i = 0; i < arr.length; i++) {
  sum += acc + arr[i];
  acc += arr[i];
}

console.log(sum);