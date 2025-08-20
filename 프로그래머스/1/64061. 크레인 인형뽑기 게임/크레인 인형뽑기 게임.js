function solution(board, moves) {
    let dolls = [];
    var answer = 0;
    
    moves.forEach(i => {
        let first;
        for(let j = 0; j < board.length; j++) {
            first = board[j][i - 1];
            if(first !== 0) {
                board[j][i - 1] = 0;
                break;}
        }
        
        if(first !== 0) {
        dolls.unshift(first);
        if(first === dolls[1]) {
            dolls.splice(0, 2);
            answer += 2;
        }
        }
    })
    return answer;
}