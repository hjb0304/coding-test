const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

let a = parseInt(input[0]);
let b = parseInt(input[1]);
let c = parseInt(input[2]);
let price = 0;

// 같은 눈 3개
if (a === b && b === c) {
  price = 10000 + a * 1000;
  // 모두 다른 눈
} else if (a !== b && b !== c && a !== c) {
  price = Math.max(a, b, c) * 100;
  // 같은 눈 2개
} else {
  if (a === b || a === c) {
    price = 1000 + a * 100;
  } else if (b === c) {
    price = 1000 + b * 100;
  }
}

console.log(price);