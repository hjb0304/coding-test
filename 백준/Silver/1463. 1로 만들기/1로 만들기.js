const fs = require("fs");
let input = +fs.readFileSync(0).toString().trim();

// DP(다이나믹 프로그래밍) 방식으로 풀이
const dp = Array(input + 1).fill(0);

for (let i = 2; i <= input; i++) {
  // 1을 빼는 경우
  dp[i] = dp[i - 1] + 1;
  // 2로 나눠지는 경우
  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  }
  // 3으로 나눠지는 경우
  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }
}

console.log(dp[input]);