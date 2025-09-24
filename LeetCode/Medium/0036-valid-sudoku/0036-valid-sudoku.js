/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // 각각의 행, 열, 박스에 대한 Set 생성
    const rowSet = Array.from({length: 9}, () => new Set()); 
    const colSet = Array.from({length: 9}, () => new Set()); 
    const boxSet = Array.from({length: 9}, () => new Set()); 

    // 각 숫자를 돌면서 Set에 값 넣기
    for(let i = 0; i < 9; i++) {
        for(let j = 0; j < 9; j++) {
            const num = board[i][j];
            const boxIdx = Math.floor(i / 3) * 3 + Math.floor(j / 3); 
            if(num === ".") continue;
            // Set에 값이 이미 존재하면 false 반환
            if(rowSet[i].has(num) || colSet[j].has(num) || boxSet[boxIdx].has(num)) return false;

            rowSet[i].add(num);
            colSet[j].add(num);
            boxSet[boxIdx].add(num);
        }
    }

    return true;
};