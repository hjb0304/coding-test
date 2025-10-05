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
  let [num, ...arr] = input;
  const [n, m] = num.split(" ").map(Number);
  arr = arr.map((row) => row.split(" "));
  const moves = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const queue = [];
  let count = 0;
  let day = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 익은 토마토는 큐에 넣기
      if (arr[i][j] === "1") {
        queue.push([i, j, 0]);
        // 안 익은 토마토는 개수 세기
      } else if (arr[i][j] === "0") count++;
    }
  }

  let first = 0;

  while (first < queue.length) {
    // shift 시간초과로 인덱스를 대신 사용
    const [y, x, days] = queue[first++];
    day = days;

    for (let move of moves) {
      const [ny, nx] = [y + move[0], x + move[1]];
      // 익지 않은 토마토의 경우만 이동
      if (ny >= 0 && nx >= 0 && ny < m && nx < n && arr[ny][nx] === "0") {
        arr[ny][nx] = "1";
        count--;
        queue.push([ny, nx, days + 1]);
      }
    }
  }

  // count가 남아있으면 다 익지 못하는 상태
  console.log(count ? -1 : day);

  process.exit();
});