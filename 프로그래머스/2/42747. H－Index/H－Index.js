function solution(citations) {
    var answer = 0;
    
    for(let i = citations.length; i > 0; i--) {
        let cited = 0;
        for(let count of citations) {
            if(count >= i) {
                cited++;
            }
        }
        if(cited >= i) {
            answer = i;
            break;
        }
    }
    
    return answer;
}