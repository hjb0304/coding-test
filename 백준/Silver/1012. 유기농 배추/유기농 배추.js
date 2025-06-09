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
  const [t, ...arr] = input;

  for (let i = 0; i < arr.length; i++) {
    const [m, n, k] = arr[i].split(" ").map(Number);
    const location = [];
    for (let j = 1; j <= k; j++) {
      location.push(arr[i + j]);
    }

    // 전체 밭 좌표를 나타내는 2차원 배열
    const field = Array.from({ length: n }, () => Array(m).fill(0));
    for (let lettuce of location) {
      const [a, b] = lettuce.split(" ").map(Number);
      field[b][a] = 1;
    }
    // 전체 밭 방문 여부를 나타내는 2차원 배열
    const visit = Array.from({ length: n }, () => Array(m).fill(false));
    let count = 0;

    // 전체 밭에서 호출
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (!visit[i][j] && field[i][j]) {
          solution(j, i);
          count++;
        }
      }
    }
    console.log(count);

    i += k;

    function solution(x, y) {
      // 판별할 밭을 담는 배열
      const que = [[x, y]];
      visit[y][x] = true;
      // 상하좌우 이동
      const direction = [
        [0, -1],
        [0, 1],
        [-1, 0],
        [1, 0],
      ];

      while (que.length) {
        const [a, b] = que.shift();
        for (let move of direction) {
          // 이동 후 좌표
          const [moveX, moveY] = [a + move[0], b + move[1]];
          // 이동 후 좌표가 전체 밭 안에 있고 방문한 적이 없고 배추가 있을 때
          if (moveX >= 0 && moveY >= 0 && moveX < m && moveY < n && !visit[moveY][moveX] && field[moveY][moveX]) {
            // 방문 처리 후 큐에 넣기
            visit[moveY][moveX] = true;
            que.push([moveX, moveY]);
          }
        }
      }
    }
  }

  process.exit();
});