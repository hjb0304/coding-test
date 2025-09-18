"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'sherlockAndAnagrams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function sherlockAndAnagrams(s) {
  // Write your code here
  const arr = [...s];
  const obj = {};
  let count = 0;

  // 문자열에서 개수별로 부분 문자열 추출 후 정렬해서 객체에 담기
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j <= arr.length - i; j++) {
      const subArr = arr.slice(j, j + i);
      subArr.sort();
      const subStr = subArr.join("");
      obj[subStr] = (obj[subStr] || 0) + 1;
    }
  }

  // 부분 문자열의 수가 1 이상이면 애너그램 존재
  // 중복을 제거하기 위해 n * (n - 1) / 2로 경우의 수 구하기
  for (let subStr in obj) {
    const value = obj[subStr];

    if (value > 1) {
      count += (value * (value - 1)) / 2;
    }
  }

  return count;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const q = parseInt(readLine().trim(), 10);

  for (let qItr = 0; qItr < q; qItr++) {
    const s = readLine();

    const result = sherlockAndAnagrams(s);

    ws.write(result + "\n");
  }

  ws.end();
}
