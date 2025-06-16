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
  let [n, ...arr] = input;
  let squares = [];
  let white = 0;
  let blue = 0;

  // 모든 색종이를 2차원 배열에 넣기
  for (let line of arr) {
    squares.push(line.split(" ").map(Number));
  }

  // 해당 좌표 구간의 사각형이 모두 같은 색인지 확인
  function checkColor(x, y, size) {
    let first = squares[x][y];
    for (let i = x; i < x + size; i++) {
      for (let j = y; j < y + size; j++) {
        if (first !== squares[i][j]) return false;
      }
    }

    if (first === 1) {
      return "blue";
    } else {
      return "white";
    }
  }

  // 넷으로 나누기
  function divide(x, y, size) {
    // 사각형이 단색이면 개수 증가 후 종료
    if (checkColor(x, y, size)) {
      if (checkColor(x, y, size) === "blue") {
        blue++;
      } else {
        white++;
      }
      return;
    } else {
      // 아니라면 4개로 나눔
      let length = size / 2;
      divide(x, y, length);
      divide(x + length, y, length);
      divide(x, y + length, length);
      divide(x + length, y + length, length);
    }
  }

  divide(0, 0, squares.length);

  console.log(white);
  console.log(blue);

  process.exit();
});
