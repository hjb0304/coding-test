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

  for (let i = 0; i < arr.length; i += 3) {
    const [m, start, end] = arr.slice(i, i + 3);
    answer.push(moveKnight(m, start, end));
  }

  function moveKnight(m, start, end) {
    // 대각선으로 이동하는 경우의 수
    const visited = Array.from({ length: m }, () => Array(m).fill(false));
    const moves = [
      [-1, -2],
      [-2, -1],
      [-2, 1],
      [-1, 2],
      [1, -2],
      [2, -1],
      [2, 1],
      [1, 2],
    ];
    const [sy, sx] = start.split(" ").map(Number);
    const [ey, ex] = end.split(" ").map(Number);
    const queue = [[sy, sx, 0]];
    visited[sy][sx] = true;

    while (queue.length) {
      const [y, x, count] = queue.shift();
      if (y === ey && x === ex) return count;

      for (let move of moves) {
        const [ny, nx] = [y + move[0], x + move[1]];
        if (ny >= 0 && nx >= 0 && ny < m && nx < m && !visited[ny][nx]) {
          // 다른 칸으로 이동하기 전에 방문처리
          visited[ny][nx] = true;
          queue.push([ny, nx, count + 1]);
        }
      }
    }
  }

  console.log(answer.join("\n"));

  process.exit();
});
