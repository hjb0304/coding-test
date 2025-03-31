var fs = require('fs');
var input = fs.readFileSync(0).toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a+b);
