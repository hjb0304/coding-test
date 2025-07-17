function solution(maps) {
    var answer = 0;
    // 상하좌우 이동
    const move = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let que = [];
    
    // 시작점 찾기
    for(let i = 0; i < maps.length; i++) {
        for(let j = 0; j < maps[0].length; j++) {
            if(maps[i][j] === 'S') que.push([i, j, 0]);
        }
    }

    function bfs(finish) {
        let visited = Array.from({length: maps.length}, () => Array(maps[0].length).fill(false));   
        // 시작점 방문 처리
        const [startX, startY, startCount] = que[0];
        visited[startX][startY] = true;        
        while(que.length) {
            const [x, y, count] = que.shift();
            if(maps[x][y] === finish) {
                return [x, y, count];
            };
        
            for(let direction of move) {
                const newX = x + direction[0];
                const newY = y + direction[1];
                if(newX >= 0 && newY >= 0 && newX < maps.length && newY < maps[0].length && !visited[newX][newY] && maps[newX][newY] !== 'X') {
                    // 큐에 넣기 전에 방문 처리!
                    visited[newX][newY] = true;
                    que.push([newX, newY, count + 1]);
           }
        } }
    }
    
    // 레버까지 도착
    const lever = bfs("L");
    if(!lever) return -1;
    // 큐를 초기화해야 함
    que = [[lever[0], lever[1], 0]];
    // 도착점까지 도착
    const exit = bfs("E");
    if(!exit) return -1;
    
    return lever[2] + exit[2];
}