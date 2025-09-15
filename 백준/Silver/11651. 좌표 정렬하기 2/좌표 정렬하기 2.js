const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

input.shift();

// y 좌표를 기준으로 오름차순으로 정리, y 좌표가 같을 시 x 좌표를 기준으로 정리
input.sort(
  (a, b) =>
    +a.split(" ")[1] - +b.split(" ")[1] || +a.split(" ")[0] - +b.split(" ")[0]
);

console.log(input.join("\n"));