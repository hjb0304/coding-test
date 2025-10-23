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
  const [first, second, ...arr] = input.map((item) =>
    item.split(" ").map(Number)
  );
  const [n, m] = first;
  let [r, c, d] = second;
  let count = 0;

  const moveBack = [
    [1, 0],
    [0, -1],
    [-1, 0],
    [0, 1],
  ];

  const moveFront = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  while (true) {
    // 현재 칸 청소
    if (arr[r][c] === 0) {
      arr[r][c] = 2;
      count++;
    }
    // 주변 4칸이 다 청소되었거나 벽일 경우
    if (
      (r == 0 || arr[r - 1][c]) &&
      (c === 0 || arr[r][c - 1]) &&
      (c === m - 1 || arr[r][c + 1]) &&
      (r === n - 2 || arr[r + 1][c])
    ) {
      const [nr, nc] = [r + moveBack[d][0], c + moveBack[d][1]];
      // 후진 가능하면 후진하고 돌아감
      if (nr >= 0 && nc >= 0 && nr < n && nc < m && arr[nr][nc] !== 1) {
        r = nr;
        c = nc;
        continue;
        // 후진 불가능하면 멈춤
      } else break;
      // 4칸 중 청소 안된 칸이 있으면
    } else {
      // 90도 회전
      d = d === 0 ? 3 : d - 1;
      const [nr, nc] = [r + moveFront[d][0], c + moveFront[d][1]];
      // 전진 가능하면 전진하고 돌아감
      if (nr >= 0 && nc >= 0 && nr < n && nc < m && arr[nr][nc] === 0) {
        r = nr;
        c = nc;
        continue;
      }
    }
  }

  console.log(count);

  process.exit();
});