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
            if(first === dolls[dolls.length - 1]) {
                dolls.pop();
                answer += 2;
            } else {
                dolls.push(first);                
            }
        }
    });
    
    return answer;
}