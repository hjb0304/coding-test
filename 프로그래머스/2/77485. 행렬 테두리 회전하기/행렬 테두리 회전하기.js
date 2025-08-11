function solution(rows, columns, queries) {
    var answer = [];
    const matrix = Array.from({length: rows}, () => Array(columns).fill(0))
    let num = 1;
    
    // 행렬 생성
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < columns; j++) {
            matrix[i][j] = num;
            num++;
        }
    }
    
    // 회전
    for(let query of queries) {
        const [x1, y1, x2, y2] = query;
        let current = 0;
        let prev = 0;
        let min = Infinity;
        
        // 왼쪽으로
        for(let j = y1; j <= y2; j++) {
                current = matrix[x1 - 1][j - 1];
                matrix[x1 - 1][j - 1] = prev;            
                prev = current;  
                if(prev < min && prev !== 0) min = prev;
        }
        
        // 아래쪽으로
        for(let i = x1 + 1; i <= x2; i++) {
                current = matrix[i - 1][y2 - 1];
                matrix[i - 1][y2 - 1] = prev;
                prev = current;         
                if(prev < min && prev !== 0) min = prev;
            
        }
        
        // 오른쪽으로
        for(let j = y2 - 1; j >= y1; j--) {
                current = matrix[x2 - 1][j - 1];
                matrix[x2 - 1][j - 1] = prev;
                prev = current; 
                if(prev < min && prev !== 0) min = prev;
            
        }
        
        // 위쪽으로
        for(let i = x2 - 1; i >= x1; i--) {
                current = matrix[i - 1][y1 - 1];
                matrix[i - 1][y1 - 1] = prev;
            
                prev = current;  
                if(prev < min && prev !== 0) min = prev;
            
        }
        answer.push(min);
    }
    
    return answer;
}