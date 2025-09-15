const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const arr = [];

for (let command of input) {
  command = command.trim();
  // 큐는 FIFO(선입선출)
  if (command === "pop") {
    console.log(arr.length ? arr.shift() : -1);
  } else if (command === "size") {
    console.log(arr.length);
  } else if (command === "empty") {
    console.log(arr.length ? 0 : 1);
  } else if (command === "front") {
    console.log(arr.length ? arr[0] : -1);
  } else if (command === "back") {
    console.log(arr.length ? arr[arr.length - 1] : -1);
  } else if (command.startsWith("push")) {
    let number = +command.split(" ")[1];
    arr.push(number);
  }
}