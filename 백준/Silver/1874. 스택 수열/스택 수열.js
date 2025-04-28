const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let [n, ...arr] = input;
// 입력된 수열
arr = arr.map(Number);
// 수를 넣었다 뺄 스택
let stack = [];
// 새로 만드는 수열
let newArr = [];
// 출력할 연산
let answer = "";
// 1부터 n까지의 숫자
let count = 1;

// newArr를 만드는 반복문
arr.forEach((i) => {
  // stack의 마지막 요소가 i와 같지 않으면 stack에 계속 push, count 증가
  while (stack[stack.length - 1] !== i && count <= +n) {
    stack.push(count);
    answer += "+" + "\n";
    count++;
  }
  // stack의 마지막 요소가 i와 같게 되면 pop => newArr에 추가
  newArr.push(stack.pop());
  answer += "-" + "\n";
});

console.log(arr.toString() === newArr.toString() ? answer : "NO");