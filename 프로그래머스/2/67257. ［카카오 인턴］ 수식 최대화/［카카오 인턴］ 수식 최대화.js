function solution(expression) {
    var answer = 0;
    // 우선순위의 전체 경우의 수
    const priority = [['+', '-', '*'], ['+', '*', '-'], ['-', '+', '*'], ['-', '*', '+'], ['*', '+', '-'], ['*', '-', '+']];
    // 정규식 사용해 배열로 변환
    expression = expression.match(/\d+|[\+\-\*]/g);
    
    // 연산자별 연산 함수
    function cal(a, b, operator) {
        a = Number(a);
        b = Number(b);
        if(operator === '+') {
            return a + b;
        } else if(operator === '-') {
            return a - b;
        } else return a * b;
    }
    
    // 각 우선순위대로 계산 후 최댓값 구하기
    for(let com of priority) {
        const copied = [...expression];
        for(let operator of com) {
            let idx = 0;
            // 각 연산자가 남지 않을 때까지 연산
            while(true) {
                idx = copied.indexOf(operator);
                if(idx === -1) break;
                let sum = cal(copied[idx - 1], copied[idx + 1], operator);
                // 3개 요소 삭제하고 연산한 값 집어넣기 
                copied.splice(idx - 1, 3, sum);
            }
        }
        answer = Math.max(answer, Math.abs(copied[0]));
    }
    
    
    return answer;
}