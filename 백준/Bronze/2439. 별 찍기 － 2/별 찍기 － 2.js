const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

for (let i = 1; i <= +input; i++) {
  let space = "";
  let star = "";
  // 공백 개수 구하기
  for (let j = 1; j <= +input - i; j++) {
    space += " ";
  }
  // 별 개수 구하기
  for (let j = 1; j <= i; j++) {
    star += "*";
  }
  console.log(space + star);
}