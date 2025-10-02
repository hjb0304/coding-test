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
  const [num, arr] = input;
  const [n, k] = num.split(" ").map(Number);
  const weights = arr.split(" ").map(Number);
  let count = 0;

  // 고양이 무게 가벼운 순서대로 정렬
  weights.sort((a, b) => a - b);
  // 제일 가벼운 무게, 제일 무거운 무게 포인터 설정
  let left = 0;
  let right = n - 1;

  while (left < right) {
    // 제일 가벼운 고양이 + 제일 무거운 고양이 가능할 시 올리고 다음으로 이동
    if (weights[left] + weights[right] <= k) {
      left++;
      right--;
      count++;
      // 불가능할 시 덜 무거운 고양이로 이동
    } else {
      right--;
    }
  }

  console.log(count);

  process.exit();
});