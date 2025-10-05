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
  const [t, ...samples] = input;
  const answer = [];

  for (let i = 0; i < samples.length; i += 3) {
    let [p, n, arr] = samples.slice(i, i + 3);
    // 문자열 배열로 변환
    arr = JSON.parse(arr);
    runAC(p, n, arr);
  }

  function runAC(p, n, arr) {
    let isReverse = false;
    let first = 0;
    let last = arr.length;

    for (let i = 0; i < p.length; i++) {
      if (p[i] === "R") {
        // reverse 여부를 기록해두고 마지막에 뒤집기
        isReverse = !isReverse;
      } else {
        if (first >= last) {
          answer.push("error");
          return;
        }
        // arr.shift();
        // shift 대신 시작/끝 투포인터로 첫 숫자 제거
        if (isReverse) {
          last--;
        } else first++;
      }
    }

    arr = arr.slice(first, last);
    if (isReverse) arr.reverse();

    // 배열 문자열로 변환
    answer.push(`[${arr.join(",")}]`);
  }

  console.log(answer.join("\n"));

  process.exit();
});