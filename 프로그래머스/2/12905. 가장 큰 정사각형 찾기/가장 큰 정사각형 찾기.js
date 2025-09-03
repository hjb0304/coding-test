function solution(board) {
    let max = 0;

    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            // 값이 1이면 인접한 자리의 값들 중 작은 값 + 1을 할당
            if(board[i][j] === 1 && i > 0 && j > 0) {
                board[i][j] = Math.min(board[i - 1][j - 1], board[i - 1][j], board[i][j - 1]) + 1;
            }
            // 가장 큰 값 구하기
            max = Math.max(max, board[i][j]);
        }
    }

    return max * max;
}