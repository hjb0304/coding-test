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
  const [n, m, ...computer] = input;
  const obj = {};

  for (let i = 0; i < computer.length; i++) {
    // 연결된 컴퓨터를 오름차순으로 정렬 후 객체에 넣기 (양방향)
    const link = computer[i].split(" ");
    const [a, b] = link.map(Number);

    if (obj[a]) {
      obj[a].push(b);
    } else {
      obj[a] = [b];
    }
    if (obj[b]) {
      obj[b].push(a);
    } else {
      obj[b] = [a];
    }
  }

  let count = 0;

  // 각 컴퓨터의 연결 여부
  let linked = Array(+n).fill(false);

  function linkComputer(index) {
    // 해당 번호의 컴퓨터를 연결
    linked[index - 1] = true;

    for (com of obj[index] || []) {
      // 아직 연결되지 않은 컴퓨터일 경우
      if (!linked[com - 1]) {
        count++;
        linkComputer(com);
      }
    }
  }

  linkComputer(1);

  console.log(count);

  process.exit();
});