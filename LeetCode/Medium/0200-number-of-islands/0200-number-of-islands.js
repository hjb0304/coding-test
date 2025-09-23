/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    const visited = Array.from({length: grid.length}, () => Array(grid[0].length).fill(false));
    const moves = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    // 같은 섬에 있는 땅에 방문 표시
    function dfs(y, x) {
        visited[y][x] = true;

        for(move of moves) {
            const dy = y + move[0];
            const dx = x + move[1];
            // 범위 안에 있고 방문한 적 없고 땅일 경우에만 방문
            if(dy >= 0 && dy < grid.length && dx >= 0 && dx < grid[0].length && !visited[dy][dx] && grid[dy][dx] === "1") {
                dfs(dy, dx);
            }
        }
    }

    // 방문하지 않은 모든 땅에서 실행
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            if(!visited[i][j] && grid[i][j] === "1") {
                dfs(i, j);
                count++;
            }
        }
    }

    return count;
};