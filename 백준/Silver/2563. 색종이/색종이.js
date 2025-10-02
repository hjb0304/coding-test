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
  const map = Array.from({ length: 100 }, () => Array(100).fill(0));

  for (let paper of arr) {
    // (x, y)부터 (x+10, y+10)까지 채우기
    const [x, y] = paper.split(" ").map(Number);
    // x, y는 0부터 시작
    for (let i = x; i < x + 10; i++) {
      for (let j = y; j < y + 10; j++) {
        map[j][i] = 1;
      }
    }
  }
  console.log(map.flat().filter((num) => num === 1).length);

  process.exit();
});