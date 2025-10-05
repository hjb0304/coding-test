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
  const answer = [];
  const visited = Array.from({ length: +n }, () => Array(+n).fill(false));
  const moves = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  function dfs(y, x) {
    visited[y][x] = true;
    answer[answer.length - 1]++;

    for (let move of moves) {
      const [ny, nx] = [y + move[0], x + move[1]];
      if (
        ny >= 0 &&
        nx >= 0 &&
        ny < +n &&
        nx < +n &&
        !visited[ny][nx] &&
        arr[ny][nx] === "1"
      ) {
        dfs(ny, nx);
      }
    }
  }

  for (let i = 0; i < +n; i++) {
    for (let j = 0; j < +n; j++) {
      if (!visited[i][j] && arr[i][j] === "1") {
        // 단지 찾을 때마다 push 후 dfs에서 증가
        answer.push(0);
        dfs(i, j);
      }
    }
  }

  console.log(answer.length + "\n" + answer.sort((a, b) => a - b).join("\n"));

  process.exit();
});