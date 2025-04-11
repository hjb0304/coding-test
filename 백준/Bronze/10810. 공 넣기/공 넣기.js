const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let n = parseInt(input[0].split(" ")[0]);

// n개의 바구니를 나타내는 배열을 생성해 0으로 채움
let basket = new Array(n).fill(0);

for (let idx = 1; idx < input.length; idx++) {
  const [i, j, k] = input[idx].split(" ").map(Number);
  // i번부터 j번까지의 공 번호를 k로 할당
  for (let l = i - 1; l < j; l++) {
    basket[l] = k;
  }
}

console.log(basket.join(" "));