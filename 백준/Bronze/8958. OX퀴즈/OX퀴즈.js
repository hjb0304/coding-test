const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let a = parseInt(input[0]);

for (let i = 1; i <= a; i++) {
  let answer = 0;
  let acc = 0;
  [...input[i]].forEach((j) => {
    if (j === "O") {
      acc++;
      answer += acc;
    } else {
      acc = 0;
    }
  });
  console.log(answer);
}
