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
  let answer = "";
  4 + 3;
  for (let i = 0; i < arr.length; i++) {
    // 케이스별로 obj에 옷 종류별로 넣기
    const obj = {};
    for (let j = i + 1; j <= i + +arr[i]; j++) {
      const [clothName, clothType] = arr[j].split(" ");
      if (obj[clothType]) {
        obj[clothType].push(clothName);
      } else {
        obj[clothType] = [clothName];
      }
    }
    answer += wearClothes(obj) + "\n";
    i += +arr[+i];
  }

  function wearClothes(obj) {
    let count = 1;
    for (let cloth in obj) {
      // 해당 종류를 안 입은 경우까지 포함해서 모든 종류의 수를 곱하기
      count *= 1 + obj[cloth].length;
    }
    // 아무것도 안 입은 경우 제외
    return count - 1;
  }

  console.log(answer);

  process.exit();
});