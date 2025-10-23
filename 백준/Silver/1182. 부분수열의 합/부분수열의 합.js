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
  const [num, arr] = input.map((item) => item.split(" ").map(Number));
  const [n, s] = num;
  arr.sort((a, b) => a - b);
  let answer = 0;

  function dfs(sum, idx) {
    if (idx > 0 && sum === s) {
      answer++;
    }

    // 중복 방지를 위해 idx이상의 수만 더함
    for (let i = idx; i < n; i++) {
      const number = arr[i];
      dfs(sum + number, i + 1);
    }
  }

  dfs(0, 0);

  console.log(answer);

  process.exit();
});