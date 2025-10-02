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
  const n = +input[0];
  const arr = [];
  let idx = 0;

  // 1부터 n까지의 카드
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  if (arr.length === 1) {
    console.log(1);
    return;
  }

  // shift() 대신 인덱스 이동
  // 마지막과 마지막-1번째 숫자가 같아지면 종료
  while (arr[arr.length - 1] !== arr[arr.length - 2]) {
    // 위에 있는 카드 버리기
    idx++;
    // 위에 있는 카드 제일 아래로 옮기기
    arr.push(arr[idx]);
    idx++;
  }

  console.log(arr[arr.length - 1]);

  process.exit();
});