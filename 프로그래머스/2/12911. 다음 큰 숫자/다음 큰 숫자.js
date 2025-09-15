function solution(n) {
    var answer = n;
    let count = [...answer.toString(2)].filter(i => i == "1").length;
    
    while(answer >= n) {
        answer++;
        let newCount = [...answer.toString(2)].filter(i => i == "1").length;
        if(count === newCount) {
            break;
        }
    }
    
    return answer;
}