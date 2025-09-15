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
  let m = +input[0].split(" ")[1];
  let trees = input[1].split(" ").map(Number);

  let low = 0;
  let high = Math.max(...trees);
  let answer = 0;

  while (low <= high) {
    // 중간값부터 시작
    let mid = Math.floor((low + high) / 2);
    let sum = 0;

    // 자른 나무의 총합 구하기
    for (let tree of trees) {
      if (tree > mid) {
        sum += tree - mid;
      }
    }

    // 합이 더 크거나 같은 경우: 결과 저장하고 높이 증가시키기
    if (sum >= m) {
      answer = mid;
      low = mid + 1;
      // 합이 더 작은 경우: 높이 감소시키기
    } else if (sum < m) {
      high = mid - 1;
    }
  }

  console.log(answer);

  process.exit();
});