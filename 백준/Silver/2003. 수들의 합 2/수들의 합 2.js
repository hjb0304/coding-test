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
  const [num, str] = input;
  const [n, m] = num.split(" ").map(Number);
  const arr = str.split(" ").map(Number);
  let answer = 0;
  let left = 0;
  let sum = 0;

  // right 이동하며 범위 늘리기
  for (let right = 0; right < n; right++) {
    sum += arr[right];

    // sum > m일 시 left 이동하며 범위 좁히기
    while (sum > m) {
      sum -= arr[left];
      left++;
    }
    
    if (sum === m) answer++;
  }

  console.log(answer);

  process.exit();
});