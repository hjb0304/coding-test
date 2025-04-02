const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let n = parseInt(input[0].split(" ")[0]);
let m = parseInt(input[0].split(" ")[1]);
let a = [];
let b = [];

for (let i = 1; i < input.length; i++) {
  if (i <= n) {
    a = [...a, input[i].split(" ")];
  } else {
    b = [...b, input[i].split(" ")];
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    a[i][j] = +a[i][j] + +b[i][j];
  }
}

a.forEach((i) => {
  console.log(i.join(" "));
});