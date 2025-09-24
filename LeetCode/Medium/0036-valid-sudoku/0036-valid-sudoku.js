/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // 각각의 행, 열, 박스에 대한 Set 생성
    const rowSet = Array.from({length: 9}, () => new Set()); 
    const colSet = Array.from({length: 9}, () => new Set()); 
    const boxSet = Array.from({length: 9}, () => new Set()); 

    const findBoxIdx = (i, j) => {
        if(i <= 2) {
            if(j <= 2) return 0;
            if(j <= 5) return 1;
            if(j <= 8) return 2;
        } else if(i <= 5) {
            if(j <= 2) return 3;
            if(j <= 5) return 4;
            if(j <= 8) return 5;
        } else if(i <= 8) {
            if(j <= 2) return 6;
            if(j <= 5) return 7;
            if(j <= 8) return 8;
        } 
    }

    // 각 숫자를 돌면서 Set에 값 넣기
    for(let i = 0; i < 9; i++) {
        for(let j = 0; j < 9; j++) {
            const num = board[i][j];
            if(num === ".") continue;
            // Set에 값이 이미 존재하면 false 반환
            if(rowSet[i].has(num) || colSet[j].has(num) || boxSet[findBoxIdx(i, j)].has(num)) return false;
            rowSet[i].add(num);
            colSet[j].add(num);
            boxSet[findBoxIdx(i, j)].add(num);
        }
    }

    return true;
};