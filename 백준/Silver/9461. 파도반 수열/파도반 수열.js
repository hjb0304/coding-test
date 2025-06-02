const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line.trim());
});

rl.on("close", () => {
  const [n, ...arr] = input;
  const max = Math.max(...arr.map(Number));

  // 변의 길이 배열
  const dp = Array(max).fill(1);

  let answer = "";

  // 배열 채우기: dp[0] + dp[1] = dp[3]
  for (let i = 3; i < dp.length; i++) {
    dp[i] = dp[i - 3] + dp[i - 2];
  }

  for (let num of arr) {
    answer += dp[num - 1] + "\n";
  }

  console.log(answer);

  process.exit();
});