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
  const [n, ...arr] = input;
  const s = arr.map((item) => item.split(" ").map(Number));
  const teams = Array.from({ length: +n }, (_, i) => i);
  const set = new Set(teams);
  let min = Infinity;

  // 팀별 점수 계산
  function getSum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
      if (i === arr.length - 1) break;
      for (let j = i + 1; j < arr.length; j++) {
        const [a, b] = [arr[i], arr[j]];
        sum += s[a][b] + s[b][a];
      }
    }

    return sum;
  }

  function dfs(idx, count) {
    // 절반씩 나뉘면 점수계산 후 갱신
    if (count === +n / 2) {
      const firstTeam = [];
      for (let i = 0; i < teams.length; i++) {
        if (!set.has(i)) firstTeam.push(i);
      }
      const arr = [...set];

      min = Math.min(min, Math.abs(getSum(firstTeam) - getSum(arr)));
      return;
    }

    // 팀 나누기
    for (let i = idx; i < teams.length; i++) {
      const team = teams[i];
      if (set.has(team)) {
        set.delete(team);
        dfs(i + 1, count + 1);
        set.add(team);
      }
    }
  }

  dfs(0, 0);

  console.log(min);

  process.exit();
});