const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  // 대괄호
  let big = 0;
  // 중괄호
  let sm = 0;
  // 여는 괄호를 담는 배열 생성
  let open = [];
  for (let j = 0; j < input[i].length; j++) {
    // 괄호를 열면 해당 괄호 변수 1 증가, 여는 괄호 배열에 추가
    if (input[i][j] === "[") {
      big++;
      open.push("[");
      //  괄호를 닫으면 해당 괄호 변수 1 감소, 여는 괄호 배열에서 제거
    } else if (input[i][j] === "]") {
      big--;
      // 여는 괄호 배열 마지막 요소가 해당 괄호가 아니면 반복문 탈출
      if (open[open.length - 1] !== "[") {
        break;
      }
      open.pop();
    } else if (input[i][j] === "(") {
      sm++;
      open.push("(");
    } else if (input[i][j] === ")") {
      sm--;
      if (open[open.length - 1] !== "(") {
        break;
      }
      open.pop();
    }
  }
  // 두 괄호 모두 짝이 맞으면(최종 값이 0) 균형잡힌 문자열
  console.log(!big && !sm ? "yes" : "no");
}