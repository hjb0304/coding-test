const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
const obj = {};
let answer = "";

// 사이트와 비밀번호를 담은 객체
for (let i = 1; i <= n; i++) {
  let [site, pw] = input[i].split(" ");
  obj[site] = pw;
}

// 사이트의 비밀번호 찾기'
for (let i = n + 1; i < input.length; i++) {
  answer += obj[input[i]] + "\n";
}

console.log(answer);