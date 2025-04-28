const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let [n, ...arr] = input;
arr = arr.map(Number);
let sum = 0;

// 산술평균
for (num of arr) {
  sum += num;
}

console.log(!Math.round(sum / arr.length) ? 0 : Math.round(sum / arr.length));

// 중앙값
let copyArr = [...arr];
// 오름차순 정렬
copyArr.sort((a, b) => a - b);
console.log(copyArr[Math.floor(copyArr.length / 2)]);

// 최빈값
let most = 0;
// arr에 나타나는 숫자 개수의 Map
let count = new Map();
copyArr.forEach((i) => {
  // Map에 키가 있다면 값에 1 더해줌
  if (count.has(i)) {
    count.set(i, count.get(i) + 1);
    // Map에 키가 없다면 키와 값을 추가해줌
  } else {
    count.set(i, 1);
  }
});

// 숫자 개수 배열을 많이 나온 순서대로 정렬
let countArr = [...count.entries()];
countArr.sort((a, b) => b[1] - a[1]);

// 두번째로 작은 값: 배열의 길이가 1이거나 최빈값을 갖는 요소가 하나인 경우 첫번째 값을,
// 그렇지 않은 경우 두번째 값
console.log(
  countArr.length === 1 || countArr[0][1] !== countArr[1][1]
    ? countArr[0][0]
    : countArr[1][0]
);

// 범위
console.log(copyArr[copyArr.length - 1] - copyArr[0]);