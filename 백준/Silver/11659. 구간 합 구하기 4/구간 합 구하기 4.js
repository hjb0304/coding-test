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
  let [n, numbers, ...arr] = input;
  numbers = numbers.split(" ").map(Number);
  // 숫자들의 합을 누적하는 배열
  let sumArr = [numbers[0]];
  let answer = [];

  for (let i = 1; i < numbers.length; i++) {
    sumArr[i] = numbers[i] + sumArr[i - 1];
  }

  for (let item of arr) {
    // 합을 구할 구간
    const [start, end] = item.split(" ").map(Number);

    // 마지막 수까지의 합에서 첫번째 수-1까지의 합 빼기
    if (start === 1) {
      answer.push(sumArr[end - 1]);
    } else {
      answer.push(sumArr[end - 1] - sumArr[start - 2]);
    }
  }

  console.log(answer.join("\n"));

  process.exit();
});
