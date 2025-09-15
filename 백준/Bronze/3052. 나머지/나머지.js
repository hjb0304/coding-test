const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

input = input.map((i) => +i % 42);

console.log([...new Set(input)].length);