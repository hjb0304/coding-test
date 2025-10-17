/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
    const m = board.length;
    const n = board[0].length;
    const neighbors = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let live = 0;

            // 이웃 세포 중 살아있는 세포 개수 세기
            for (let [dy, dx] of neighbors) {
                const [ny, nx] = [i + dy, j + dx];
                // 죽어서 -1이 된 셀도 살아있던 셀이므로 같이 셈
                if (ny >= 0 && ny < m && nx >= 0 && nx < n && Math.abs(board[ny][nx]) === 1) live++;
            }

            // 변화가 있는 경우에 0,1 대신 다른 숫자로 변환(동시에 실행해야 하기 때문에)
            if (board[i][j] === 1 && (live < 2 || live > 3)) {
                board[i][j] = -1;
            } else if (board[i][j] === 0 && live === 3) board[i][j] = 2;
        }
    }

    // 다른 숫자로 변환된 숫자들 다시 0,1로 변환
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] > 0) {
                board[i][j] = 1;
            } else board[i][j] = 0;
        }
    }
};