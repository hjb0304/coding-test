function solution(board) {
    var answer = 0;
    // 상하좌우 이동
    const moves = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    // 방문 여부
    const visited = Array.from({length: board.length}, () => Array(board[0].length).fill(false));
    // 이동할 위치
    const que = [];    
    // 시작 지점 찾기
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            if(board[i][j] === 'R') {
                que.push([i, j, 0]);
            }
        }
    }
    
    function bfs() {
        while(que.length) {
            const [x, y, count] = que.shift();
            if(board[x][y] === 'G') {
                answer = count;
                break;
            }
            
            for(let move of moves) {
                let [nextX, nextY] = [x, y];
                // 한 번 이동: 장애물이나 가장자리에 부딪힐 때까지
                while(nextX >= 0 && nextY >= 0 && nextX < board.length && nextY < board[0].length && board[nextX][nextY] !== 'D') {
                    nextX += move[0];
                    nextY += move[1];
                }
                nextX -= move[0];
                nextY -= move[1];
                // 방문하지 않은 지점이고 이동할 수 있는 경우
                if(!visited[nextX][nextY] && (nextX !== x || nextY !== y)) {
                    visited[nextX][nextY] = true;
                    que.push([nextX, nextY, count + 1]);}
            }
        }
    }
    
    bfs();
    
    return answer ? answer : -1;
}