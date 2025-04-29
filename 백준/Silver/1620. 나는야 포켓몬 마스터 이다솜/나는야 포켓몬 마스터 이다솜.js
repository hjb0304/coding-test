const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let [number, ...arr] = input;
let n = +number.split(" ")[0];
let m = +number.split(" ")[1];
let obj = {};
let answer = [];

// 포켓몬의 이름과 번호를 객체에 담음
for (let i = 0; i < n; i++) {
  obj[arr[i]] = i;
}

// m개의 문제 답 구하기
for (let i = n; i < arr.length; i++) {
  let question = arr[i];

  // 문제가 알파벳일 경우
  if (isNaN(+question)) {
    answer.push(obj[question] + 1);
  }
  // 문제가 숫자일 경우
  else {
    answer.push(arr[+question - 1]);
  }
}

console.log(answer.join("\n"));