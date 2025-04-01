const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let currentTime = input[0].split(" ");
let currentHour = +currentTime[0];
let currentMinute = +currentTime[1];
let cookingTime = +input[1];

currentMinute = currentMinute + cookingTime;

// 분이 60 이상일 경우
if (currentMinute >= 60) {
  let hour = Math.floor(currentMinute / 60);
  let minute = currentMinute % 60;
  currentHour += hour;
  currentMinute = minute;
}

// 시가 24 이상일 경우
if (currentHour >= 24) {
  currentHour -= 24;
}

console.log(currentHour + " " + currentMinute);