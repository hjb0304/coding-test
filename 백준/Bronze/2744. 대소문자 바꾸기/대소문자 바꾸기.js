const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
let answer = "";

[...input].forEach((i) => {
  answer += i === i.toUpperCase() ? i.toLowerCase() : i.toUpperCase();
});

console.log(answer);