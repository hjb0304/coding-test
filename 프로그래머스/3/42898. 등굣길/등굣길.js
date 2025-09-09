function solution(m, n, puddles) {
    const map = Array.from({length: n}, () => Array(m).fill(0));
    map[0][0] = 1;
    
    // 물에 잠긴 지역 표시
    for(let puddle of puddles) {
        const [x, y] = puddle;
        map[y - 1][x - 1] = -1;
    }
    
    // 각 지역에 갈 수 있는 경우의 수 구하기
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            // 물에 잠긴 지역이면 경우의 수 0
            if(map[i][j] === -1) {map[i][j] = 0; continue;}
            // 둘다 있는 경우: 위+왼 경우의 수 더하기
            if(i > 0) map[i][j] = (map[i][j] + map[i - 1][j]) % 1000000007;
            if(j > 0) map[i][j] = (map[i][j] + map[i][j - 1]) % 1000000007;
        }
    }
    
    return map[n - 1][m - 1];
}