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

  function dfs(arr) {
    // m개 완성되면 push
    if (arr.length === m) {
      answer.push(arr.join(" "));
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (!visited[i]) {
        visited[i] = true;
        dfs([...arr, i]);
        // 백트래킹
        visited[i] = false;
      }
    }
  }

  dfs([]);

  console.log(answer.join("\n"));

  process.exit();
});