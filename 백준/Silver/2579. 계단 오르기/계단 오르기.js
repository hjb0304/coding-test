const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
});

rl.on("close", () => {
  const [n, ...stair] = input.map(Number);
  // 각 계단에서 얻을 수 있는 점수의 최댓값
  const dp = Array(n).fill(0);

  if (n === 1) {
    console.log(stair[0]);
    return;
  }

  dp[0] = stair[0];
  dp[1] = dp[0] + stair[1];
  dp[2] = Math.max(dp[0] + stair[2], stair[1] + stair[2]);

  for (let i = 3; i < stair.length; i++) {
    // 두 가지 방법
    dp[i] = Math.max(dp[i - 2] + stair[i], dp[i - 3] + stair[i - 1] + stair[i]);
  }

  console.log(dp[n - 1]);

  process.exit();
});