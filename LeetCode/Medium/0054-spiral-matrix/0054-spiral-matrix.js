/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const row = matrix.length;
    const col = matrix[0].length;
    const answer = [];
    let [y, x] = [0, 0];
    // 처음에는 오른쪽으로 이동
    let [dy, dx] = [0, 1];

    for(let i = 0; i < row * col; i++) {
        // 현재 칸의 숫자 기록
        answer.push(matrix[y][x]);
        // 방문 기록
        matrix[y][x] = '';

        // 끝에 도달하거나 이미 방문한 칸이면 이동 방향 바꾸기
        if(x + dx < 0 || x + dx >= col || y + dy < 0 || y + dy >= row || matrix[y + dy][x + dx] === '') {
            [dx, dy] = [-dy, dx];
        }

        // 현재 이동 방향으로 한 칸 이동
        x += dx;
        y += dy;
    }

    return answer;
};