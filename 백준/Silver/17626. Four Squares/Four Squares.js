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
  let number = +input[0];
  const dp = Array(number + 1).fill(Infinity);
  dp[0] = 0;

  // 1부터 제곱수의 개수 세기
  for (let i = 1; i < number + 1; i++) {
    for (let j = 1; j * j <= i; j++) {
      // i에서 1*1부터 차례로 빼서 나온 제곱수 개수의 최솟값 구하기
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }

  console.log(dp[number]);

  process.exit();
});