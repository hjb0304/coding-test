/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const row = board.length;
    const col = board[0].length;
    let cy = 0;
    let cx = 0;
    const visited = Array.from({length: row}, () => Array(col).fill(false));
    const moves = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    function dfs(y, x, idx) {
        // 찾았을 때 상위로 true 전달
        if (idx === word.length) return true;

        for (let move of moves) {
            const [dy, dx] = move;
            const [ny, nx] = [y + dy, x + dx];

            if (ny >= 0 && ny < row && nx >= 0 && nx < col && !visited[ny][nx] && board[ny][nx] === word[idx]) {
                visited[ny][nx] = true;
                // 하위에서 받은 true를 상위로 전달
                if(dfs(ny, nx, idx + 1)) return true;
                visited[ny][nx] = false;
            } 
        }
        return false;
    }

    // 시작점 찾기
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (board[i][j] === word[0]) {
                visited[i][j] = true;
                if(dfs(i, j, 1)) {
                    return true;
                }
                visited[i][j] = false;
            }
        }
    }

    return false;
};