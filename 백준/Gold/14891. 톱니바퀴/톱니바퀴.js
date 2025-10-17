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
  const wheels = input.slice(0, 4).map((wheel) => wheel.split(""));
  const rotates = input.slice(5).map((rotate) => rotate.split(" ").map(Number));
  let sum = 0;

  function rotateWheel(arr, dir) {
    if (dir === 0) return;
    // 시계방향 회전
    if (dir === 1) {
      const last = arr.pop();
      arr.unshift(last);
    } else {
      // 반시계방향 회전
      const first = arr.shift();
      arr.push(first);
    }
  }

  for (let rotate of rotates) {
    const [num, dir] = rotate;
    const idx = num - 1;
    // 회전방향 기록
    const rotateDir = [0, 0, 0, 0];
    rotateDir[idx] = dir;

    // 오른쪽으로 차례대로 회전
    for (let i = idx; i < 3; i++) {
      if (wheels[i][2] !== wheels[i + 1][6]) {
        rotateDir[i + 1] = -rotateDir[i];
      } else break;
    }

    // 왼쪽으로 차례대로 회전
    for (let i = idx; i > 0; i--) {
      if (wheels[i][6] !== wheels[i - 1][2]) {
        rotateDir[i - 1] = -rotateDir[i];
      } else break;
    }

    // 최종 회전 방향대로 4개 회전
    for (let i = 0; i < 4; i++) {
      rotateWheel(wheels[i], rotateDir[i]);
    }
  }

  // 점수 계산
  if (wheels[0][0] === "1") sum += 1;
  if (wheels[1][0] === "1") sum += 2;
  if (wheels[2][0] === "1") sum += 4;
  if (wheels[3][0] === "1") sum += 8;

  console.log(sum);

  process.exit();
});