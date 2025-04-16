const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

// 설탕량을 5로 나눠 5kg 봉지 수와 나머지 설탕량을 구함
let quo = Math.floor(+input / 5);
let remain = +input % 5;

// 나머지가 0이 될 때까지 3으로 나눔
while (remain && quo >= 0) {
  if (!(remain % 3)) {
    quo += Math.floor(remain / 3);
    remain = remain % 3;
    break;
  }
  // 3으로 나누어떨어지지 않으면 5kg 봉지 수를 하나 빼고 나머지 설탕량 5kg 증가
  quo--;
  remain += 5;
}

console.log(remain ? -1 : quo);