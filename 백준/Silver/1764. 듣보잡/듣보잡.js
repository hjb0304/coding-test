const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let [number, ...arr] = input;
let n = number.split(" ")[0];
let m = number.split(" ")[1];
let obj = {};
let answer = [];

// 배열 전체 요소의 개수를 객체에 담음
for (let i = 0; i < arr.length; i++) {
  // 요소가 이미 있는 경우(중복) 정답 배열에 담음
  if (obj.hasOwnProperty(arr[i])) {
    answer.push(arr[i]);
  } else {
    obj[arr[i]] = 1;
  }
}

// 사전순으로 정렬
answer.sort();

console.log(answer.length + "\n" + answer.join("\n"));