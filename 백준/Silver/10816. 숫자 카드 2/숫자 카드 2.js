const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const cards = input[1].split(" ");
const numbers = input[3].split(" ");
const obj = {};
let answer = [];

// 각 숫자 카드의 수를 객체에 담음
for (let card of cards) {
  if (obj.hasOwnProperty(card)) {
    obj[card]++;
  } else {
    obj[card] = 1;
  }
}

// 각각의 정수가 숫자 카드 배열에 몇 개 있는지 세어 새 배열에 추가
numbers.forEach((number) => {
  answer.push(!obj[number] ? 0 : obj[number]);
});

console.log(answer.join(" "));