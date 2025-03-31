let fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let x = parseInt(input[0]);
let y = parseInt(input[1]);

if (x > 0) {
  if (y > 0) {
    console.log(1);
  } else console.log(4);
} else if (x < 0) {
  if (y > 0) {
    console.log(2);
  } else console.log(3);
}