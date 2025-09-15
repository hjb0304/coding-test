const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

let a = parseInt(input[0]);
let b = parseInt(input[1]);
let v = parseInt(input[2]);

let height = 0;

// 달팽이는 매일 a - b만큼 올라간다. 마지막 날은 b만큼 올라가지 않는다.
// 전체 높이에서 마지막 날 올라가지 않는 높이(b)를 빼고 매일 올라가는 높이(a - b)로 나눈다.
// 나머지가 0이 아닌 경우 하루 더 올라가야 함 => 올림
let day = Math.ceil((v - b) / (a - b));

// 반복문: 시간초과
// while (height < v) {
//   day++;
//   height += a;
// 정상에 올라가지 않은 경우 미끄러짐
//   if (height < v) {
//     height -= b;
//   }
// }

console.log(day);