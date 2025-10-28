/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const row = obstacleGrid.length;
    const col = obstacleGrid[0].length;
    // 해당 칸에 갈 수 있는 방법의 수
    const ways = Array.from({length: row}, () => Array(col).fill(0));
    ways[0][0] = 1;

    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            if(i === 0 && j === 0) continue;
            const top = i > 0 ? ways[i - 1][j] : 0;
            const left = j > 0 ? ways[i][j - 1] : 0;
            // 장애물 없는 칸이면 윗칸+아랫칸 방법의 수를 더함
            if(obstacleGrid[i][j] === 0) ways[i][j] = top + left;
        }
    }

    return ways[row - 1][col - 1];

};