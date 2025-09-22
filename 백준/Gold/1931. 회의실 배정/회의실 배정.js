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
  let max = 0;

  const meetings = arr.map((meeting) => meeting.split(" ").map(Number));

  // 종료/시작 시간 빠른 순으로 정렬
  meetings.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

  let sum = 1;
  // 종료 시간이 가장 빠른 회의부터 시작하면 최대로 회의 가능
  let time = meetings[0][1];

  for (let i = 1; i < n; i++) {
    const [start, end] = meetings[i];

    // 시작 시간이 마지막 종료 시간보다 크면 회의 시작
    if (start >= time) {
      sum++;
      time = end;
    }

    max = Math.max(sum, max);
  }

  console.log(max);

  process.exit();
});
