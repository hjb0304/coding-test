const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let answer = [];

input.splice(0, 1);

// 각 테스트 케이스 순회
for (let i = 0; i < input.length; i += 2) {
  // 1
  // 찾고자 하는 문서의 순서
  let order = +input[i].split(" ")[1]; // 0
  // 문서의 중요도 배열
  let arr = input[i + 1].split(" ").map(Number); // 312
  // 인쇄된 문서 수
  let print = 0;

  // 남아있는 문서가 없을 때까지 반복
  while (arr.length > 0) {
    // 첫번째 문서보다 중요도가 더 높은 문서가 뒤에 있는지 확인
    let important = false;
    for (let k = 1; k < arr.length; k++) {
      // 있다면 반복문 탈출
      if (arr[k] > arr[0]) {
        important = true;
        break;
      }
    }
    // 중요도가 더 높은 문서가 뒤에 있었을 경우: 뒤에 추가
    if (important) {
      arr.push(arr[0]);
      // 없었을 경우: 인쇄 => 인쇄된 문서 수 증가
    } else {
      print++;
      // 없었을 경우에 첫번째 문서가 order라면 인쇄 후 반복문 탈출
      if (order === 0) {
        break;
      }
    }

    // 맨앞 문서 제거
    arr.splice(0, 1);

    // order의 순서 조정
    if (order === 0) {
      order = arr.length - 1;
    } else {
      order--;
    }
  }
  // order가 인쇄된 순서: 프린트된 문서 수
  answer.push(print);
}

console.log(answer.join("\n"));