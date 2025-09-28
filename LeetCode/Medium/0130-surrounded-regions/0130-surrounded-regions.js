/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    const m = board.length;
    const n = board[0].length;
    const moves = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    function dfs(y, x) {
        // 가장자리와 연결된 O는 L로 변경 (방문 배열 역할)
        board[y][x] = "L";

        for (let move of moves) {
            const [ny, nx] = [y + move[0], x + move[1]];
            if (ny >= 0 && ny < m && nx >= 0 && nx < n && board[ny][nx] === "O") {
                dfs(ny, nx);
            }
        }
    }

    // 모든 O인 가장자리에서 시작
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === "O" && (i === 0 || i === m - 1 || j === 0 || j === n - 1)) dfs(i, j);
        }
    }

    // L->O, O->X로 변경
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === "L") {
                board[i][j] = "O";
            } else if (board[i][j] === "O") {
                board[i][j] = "X";
            }
        }
    }
};