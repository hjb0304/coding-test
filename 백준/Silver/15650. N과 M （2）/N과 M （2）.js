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
  const [n, m] = input[0].split(" ").map(Number);
  const visited = Array(n + 1).fill(false);
  const answer = [];

  function dfs(idx, arr) {
    // m개 완성되면 push
    if (arr.length === m) {
      answer.push(arr.join(" "));
      return;
    }

    // idx 이상 숫자들만 선택
    for (let i = idx; i <= n; i++) {
      dfs(i + 1, [...arr, i]);
    }
  }

  dfs(1, []);

  console.log(answer.join("\n"));

  process.exit();
});