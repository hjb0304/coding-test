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
  const dp = Array(12).fill(0);
  let answer = "";

  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;

  // 1에서 n까지의 방법의 수 저장: n의 방법의 수 = n-3~n-1까지의 방법의 수
  for (let i = 4; i < dp.length; i++) {
    dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
  }

  for (let num of arr) {
    answer += dp[+num] + "\n";
  }

  console.log(answer);

  process.exit();
});