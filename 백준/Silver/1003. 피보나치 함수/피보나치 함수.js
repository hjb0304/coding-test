const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let [n, ...array] = input;
array = array.map(Number);
let answer = "";

// DP(다이나믹 프로그래밍) 방식으로 풀이
for (let i = 0; i < array.length; i++) {
  // 빈 배열 생성
  const dp = Array.from(Array(array[i] + 1), () => new Array(2).fill(0));
  dp[0] = [1, 0];
  if (array[i] > 0) {
    dp[1] = [0, 1];
  }
  // 피보나치 함수로 배열 채우기
  for (let j = 2; j <= array[i]; j++) {
    // 0의 출력 횟수
    dp[j][0] = dp[j - 2][0] + dp[j - 1][0];
    // 1의 출력 횟수
    dp[j][1] = dp[j - 2][1] + dp[j - 1][1];
  }
  answer += dp[array[i]].join(" ") + "\n";
}

console.log(answer);