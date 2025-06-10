const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line.trim());
});

rl.on("close", () => {
  const [t, ...arr] = input;
  const [n, m, v] = t.split(" ").map(Number);
  let dfsAnswer = [v];
  let bfsAnswer = [];
  // 양방향 연결 객체
  const link = {};
  // 방문 여부
  let visit = Array(n).fill(false);

  // 객체에 값 넣기
  for (let point of arr) {
    const [start, end] = point.split(" ").map(Number);
    link[start] ? link[start].push(end) : (link[start] = [end]);
    link[end] ? link[end].push(start) : (link[end] = [start]);
  }

  // 객체 값 오름차순으로 정리
  for (let point in link) {
    link[point].sort((a, b) => a - b);
  }

  function dfs(start) {
    visit[start - 1] = true;

    // 시작 정점과 연결된 모든 정점 탐색
    for (let num of link[start] ?? []) {
      // 방문한 적 없을 경우
      if (!visit[num - 1]) {
        // 방문 처리 후 정답 배열에 추가
        visit[num - 1] = true;
        dfsAnswer.push(num);
        // 다른 정점으로 이동
        dfs(num);
      }
    }
  }

  dfs(v);

  visit = Array(n).fill(false);

  function bfs(start) {
    const que = [start];

    while (que.length) {
      const first = que.shift();
      bfsAnswer.push(first);
      visit[first - 1] = true;

      // 시작 정점과 연결된 모든 정점 탐색
      for (let num of link[first] ?? []) {
        // 방문한 적 없을 경우
        if (!visit[num - 1]) {
          // 방문 처리 후 큐에 추가
          visit[num - 1] = true;
          que.push(num);
        }
      }
    }
  }

  bfs(v);

  console.log(dfsAnswer.join(" "));
  console.log(bfsAnswer.join(" "));

  process.exit();
});
