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
 * Complete the 'climbingLeaderboard' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 */

function climbingLeaderboard(ranked, player) {
  // Write your code here
  const answer = [];
  // 중복 제거
  const arr = [...new Set(ranked)];

  // 한쪽 배열만 정렬되어 있다면 이진탐색 사용
  // for (let score of player) {
  //   // 제일 큰 랭크 점수보다 크면 1번째
  //   if (arr[0] < score) {
  //     answer.push(1);
  //     // 제일 작은 랭크 점수보다 작으면 마지막번째
  //   } else if (arr[arr.length - 1] > score) {
  //     answer.push(arr.length + 1);
  //   } else {
  //     // 중간 점수라면 이진탐색
  //     let left = 0;
  //     let right = arr.length - 1;

  //     while (left <= right) {
  //       const mid = Math.floor((left + right) / 2);
  //       if (arr[mid] > score) {
  //         left = mid + 1;
  //       } else {
  //         right = mid - 1;
  //       }
  //     }
  //     answer.push(left + 1);
  //   }
  // }

  // 두 배열 모두 정렬되어 있다면 투포인터 사용
  let i = arr.length - 1;

  for (let score of player) {
    while (i >= 0 && score >= arr[i]) {
      i--;
    }
    answer.push(i + 2);
  }

  return answer;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const rankedCount = parseInt(readLine().trim(), 10);

  const ranked = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((rankedTemp) => parseInt(rankedTemp, 10));

  const playerCount = parseInt(readLine().trim(), 10);

  const player = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((playerTemp) => parseInt(playerTemp, 10));

  const result = climbingLeaderboard(ranked, player);

  ws.write(result.join("\n") + "\n");

  ws.end();
}
