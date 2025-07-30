function solution(maps) {
    var answer = [];
    const moves = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const visited = Array.from({length: maps.length}, () => Array(maps[0].length).fill(false));
    
    function dfs(x, y) {
        // 현재 칸 누적
        let sum = +maps[x][y];
        
        for(let move of moves) {
            const newX = x + move[0];
            const newY = y + move[1];
            
            if(newX >= 0 && newY >= 0 && newX < maps.length && newY < maps[0].length && !visited[newX][newY] && maps[newX][newY] !== "X") {
                visited[newX][newY] = true;
                // sum 누적
                sum += dfs(newX, newY);            
            }
        }
        // 모든 상황에서 값 반환
        return sum;
    }
    
    // 모든 칸에서 시작
    for(let i = 0; i < maps.length; i++) {
        for(let j = 0; j < maps[0].length; j++) {
            // 칸이 바다거나 방문한 적 있으면 탐색 X
            if(maps[i][j] !== "X" && !visited[i][j]) {
                // 시작 칸 방문 표시, sum에 포함
                visited[i][j] = true;
                const result = dfs(i, j, +maps[i][j]);
                if(result > 0) answer.push(result);}
        }
    }
    
    return answer.length ? answer.sort((a, b) => a - b) : [-1];
}