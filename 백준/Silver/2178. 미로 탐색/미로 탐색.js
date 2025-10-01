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
  const [num, ...map] = input;
  const [n, m] = num.split(" ").map(Number);
  const visited = Array.from({ length: map.length }, () =>
    Array(map[0].length).fill(false)
  );
  const queue = [[0, 0, 1]];
  const moves = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let answer = 0;

  while (queue.length) {
    const [y, x, count] = queue.shift();
    // (n, m)에 도착하면 탈출
    if (y === n - 1 && x === m - 1) {
      answer = count;
      break;
    }

    // 상하좌우로 한 칸씩 이동
    for (let move of moves) {
      const [ny, nx] = [y + move[0], x + move[1]];
      if (
        ny >= 0 &&
        nx >= 0 &&
        ny < map.length &&
        nx < map[0].length &&
        !visited[ny][nx] &&
        map[ny][nx] === "1"
      ) {
        visited[ny][nx] = true;
        queue.push([ny, nx, count + 1]);
      }
    }
  }

  console.log(answer);

  process.exit();
});