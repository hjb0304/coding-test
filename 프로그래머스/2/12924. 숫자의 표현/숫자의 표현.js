function solution(n) {
    var answer = 0;
    let sum = 0;
    
    for (let i = 1; i <= n; i++) {
        sum = i;
        for(let j = i + 1; j <= n; j++) {
            if(sum > n) {
                break;
            }
            if(sum === n) {
                answer++;
                break;
            }
            sum += j;
        }
    }
    
    return answer + 1;
}