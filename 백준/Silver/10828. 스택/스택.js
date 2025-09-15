const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const arr = [];

for (let command of input) {
  command = command.trim();
  // 스택은 LIFO(후입선출)
  if (command === "pop") {
    console.log(arr.length ? arr.pop() : -1);
  } else if (command === "size") {
    console.log(arr.length);
  } else if (command === "empty") {
    console.log(arr.length ? 0 : 1);
  } else if (command === "top") {
    console.log(arr.length ? arr[arr.length - 1] : -1);
  } else if (command.startsWith("push")) {
    let number = +command.split(" ")[1];
    arr.push(number);
  }
}