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
  const answer = new Set();

  function dfs(arr) {
    // m개 완성되고 중복되지 않으면 push
    if (arr.length === m) {
      const str = arr.join(" ");
      if (!answer.has(str)) answer.add(str);
      return;
    }

    for (let i = 1; i <= n; i++) {
      dfs([...arr, i]);
    }
  }

  dfs([]);

  console.log([...answer].join("\n"));

  process.exit();
});