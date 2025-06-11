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
  // - 기준으로 나눔눔
  const arr = input[0].split("-");
  let answer = 0;

  arr.forEach((exp, i) => {
    let sum = 0;
    // 묶인 숫자들 모두 더하기
    let nums = exp.split("+");
    for (let num of nums) {
      sum += +num;
    }
    // 더한 수의 합을 정답에서 빼기 (첫번째 수는 더하기)
    answer = !i ? sum : answer - sum;
  });

  console.log(answer);

  process.exit();
});