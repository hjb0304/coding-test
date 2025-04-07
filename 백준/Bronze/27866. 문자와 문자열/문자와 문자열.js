const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let a = input[0];
let b = parseInt(input[1]);

console.log(a[b - 1]);