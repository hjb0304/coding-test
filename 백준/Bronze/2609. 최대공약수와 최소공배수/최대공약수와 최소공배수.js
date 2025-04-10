const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

let a = parseInt(input[0]);
let b = parseInt(input[1]);


let max = Math.max(a, b);
let min = Math.min(a, b);

// 최대공약수: 유클리드 호제법
// a > b일 때 a % b를 구한다.
// => b % (a % b)를 구한다.
// => 나머지가 0이 될 때까지 나눈다.
function gcd(max, min) {
  while (min > 0) {
    let remain = max % min;
    max = min;
    min = remain;
  }
  // 나머지가 0일 때 더 큰 수가 최대공약수
  return max;
}

// 최소공배수: 두 수를 곱한 값에서 최대공약수를 나눔
console.log(gcd(max, min), (max * min) / gcd(max, min));