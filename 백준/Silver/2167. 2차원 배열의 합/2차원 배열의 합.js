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
  const map = input.slice(1, 1 + n).map((str) => str.split(" ").map(Number));
  const samples = input.slice(n + 2);
  const answer = [];

  for (let sample of samples) {
    let sum = 0;
    const [i, j, x, y] = sample.split(" ").map(Number);
    // (i,j)가 첫 꼭짓점, (x,y)가 마지막 꼭짓점일 때 그 사이 구간 합
    // 행이 i 이상 x 이하이며 열이 j 이상 y 이하인 숫자들 더하기
    for (let row = i - 1; row < x; row++) {
      for (let col = j - 1; col < y; col++) {
        sum += map[row][col];
      }
    }
    answer.push(sum);
  }

  console.log(answer.join("\n"));

  process.exit();
});