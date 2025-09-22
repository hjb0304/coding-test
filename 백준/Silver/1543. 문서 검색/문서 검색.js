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
  const [str, word] = input;
  let count = 0;
  const length = word.length;
  let i = 0;

  while (i + length <= str.length) {
    // 단어 길이만큼 잘라서 단어랑 같은지 비교
    if (str.slice(i, i + length) === word) {
      count++;
      i += length;
      // 다르면 다음 문자로 이동
    } else {
      i++;
    }
  }

  console.log(count);

  process.exit();
});
