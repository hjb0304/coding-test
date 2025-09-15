function solution(brown, yellow) {
    let answer = [];
    
    for(let i = 1; i <= yellow; i++) {
        let x = 0;
        let y = 0;
        // i가 yellow의 약수일 때 가로, 세로 길이 임의 설정
        if(yellow % i === 0) {
            y = i;
            x = yellow / i;
        }
         // 조건에 맞으면 정답 반환
         if((y + 2) * (x + 2) === brown + yellow) {
            answer.push(Math.max(x + 2, y + 2));
            answer.push(Math.min(x + 2, y + 2));
             break;
        }
    }
    
    
    return answer;
}