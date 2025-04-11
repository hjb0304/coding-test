const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let a = parseInt(input[0]);

// 사람별 덩치 등수를 담을 배열 생성
let arr = new Array(a).fill(1);

// 자신과 다른 사람들의 덩치를 비교
for (let i = 1; i < input.length; i++) {
  // 자신의 몸무게와 키
  const [x, y] = input[i].split(" ").map(Number);
  for (let j = i + 1; j < input.length; j++) {
    // 상대방의 몸무게와 키
    const [p, q] = input[j].split(" ").map(Number);
    // 더 작으면 자신의 등수 증가
    if (x < p && y < q) {
      arr[i - 1]++;
      // 더 크면 상대방 등수 증가
    } else if (x > p && y > q) {
      arr[j - 1]++;
    }
  }
}

console.log(arr.join(" "));