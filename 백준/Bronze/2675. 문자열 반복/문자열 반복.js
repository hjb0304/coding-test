const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let a = parseInt(input[0]);

for (let i = 1; i <= a; i++) {
  let newStr = "";
  let [num, str] = input[i].split(" ");
  [...str].forEach((j) => {
    newStr += j.repeat(num);
  });
  console.log(newStr);
}