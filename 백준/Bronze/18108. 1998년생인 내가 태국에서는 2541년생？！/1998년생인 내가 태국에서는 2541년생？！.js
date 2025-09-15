let fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let year = parseInt(input);

console.log(year - (2541 - 1998));