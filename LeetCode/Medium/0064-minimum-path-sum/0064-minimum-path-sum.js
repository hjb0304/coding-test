/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    // 각 칸까지의 경로의 최소 합
    const sum = Array.from({length: m}, () => Array(n).fill(0));
    sum[0][0] = grid[0][0];

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(i === 0 && j === 0) continue;
            // 왼쪽과 위쪽 숫자 중 더 작은 것 선택해서 누적
            const min = i === 0 ? sum[i][j - 1] : j === 0 ? sum[i - 1][j] : Math.min(sum[i - 1][j], sum[i][j - 1]);
            sum[i][j] = grid[i][j] + min;
        }
    }
    
    return sum[m - 1][n - 1];
};