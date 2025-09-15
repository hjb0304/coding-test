function solution(places) {
    var answer = [];
    const moves = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let valid = true;
    let room = [];
    
    function dfs(x, y, count, visited) {
        // 거리가 2가 넘거나 이미 유효하지 않으면 중단
        if(count > 2 || !valid) return;
        
        if(count > 0 && room[x][y] === 'P') {
            // +1, +2칸에 P가 있을 시 중단
            valid = false;
            return;
        }
    
        
        for(let move of moves) {
            const newX = x + move[0];
            const newY = y + move[1];
            // 범위를 벗어나거나 파티션이거나 방문했으면 이동X
            if(newX >= 0 && newY >= 0 && newX < 5 && newY < 5 && room[newX][newY] !== 'X' && !visited[newX][newY]) {
                visited[newX][newY] = true;
                dfs(newX, newY, count + 1, visited);
                // 백트래킹
                visited[newX][newY] = false;
            }
        }
    }
    
    for(let i = 0; i < 5; i++) {
        valid = true;
        outer: for(let j = 0; j < 5; j++) {
            for(let k = 0; k < 5; k++) {
                if(places[i][j][k] === 'P') {
                    room = places[i];
                    const visited = Array.from({length: 5}, () => Array(5).fill(false));
                    visited[j][k] = true;
                    dfs(j, k, 0, visited);
                    if(!valid) break outer;
                }                
            }
        }
        answer.push(valid ? 1 : 0);
    }
    
    return answer;
}